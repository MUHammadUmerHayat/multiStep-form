import { Form, Formik } from "formik";
import { Button, Card, CardContent, Typography, } from "@material-ui/core";
import {validations, InitialValues} from "../validations&InitialValues";
import UserDetails from "./UserDetails";
import Privacy from "./Privacy";
import Review from "./Review";
// import FormikStrapper from "../FormikStrapper";

function MyForm() {
    return (
        <Card className="container">
            <CardContent>
                <Typography variant="h4" align="center">CREATE NEW ACCOUNT</Typography>
                <Formik
                    initialValues={InitialValues}
                    validationSchema={validations}
                    onSubmit={(values) => {
                        console.log(values);
                    }}>
                    {({ isSubmitting, isValidating }) => (
                        <Form>
                            <UserDetails/>
                            <Privacy/>
                            <Review/>
                            <Button color="primary" variant="contained">Back</Button>
                            <Button type="submit" color="primary" variant="contained" disabled={isSubmitting || isValidating}>Next</Button>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
    );
}

export default MyForm;
