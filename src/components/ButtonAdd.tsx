import {Button, ButtonProps} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function ButtonAdd(props: ButtonProps) {
    return <Button variant="contained" startIcon={<AddIcon/>} {...props} />;
}

export default ButtonAdd;
