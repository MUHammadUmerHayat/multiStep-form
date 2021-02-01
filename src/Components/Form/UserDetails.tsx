import { Field, ErrorMessage } from "formik";
import { Box, FormGroup, TextField, Typography } from "@material-ui/core";
import { MyCheckbox } from "../Checkbox";
import FormikStep from "../FormikStep";
import {validations} from "../validations&InitialValues"

function UserDetails() {
    return (
        <FormikStep validationSchema={validations}>
            <Box marginBottom={2}>
                <FormGroup>
                    <Field
                        name="FirstName"
                        as={TextField}
                        label="First Name"
                        variant="outlined"
                        helperText={<ErrorMessage name="FirstName" />}
                        required />
                </FormGroup>
            </Box>
            <Box marginBottom={2}>
                <FormGroup>
                    <Field
                        name="LastName"
                        as={TextField}
                        label="Last Name"
                        variant="outlined"
                        helperText={<ErrorMessage name="LastName" />}
                        required />
                </FormGroup>
            </Box>
            <Box marginBottom={2}>
                <FormGroup>
                    <Field
                        name="Email"
                        as={TextField}
                        label="Email Address"
                        variant="outlined"
                        helperText={<ErrorMessage name="Email" />}
                        required />
                </FormGroup>
            </Box>
            <Box marginBottom={2}>
                <FormGroup>
                    <Field
                        name="Age"
                        as={TextField}
                        label="Age"
                        variant="outlined"
                        helperText={<ErrorMessage name="Age" />}
                        required />
                </FormGroup>
            </Box>
            <Box marginBottom={2}>
                <FormGroup>
                    <Typography variant="subtitle2">Select Gender:</Typography>
                    <MyCheckbox name="Gender" value="Male" label="Male" />
                    <MyCheckbox name="Gender" value="Female" label="Female" />
                    <ErrorMessage name="Gender" />
                </FormGroup>
            </Box>
            <Box marginBottom={2}>
                <FormGroup>
                    <Field
                        name="Address"
                        as={TextField}
                        label="Address"
                        multiline rows={3}
                        rowsMax={10}
                        variant="outlined"
                        helperText={<ErrorMessage name="Address" />}
                        required />
                </FormGroup>
            </Box>
        </FormikStep>
    );
}

export default UserDetails
