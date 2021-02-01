import { CheckboxProps } from "@material-ui/core"
import { FormikConfig, FormikValues } from "formik";

export interface FormFieldTypes {
    FirstName: string;
    LastName: string;
    Email: string;
    Age: number;
    Address: string;
    Gender: Array<"Male" | "Female">;
    Password: string;
    ConfirmPassword: string;
    AcceptedTermAndCondition: boolean;
}

export interface MyCheckboxType extends CheckboxProps {
    name: string;
    value?: string | number;
    label?: string;
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}