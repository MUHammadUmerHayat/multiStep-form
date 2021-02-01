import { Children, useState, ReactElement } from 'react'
import { Button, Step, Stepper, StepLabel, Grid, CircularProgress } from '@material-ui/core'
import { Form, Formik, FormikConfig, FormikValues } from 'formik'
import { FormikStepProps } from '../FormFieldTypes'

function FormikStrapper({ children, ...props }: FormikConfig<FormikValues>) {
    const childrenArray = Children.toArray(children) as ReactElement<FormikStepProps>[];
    const [step, setStep] = useState(0)
    const currentChild = childrenArray[step]
    const isLastStep = () => step === childrenArray.length - 1;
    const [completed, setCompleted] = useState(false)

    return (
        <Formik {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                if (isLastStep()) {
                    await props.onSubmit(values, helpers)
                    helpers.resetForm()
                    setCompleted(true)
                    setStep(0)
                    setCompleted(false)
                } else {
                    setStep((s) => s + 1)
                }
            }}>
            {({ isSubmitting, isValidating, errors }) => (
                <Form>
                    <Stepper className="stepper" activeStep={step} alternativeLabel>
                        {childrenArray.map((child, index) => (
                            <Step key={index} completed={step > index || completed}>
                                <StepLabel>{child.props.label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {currentChild}

                    <Grid container spacing={2}>
                        {step > 0 ?
                            <Grid item>
                                <Button
                                    onClick={() => setStep((s) => s - 1)}
                                    disabled={isSubmitting || isValidating}
                                    color="primary"
                                    variant="contained">
                                    Back
                                </Button>
                            </Grid>
                            : null}
                        <Grid item>
                            <Button
                                type="submit"
                                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                                disabled={isSubmitting || isValidating}
                                color="primary" variant="contained">
                                {isSubmitting ? "Submitting" : isLastStep() ? "Submit" : "Next"}
                            </Button>
                        </Grid>
                    </Grid>
                    <pre>{JSON.stringify(errors)}</pre>
                </Form>
            )}
        </Formik>
    )
}

export default FormikStrapper
