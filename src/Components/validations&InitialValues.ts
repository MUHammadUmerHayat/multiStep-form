import * as Yup from "yup"
import { FormFieldTypes } from "../FormFieldTypes"

export const validations = Yup.object({
    FirstName: Yup.string().required().min(2).max(10),
    LastName: Yup.string().required().min(2).max(10),
    Email: Yup.string().email().required(),
    Age: Yup.number().required().min(18).max(50),
    Gender: Yup.array(Yup.string().oneOf(["Male", "Female"])).required().min(1),
    Address: Yup.string().required().min(20).max(100),
    Password: Yup.string().required(),
    ConfirmPassword: Yup.string().required(),
    AcceptedTermAndCondition: Yup.boolean().oneOf([true]),
});


export const InitialValues: FormFieldTypes = {
    FirstName: "",
    LastName: "",
    Email: "",
    Age: 0,
    Gender: [],
    Address: "",
    Password: "",
    ConfirmPassword: "",
    AcceptedTermAndCondition: false,
}