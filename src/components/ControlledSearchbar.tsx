import {FormEvent, useEffect, useRef} from "react";
import {Box, SxProps, Theme} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
    placeholder: string;
    onSearch: (search?: string) => void;
    initialValue?: string;
    searchDebounceTimeMs?: number;
    disabled?: boolean;
    width?: string;
    sx?: SxProps<Theme>;
};

export function ControlledSearchbar({
                                        placeholder,
                                        onSearch,
                                        initialValue,
                                        searchDebounceTimeMs = 300,
                                        disabled,
                                        width = "200px",
                                        sx,
                                    }: Props) {
    const searchTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

    useEffect(
        () => () => {
            if (searchTimeoutRef?.current) clearTimeout(searchTimeoutRef.current);
        },
        [],
    );

    const handleSearchChange = (search?: string) => {
        if (searchTimeoutRef?.current) clearTimeout(searchTimeoutRef.current);

        searchTimeoutRef.current = setTimeout(() => {
            onSearch(search === "" ? undefined : search);
        }, searchDebounceTimeMs);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                defaultValue={initialValue}
                onChange={(e) => handleSearchChange(e?.target?.value)}
                disabled={disabled}
            />
            <IconButton sx={{p: "7px"}}>
                <SearchIcon/>
            </IconButton>
        </Box>
    );
}
