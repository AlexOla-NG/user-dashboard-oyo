import React from "react";
import { useNavigate } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Controller, useForm } from "react-hook-form";
import {
  Box,
  Button,
  Divider,
  Modal,
  Alert,
  Stack,
  Typography,
} from "@mui/material";

// TODO: stopped here
// add error icon & styles to otpInput
// add success icon & styles to otpInput

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "22rem",
  maxWidth: "32rem",
  bgcolor: "background.paper",
  borderRadius: 1,
  boxShadow: 24,
};

const textPaddingStyle = {
  px: 4,
  py: 3,
};

const stackPaddingStyle = {
  px: 4,
  pt: 3,
  pb: 6,
};

const MuiOtpInputStyle = {
  gap: 2,
};

// const otpInputProps = {
//   "& input:valid": {
//     borderColor: "green",
//     borderWidth: 2,
//   },
//   "& input:invalid": {
//     borderColor: "red",
//     borderWidth: 2,
//   },
// };

const BasicModal = ({ setAuth, modalOpen, handleModalClose }) => {
  const navigate = useNavigate();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setAuth(true);
    navigate("/");
  };

  const handleClose = () => {
    reset();
    handleModalClose();
  };

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          color="#212326"
          align="center"
          sx={textPaddingStyle}
        >
          OTP Code
        </Typography>
        <Divider style={{ width: "100%" }} />
        <Stack sx={stackPaddingStyle} spacing={2}>
          <Typography id="modal-modal-title" variant="body1">
            Enter below the 6-digit verification code we just sent to your phone
            number ending in *******8721
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              rules={{ validate: (value) => value.length === 6 }}
              render={({ field, fieldState }) => (
                <Box>
                  <MuiOtpInput sx={MuiOtpInputStyle} {...field} length={6} />
                  {fieldState.error ? (
                    <Alert
                      severity="error"
                      sx={{
                        border: "1px solid #F48989",
                        color: "critical",
                        mt: 2,
                        width: "100%",
                      }}
                    >
                      <b>Error</b>: OTP is incorrect
                    </Alert>
                  ) : null}
                  <Button
                    type="submit"
                    variant="contained-main"
                    disabled={fieldState.error}
                    sx={{ mt: 2 }}
                    fullWidth
                  >
                    Confirm
                  </Button>
                  {fieldState.error && (
                    <Button type="submit" sx={{ mt: 2 }} fullWidth>
                      Resend OTP
                    </Button>
                  )}
                </Box>
              )}
              name="otp"
            />
          </form>
        </Stack>
      </Box>
    </Modal>
  );
};

export default BasicModal;
