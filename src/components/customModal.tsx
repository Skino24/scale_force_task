import { Box, Modal, Typography } from "@mui/material";
import { ICountry } from "../types/country";
import CustomModalDescriptionText from "./customModalDesctiption";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export interface ICustomModalProps {
  onClose: () => void;
  isOpen: boolean;
  country: ICountry | null;
}

const CustomModal: React.FunctionComponent<ICustomModalProps> = (props) => {
  const population = props.country?.population
    .toString()
    .replace(/(.)(?=(\d{3})+$)/g, "$1,");

  return (
    <Modal
      open={props.isOpen}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {props.country?.name}
        </Typography>
        <CustomModalDescriptionText
          text={`Capital city: ${props.country?.capitalName}`}
        />
        <CustomModalDescriptionText text={`Code: ${props.country?.code}`} />
        <CustomModalDescriptionText text={`Population: ${population}`} />
        <CustomModalDescriptionText text={`Region: ${props.country?.region}`} />
        <CustomModalDescriptionText
          text={`Subregion: ${props.country?.subregion}`}
        />
      </Box>
    </Modal>
  );
};

export default CustomModal;
