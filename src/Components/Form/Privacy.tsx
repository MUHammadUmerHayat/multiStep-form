import { Field, ErrorMessage } from "formik";
import { Box, FormGroup, TextField } from "@material-ui/core";
import FormikStep from "../FormikStep";
import {validations} from "../validations&InitialValues"
function Privacy() {
    return (
        <FormikStep validationSchema={validations} label="Privacy">
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
        </FormikStep>
    );
}

export default Privacy
