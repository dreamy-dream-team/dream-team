import {Button, Col, FloatingLabel, Form, Row, Spinner, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {MutationResponse, useGetAllCategoryQuery, usePostPostMutation} from "../../store/apis.ts";
import {PartialPost} from "../../shared/interfaces/Post.tsx";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {object, string} from "yup";
import {DisplayError} from "../../shared/components/display-error/DisplayError.tsx";
import {DisplayStatus} from "../../shared/components/display-status/Display.Status.tsx";
import {FormDebugger} from "../../shared/components/FormDebugger.tsx";
import {Category} from "../../shared/interfaces/Category.tsx";
import React from "react";



export function PostForm() {
    const [submit] = usePostPostMutation()
        const validator = object({
            postContent: string().required('post content is required').max(1024, 'the content for this post is too long'),
            postTitle: string().required('Title is required').max(512, 'the title for this post is too long')
        })

    const initialValues: PartialPost = {
        postProfileId: "",
        postContent: "",
        postProfileHandleIsVisible: true,
        postIsPublished: true,
        postTitle: ""

    }

    async function handleSubmit(values: PartialPost, actions: FormikHelpers<PartialPost>) {
            const {resetForm, setStatus} = actions
            // console.log(values)
        const result = await submit(values) as MutationResponse
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
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
} = props;

    const {data: dataCategory, isLoading: isLoadingCategory} = useGetAllCategoryQuery("")
    const categories = dataCategory ?? []
    if(isLoadingCategory) {
        return(<Spinner animation="border" />)
    }
    console.log(categories)

    return (
        <>
        <Form className={'align-content-center'}>
            <div className={'my-4 mx-auto px-3 py-2 border rounded-1 shadow-lg'} style={{overflow: 'auto', width: "35rem"}}>
                <div>
                    <FloatingLabel
                        controlId="postTitle"
                        label="Title"
                        className="mb-1 mx-auto"
                    >
                        <Form.Control type="text" onChange={handleChange} onBlur={handleBlur} value={values.postTitle} name={"postTitle"} placeholder="Title" style={{ height: '50px', width: '500px'}}/>
                    </FloatingLabel>
                    <DisplayError errors={errors} touched={touched} field={"postTitle"}/>

                    <FloatingLabel controlId="postContent" label="Tell us your dream...">
                        <Form.Control type="text" onChange={handleChange} onBlur={handleBlur} name={"postContent"} value={values.postContent}
                            as="textarea"
                            placeholder="Tell us your dream..."
                            style={{ height: '175px', width: '500px'}}
                        />
                    </FloatingLabel>
                    <DisplayError errors={errors} touched={touched} field={"postContent"}/>
                        <p className={'mb-0 text-center'}>Add category</p>
                        <ToggleButtonGroup type="checkbox" className="mb-1 flex-wrap">
                            {categories.map(category =><ToggleButton variant={'outline-secondary'} id={category.categoryId} value={category.categoryId}>
                                {category.categoryName}
                            </ToggleButton>)}

                        </ToggleButtonGroup>

                        {/*//TODO ask about this error if they don't choose a category*/}
                        {/*DisplayError*/}
                    </div>

                    <div>
                        <Row className="align-items-center">
                            <Col xs={'4'} className="my-1 me-0">
                                <Form.Check
                                    type="checkbox"
                                    id="autoSizingCheck2"
                                    label="Anonymous"
                                />
                            </Col>
                            <Col xs={'4'} className="my-1 ms-0">
                                <Form.Check
                                    type="checkbox"
                                    id="autoSizingCheck2"
                                    label="Private"
                                />
                            </Col>
                            <Col xs={'8'} className="my-1 ms-0">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </div>
                    <DisplayStatus status={status}/>
                    <FormDebugger {...props}/>
            </div>
            </Form>
        </>
    );
}