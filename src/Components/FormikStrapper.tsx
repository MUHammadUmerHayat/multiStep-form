import {Form, Formik, FormikConfig, FormikValues} from 'formik'

function FormikStrapper({children, ...props}: FormikConfig<FormikValues>) {
    return (
        <Formik {...props}>
            <Form>{children}</Form>
        </Formik>
    )
}

export default FormikStrapper
