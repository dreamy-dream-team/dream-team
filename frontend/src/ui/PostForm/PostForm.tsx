// import {Button, Col, FloatingLabel, Form, FormControl, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
// import {MutationResponse, usePostPostMutation} from "../../store/apis.ts";
// import {PartialPost} from "../../shared/interfaces/Post.tsx";
// import {Formik, FormikHelpers, FormikProps} from "formik";
// import {object, string} from "yup";
// import {DisplayError} from "../../shared/components/display-error/DisplayError.tsx";
// import {DisplayStatus} from "../../shared/components/display-status/Display.Status.tsx";
// import {FormDebugger} from "../../shared/components/FormDebugger.tsx";
//
//
//
// export function PostForm() {
//     const [submit] = usePostPostMutation()
//         const validator = object({
//             postContent: string().required('post content is required').max(1024, 'the content for this post is too long'),
//             postTitle: string().required('Title is required').max(512, 'the title for this post is too long')
//         })
//
//     const initialValues: PartialPost = {
//         postProfileId: "",
//         postContent: "",
//         postDateTime: null,
//         postProfileHandleIsVisible: true,
//         postIsPublished: true,
//         postTitle: ""
//
//     }
//
//     async function handleSubmit(values: PartialPost, actions: FormikHelpers<PartialPost>) {
//             const {resetForm, setStatus} = actions
//             console.log(values)
//         const result = await submit(values) as MutationResponse
//         const {data: response, error} = result
//
//         if(error){
//             setStatus({type: error.type, message: error.message,})
//         } else if (response?.status === 200) {
//             resetForm()
//             setStatus({type: response.type, message: response.message})
//         } else {
//         setStatus({type: response?.type,  message: response?.message})
//     }
//     }
//     return(
//         <>
//             <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validator}>
//                 {PostFormContent}
//             </Formik>
//         </>
//     )
// }
//
// function PostFormContent(props: FormikProps<PartialPost>) {
//     const {
//         status,
//         values,
//         errors,
//         touched,
//         dirty,
//         isSubmitting,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         handleReset
// } = props;
//
//
//     return (
//         <>
//
//             <div className={'my-4 mx-auto px-3 py-2 border rounded-1 shadow-lg'} style={{overflow: 'auto', width: "35rem"}}>
//                     <FloatingLabel
//                         controlId="floatingInput"
//                         label="Title"
//                         className="mb-1 mx-auto"
//                     >
//                         <Form.Control type="title" placeholder="Title" style={{ height: '50px', width: '500px'}}/>
//                     </FloatingLabel>
//                     <DisplayError errors={errors} touched={touched} field={"postTitle"}/>
//
//                     <FloatingLabel controlId="floatingTextarea2" label="Tell us your dream...">
//                         <Form.Control
//                             as="textarea"
//                             placeholder="Tell us your dream..."
//                             style={{ height: '175px', width: '500px'}}
//                         />
//                     </FloatingLabel>
//                     <DisplayError errors={errors} touched={touched} field={"postContent"}/>
//                     <Form className={'align-content-center'}>
//                         <p className={'mb-0 text-center'}>Add category</p>
//                         <ToggleButtonGroup type="checkbox" className="mb-1">
//                             <ToggleButton variant={'outline-secondary'} id="tbg-check-1" value={1}>
//                                 Funny
//                             </ToggleButton>
//                             <ToggleButton variant={'outline-secondary'} id="tbg-check-2" value={2}>
//                                 Nightmare
//                             </ToggleButton>
//                             <ToggleButton variant={'outline-secondary'} id="tbg-check-3" value={3}>
//                                 Animals
//                             </ToggleButton>
//                             <ToggleButton variant={'outline-secondary'} id="tbg-check-4" value={4}>
//                                 School
//                             </ToggleButton>
//                             <ToggleButton variant={'outline-secondary'} id="tbg-check-5" value={5}>
//                                 Work
//                             </ToggleButton>
//                             <ToggleButton variant={'outline-secondary'} id="tbg-check-6" value={6}>
//                                 Weird
//                             </ToggleButton>
//                         </ToggleButtonGroup>
//                         <br/>
//                         <ToggleButtonGroup type="checkbox" className="mb-2">
//                             <ToggleButton variant={'outline-secondary'} id="tbg-check-7" value={7}>
//                                 Reoccurring
//                             </ToggleButton>
//                             <ToggleButton variant={'outline-secondary'} id="tbg-check-8" value={8}>
//                                 Out of Body
//                             </ToggleButton>
//                             <ToggleButton variant={'outline-secondary'} id="tbg-check-9" value={9}>
//                                 Daydream
//                             </ToggleButton>
//                             <ToggleButton variant={'outline-secondary'} id="tbg-check-10" value={10}>
//                                 Lucid Dream
//                             </ToggleButton>
//                         </ToggleButtonGroup>
//                         {/*//TODO ask about this error if they don't choose a category*/}
//                         {/*DisplayError*/}
//                     </Form>
//
//                     <Form>
//                         <Row className="align-items-center">
//                             <Col xs={'4'} className="my-1 me-0">
//                                 <Form.Check
//                                     type="checkbox"
//                                     id="autoSizingCheck2"
//                                     label="Anonymous"
//                                 />
//                             </Col>
//                             <Col xs={'4'} className="my-1 ms-0">
//                                 <Form.Check
//                                     type="checkbox"
//                                     id="autoSizingCheck2"
//                                     label="Private"
//                                 />
//                             </Col>
//                             <Col xs={'8'} className="my-1 ms-0">
//                                 <Button type="submit">Submit</Button>
//                             </Col>
//                         </Row>
//                     </Form>
//                     <DisplayStatus status={status}/>
//                     <FormDebugger {...props}/>
//             </div>
//         </>
//     );
// }