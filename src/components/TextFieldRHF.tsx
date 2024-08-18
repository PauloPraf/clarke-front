import {ChangeEvent} from 'react';
import {styled, TextField, TextFieldProps} from '@mui/material';
import {Control, FieldValues, Path, useController} from 'react-hook-form';

export type InputTransformer = {
    input: (value: any) => any;
    output: (value: any) => any;
};

const inputTransformerDefaultValue: InputTransformer = {
    input: (value: any) => value,
    output: (value: any) => value,
};

type Props<TFieldValues extends FieldValues = FieldValues> = TextFieldProps & {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    transformer?: InputTransformer;
};

// não permite letras caso input seja type="number"
const StyledTextField = styled(TextField)`
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        display: none;
    }
`;

export const TextFieldRHF = <TFieldValues extends FieldValues>({
                                                                   name,
                                                                   control,
                                                                   transformer = inputTransformerDefaultValue,
                                                                   ...rest
                                                               }: Props<TFieldValues>): JSX.Element => {
    const {field, fieldState} = useController<TFieldValues>({
        name,
        control,
    });

    const {onBlur, onChange, value} = field;

    // O campo não aceita valores nulos
    const newValue = value === null ? '' : value;

    const transformedValue = transformer.input(newValue);
    const transformedHandleChange = (e: ChangeEvent<HTMLInputElement>) =>
        onChange(transformer.output(e.target.value));

    return (
        <StyledTextField
            {...rest}
            value={transformedValue}
            onChange={transformedHandleChange}
            onBlur={onBlur}
            helperText={fieldState.error?.message}
            error={!!fieldState.error}
        />
    );
};
