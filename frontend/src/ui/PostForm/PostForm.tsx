import {
    Button,
    FloatingLabel,
    Form,
    Spinner,

} from "react-bootstrap";
import {
    MutationResponse,
    useGetAllCategoryQuery,
    usePostPostCategoryMutation,
    usePostPostMutation
} from "../../store/apis.ts";
import {PartialPost} from "../../shared/interfaces/Post";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {object, string} from "yup";
import {DisplayError} from "../../shared/components/display-error/DisplayError";
import {DisplayStatus} from "../../shared/components/display-status/Display.Status";
import {useJwtToken} from "../../shared/hooks/useJwtHook";
import styles from "./PostForm.module.css"





export function PostForm() {
    const [submit] = usePostPostMutation()
    const [submitPostCategory] = usePostPostCategoryMutation()
        const validator = object({
            postContent: string().required('post content is required').max(1024, 'the content for this post is too long'),
            postTitle: string().required('Title is required').max(512, 'the title for this post is too long')
            // postCategoryCategoryIds: array().length
        })

    const {profile} = useJwtToken()
    console.log(profile)

    const initialValues: any = {
        postProfileId: "",
        postContent: "",
        postProfileHandleIsVisible: true,
        postIsPublished: true,
        postTitle: "",
        postCategoryCategoryIds:[]

    }

    async function handleSubmit(values: PartialPost, actions: FormikHelpers<PartialPost>) {
        console.log(values)
        values.postProfileId = profile?.profileId as string
            const {resetForm, setStatus} = actions
        if (values.postIsPublished === false && values.postProfileHandleIsVisible === false) {
            values.postProfileHandleIsVisible = true
        }
        const result = await submit(values) as MutationResponse
        //loop over postCategoryCategoryIds array and submit categories for this post
        // console.log(result.data.data)
        // console.log(values.postCategoryCategoryIds)
        for (let categoryId of values.postCategoryCategoryIds) {
            await submitPostCategory({postCategoryCategoryId: categoryId, postCategoryPostId: result.data.data.postId})
        }


        const {data: response, error} = result

        if(error){
            setStatus({type: error.type, message: error.message,})
        } else if (response?.status === 200) {
            resetForm()
            setStatus({type: response.type, message: response.message})
        } else {
        setStatus({type: response?.type,  message: response?.message})
    }
    }
    return(
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validator}>
                {PostFormContent}
            </Formik>
        </>
    )
}

function PostFormContent(props: FormikProps<PartialPost>) {
    const {
        status,
        values,
        errors,
        touched,
        // dirty,
        // isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        // handleReset
} = props;

    const {data: dataCategory, isLoading: isLoadingCategory} = useGetAllCategoryQuery("")
    const categories = dataCategory ?? []
    if(isLoadingCategory) {
        return(<Spinner animation="border" />)
    }
    console.log(categories)


    return (
        <>
      <div className={styles.postFormWrapper}>
        <Form onSubmit={handleSubmit} className={"border rounded-2 shadow-lg mx-auto"}>
            <div className={styles.postForm}>
                <div className={"border rounded-1 "}>
                    <FloatingLabel className={styles.floating}
                        controlId="postTitle"
                        label="Title"
                        className="mb-1 mx-auto"
                    >
                        <Form.Control type="text"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.postTitle}
                                      name={"postTitle"}
                                      placeholder="Title"
                                      style={{ height: '50px', width: '500px'}}/>
                    </FloatingLabel>
                    <DisplayError errors={errors} touched={touched} field={"postTitle"}/>

                    <FloatingLabel controlId="postContent" label="Tell us your dream...">
                        <Form.Control
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name={"postContent"}
                            value={values.postContent}
                            as="textarea"
                            placeholder="Tell us your dream..."
                            style={{ height: '175px', width: '500px'}}
                        />
                    </FloatingLabel>
                    <DisplayError errors={errors} touched={touched} field={"postContent"}/>

                    <Form.Group controlId={""}>
                        <fieldset>
                            <legend>Add a category:</legend>
                            {categories.map((category, index) =>
                            <div className="form-check form-check-inline me-0 ps-0" key={index}>
                                <input type="checkbox"
                                       className="btn-check"
                                       autocomplete="off"
                                       id={category.categoryName}
                                       name={"postCategoryCategoryIds"}
                                       value={category.categoryId}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                    />
                                    <label className="btn btn-outline-secondary" htmlFor={category.categoryName}>{category.categoryName}</label>
                            </div>
                                )}
                        </fieldset>
                    </Form.Group>

                    <DisplayError errors={errors} touched={touched} field={"postCategory"}/>

                        {/*//TODO ask about this error if they don't choose a category*/}
                        {/*DisplayError*/}
                    </div>

                <fieldset>
                    <div class="form-check-inline form-switch ">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="postProfileHandleIsVisible"
                            name={"postProfileHandleIsVisible"}
                            value={0}
                            onChange={handleChange}
                            onBlur={handleBlur}

                        /> <label htmlFor="postProfileHandleIsVisible">Anonymous</label>
                    </div>
                    <div className="form-check-inline form-switch mx-auto">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="postIsPublished"
                            name={"postIsPublished"}
                            value={0}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        /> <label htmlFor="postIsPublished">Private</label>
                    </div>
                </fieldset>
                    <div>
                        <Button variant="dark" type="submit">Submit</Button>
                    </div>
                    <DisplayStatus status={status}/>
                    {/*<FormDebugger {...props}/>*/}
            </div>
            </Form>
      </div>
        </>
    );
}