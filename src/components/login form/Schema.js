import * as Yup from "yup";

// STUB: define form validation
const LoginSchema = Yup.object().shape({
  surname: Yup.string("Provide a valid username").required(
    "Username is required"
  ),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .test(
      "len",
      "Phone number must be exactly 11 digits",
      (val) => val && val.length >= 10 && val.length <= 11
    )
    .required("Phone number is required"),
});

export { LoginSchema };
