import { Form, ErrorMessage } from "formik";
import { Box, FormGroup } from "@material-ui/core";
import { MyCheckbox } from "../Checkbox";

function Review({ submit }: any) {
    return (
        <Form>
            <Box marginBottom={2}>
                <FormGroup>
                    <MyCheckbox name="AcceptedTermAndCondition" label="Accepted Term And Condition" />
                    <ErrorMessage name="AcceptedTermAndCondition" />
                </FormGroup>
            </Box>
        </Form>
    );
}

export default Review
