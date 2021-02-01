import {useField} from "formik";
import {MyCheckboxType} from "../FormFieldTypes"
import {FormControlLabel, Checkbox} from "@material-ui/core"


export function MyCheckbox(props: MyCheckboxType) {
    const [field] = useField({
        name: props.name,
        type: "checkbox",
        value: props.value
    })
    return (
        <FormControlLabel control={<Checkbox {...props} {...field}/>} label={props.label} color="primary"/>
    )
}
