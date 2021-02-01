import { Card, CardContent } from "@material-ui/core";
import { InitialValues } from "../validations&InitialValues";
import UserDetails from "./UserDetails";
import Privacy from "./Privacy";
import Review from "./Review";
import FormikStrapper from "../FormikStrapper";

function MyForm() {
    const sleep = (time: any) => new Promise((acc) => setTimeout(acc, time))
    return (
            <Card className="container">
                <CardContent>
                    <FormikStrapper
                        initialValues={InitialValues}
                        onSubmit={async (values) => {
                            await sleep(3000)
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
