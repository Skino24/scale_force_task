import { Typography } from "@mui/material";

export interface ICustomModalDescriptiontext {
  text: String;
}

const CustomModalDescriptionText: React.FunctionComponent<
  ICustomModalDescriptiontext
> = (props) => {
  return (
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {props.text}
    </Typography>
  );
};

export default CustomModalDescriptionText;
