import { ErrorMessage } from "formik";
import { Box, FormGroup, Typography } from "@material-ui/core";
import { MyCheckbox } from "../Checkbox";
import FormikStep from "../FormikStep";
import {validations} from "../validations&InitialValues"

function Review() {
    return (
        <FormikStep validationSchema={validations} label="Review">
            <Box marginBottom={2}>
                <FormGroup>
                    <Typography variant="body2">{`
                        Last updated: 2021-02-01
                        1. Introduction
                        Welcome to Hassan (“Company”, “we”, “our”, “us”)!
                        These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at HassanMujtaba.com (together or individually “Service”) operated by Hassan.
                        Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.
                        Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound of them.
                        If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at hassanmujtaba@gmail.com so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
                        2. Communications

                        By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at hassanmujtaba@gmail.com.

                        3. Purchases

                        If you wish to purchase any product or service made available through Service (“Purchase”), you may be asked to supply certain information relevant to your Purchase including but not limited to, your credit or debit card number, the expiration date of your card, your billing address, and your shipping information.

                        You represent and warrant that: (i) you have the legal right to use any card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.

                        We may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.

                        We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.

                        We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.
                    `}
                    </Typography>
                    <MyCheckbox name="AcceptedTermAndCondition" label="Accepted Term And Condition" />
                    <ErrorMessage name="AcceptedTermAndCondition" />
                </FormGroup>
            </Box>
        </FormikStep>
    );
}

export default Review
