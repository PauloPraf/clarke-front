import {styled, TextField, TextFieldProps} from "@mui/material";
import {Control, FieldValues, Path, useController} from "react-hook-form";

type Props<NFieldValues extends FieldValues = FieldValues> = TextFieldProps & {
    control: Control<NFieldValues>;
    name: Path<NFieldValues>;
    disabled: boolean;
};

// não permite letras no type="number"
const StyledTextField = styled(TextField)`
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        display: none;
    }
`;

const NumberFieldRHF = <NFieldValues extends FieldValues>({
                                                              name,
                                                              control,
                                                              disabled,
                                                              ...rest
                                                          }: Props<NFieldValues>): JSX.Element => {
    const {field, fieldState} = useController<NFieldValues>({
        name,
        control,
    });

    const {onBlur, onChange, value} = field;

    return (
        <StyledTextField
            {...rest}
            disabled={disabled}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            helperText={fieldState.error?.message}
            error={!!fieldState.error}
        />
    );
};

export default NumberFieldRHF;
