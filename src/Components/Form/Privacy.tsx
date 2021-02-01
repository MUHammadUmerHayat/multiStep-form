import { Field, Form, ErrorMessage } from "formik";
import { Box, FormGroup, TextField } from "@material-ui/core";

function Privacy({ submit }: any) {
    return (
        <Form>
            <Box marginBottom={2}>
                <FormGroup>
                    <Field
                        name="Password"
                        as={TextField}
                        label="Password"
                        required
                        variant="outlined"
                        helperText={<ErrorMessage name="Password" />} />
                </FormGroup>
            </Box>
            <Box marginBottom={2}>
                <FormGroup>
                    <Field
                        name="ConfirmPassword"
                        as={TextField}
                        label="Confirm Password"
                        variant="outlined"
                        helperText={<ErrorMessage name="ConfirmPassword" />} />
                </FormGroup>
            </Box>
        </Form>
    );
}

export default Privacy
