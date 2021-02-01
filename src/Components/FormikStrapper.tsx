import { Children, useState, ReactElement } from 'react'
import { Button } from '@material-ui/core'
import { Form, Formik, FormikConfig, FormikValues } from 'formik'
import { FormikStepProps } from '../FormFieldTypes'

function FormikStrapper({ children, ...props }: FormikConfig<FormikValues>) {
    const childrenArray = Children.toArray(children) as ReactElement<FormikStepProps>[];
    const [step, setStep] = useState(0)
    const currentChild = childrenArray[step] 
    const isLastStep = () => step === childrenArray.length - 1;

    return (
        <Formik {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                if (isLastStep()) {
                    await props.onSubmit(values, helpers)
                } else {
                    setStep((s) => s + 1)
                }
            }}>
            {({ isSubmitting, isValidating }) => (
                <Form>
                    {currentChild}

                    {step > 0 ?
                        <Button onClick={() => setStep((s) => s - 1)} color="primary" variant="contained">Back</Button>
                        : null}

                    <Button type="submit" color="primary" variant="contained">{isLastStep() ? "Submit" : "Next"}</Button>
                </Form>
            )}
        </Formik>
    )
}

export default FormikStrapper
