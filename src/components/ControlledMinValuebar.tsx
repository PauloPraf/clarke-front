import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {Box, SxProps, Theme} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search"; // Você pode substituir por um ícone apropriado

type Props = {
    placeholder: string;
    onChange: (value?: number) => void;
    initialValue?: number;
    debounceTimeMs?: number;
    disabled?: boolean;
    width?: string;
    sx?: SxProps<Theme>;
};

export function ControlledNumberInput({
                                          placeholder,
                                          onChange,
                                          initialValue,
                                          debounceTimeMs = 300,
                                          disabled,
                                          width = "200px",
                                          sx,
                                      }: Props) {
    const [value, setValue] = useState<number | undefined>(initialValue);
    const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
        undefined,
    );

    useEffect(() => {
        return () => {
            if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
        };
    }, []);

    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
            ? Number(event.target.value)
            : undefined;
        setValue(newValue);

        if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
        debounceTimeoutRef.current = setTimeout(() => {
            onChange(newValue);
        }, debounceTimeMs);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onChange(value);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                p: "0 6px",
                display: "flex",
                alignItems: "center",
                border: "1px solid #ced4da",
                borderRadius: "6px",
                width: `${width}`,
                ...sx,
            }}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder={placeholder}
                type="number"
                value={value !== undefined ? value : ""}
                onChange={handleValueChange}
                disabled={disabled}
            />
            <IconButton sx={{p: "7px"}}>
                <SearchIcon/>
            </IconButton>
        </Box>
    );
}
