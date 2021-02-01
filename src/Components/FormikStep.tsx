import { FormikConfig, FormikValues } from 'formik'
import {FormikStepProps} from "../FormFieldTypes";



function FormikStep({ children }: FormikStepProps) {
    return (
        <>
            {children}
        </>
    )
}

export default FormikStep
