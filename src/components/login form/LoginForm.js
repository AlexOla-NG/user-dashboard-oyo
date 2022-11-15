import React from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { motion } from "framer-motion";
import { LoginSchema } from "./Schema";
import { animate } from "./animation";

// TODO: stopped here
// set MuiError color. The current one is too faint

const textPropsStyle = {
  margin: "dense",
};

const LoginForm = ({ modalOpen, handleModalOpen }) => {
  const formik = useFormik({
    initialValues: {
      surname: "",
      phoneNumber: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (values, actions) => {
      handleModalOpen();
      if (!modalOpen) {
        actions.setSubmitting(false);
      }
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              py: 3,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="surname"
              type="text"
              label="Surname"
              {...getFieldProps("surname")} // hooks up onBlur and onChange for specific fields
              error={Boolean(touched.surname && errors.surname)} // activate yup validation when field is out of focus
              helperText={touched.surname && errors.surname} // display error message
              FormHelperTextProps={textPropsStyle}
            />

            <TextField
              fullWidth
              autoComplete="phone number"
              type="number"
              label="Phone Number"
              {...getFieldProps("phoneNumber")} // hooks up onBlur and onChange for specific fields
              error={Boolean(touched.phoneNumber && errors.phoneNumber)} // activate yup validation when field is out of focus
              helperText={touched.phoneNumber && errors.phoneNumber} // display error message
            />
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={{
                fontSize: "1.14rem",
                px: "16px",
                py: "10px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              {isSubmitting ? "loading..." : "Submit"}
            </LoadingButton>
          </Box>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
