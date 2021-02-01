import { Form, Formik } from "formik";
import { Card, CardContent, Typography, } from "@material-ui/core";
import { validations, InitialValues } from "../validations&InitialValues";
import UserDetails from "./UserDetails";
import Privacy from "./Privacy";
import Review from "./Review";
import FormikStrapper from "../FormikStrapper";

function MyForm() {
    return (
        <Card className="container">
            <CardContent>
                <Typography variant="h4" align="center">CREATE NEW ACCOUNT</Typography>
                <FormikStrapper
                    initialValues={InitialValues}
                    onSubmit={(values) => {
                        console.log(values);
                    }}>
                    <UserDetails />
                    <Privacy />
                    <Review />
                </FormikStrapper>
            </CardContent>
        </Card>
    );
}

export default MyForm;
