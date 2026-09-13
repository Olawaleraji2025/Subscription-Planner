import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") return "Email is required";
  if (!/@/.test(email)) return "Enter a valid Email";
  if (!emailRegex.test(email)) return "Enter a valid Email";
  return "";
};

const validatePhone = (phone) => {
  if (phone === "") return "This field is required";
  if (/[a-zA-Z]/.test(phone)) return "Enter a valid Number";
  if (!/\d/.test(phone)) return "Enter a valid Number";
  if (phone.length < 10) return "Phone number must be at least 10 characters";
  return "";
};

const validateName = (name) => {
  if (name === "") return "Name is required";
  if (/\d/.test(name)) return "Name must contain only letters";
  return "";
};

const computeErrors = ({ name, email, phone }) => {
  const nameError = validateName(name.trim());
  const emailError = validateEmail(email.trim());
  const phoneError = validatePhone(phone.trim());

  return {
    name: nameError,
    email: emailError,
    phone: phoneError,
  };
};

export const personalInfoSlice = createSlice({
  name: "infoStore",
  initialState: {
    name: { value: "", touched: false },
    email: { value: "", touched: false },
    phone: { value: "", touched: false },
    // derived in selectors/components; kept for convenience
    isValidated: false,
  },
  reducers: {
    setPersonalInfo: (state, action) => {
      // onChange: ONLY update the value; NEVER compute/trigger validation here.
      if (action.payload.name !== undefined) {
        state.name.value = action.payload.name;
      }
      if (action.payload.email !== undefined) {
        state.email.value = action.payload.email;
      }
      if (action.payload.phone !== undefined) {
        state.phone.value = action.payload.phone;
      }
    },
    fieldBlur: (state, action) => {
      // onBlur: mark touched
      const field = action.payload;
      if (field === "name") state.name.touched = true;
      if (field === "email") state.email.touched = true;
      if (field === "phone") state.phone.touched = true;
    },
    validateAll: (state) => {
      // on submit: mark touched for all fields simultaneously
      state.name.touched = true;
      state.email.touched = true;
      state.phone.touched = true;
    },
  },
});

export const { setPersonalInfo, validateAll, fieldBlur } =
  personalInfoSlice.actions;

export const selectPersonalInfoErrors = createSelector(
  (state) => state.infoStore.name.value,
  (state) => state.infoStore.email.value,
  (state) => state.infoStore.phone.value,
  (state) => state.infoStore.name.touched,
  (state) => state.infoStore.email.touched,
  (state) => state.infoStore.phone.touched,
  (
    nameValue,
    emailValue,
    phoneValue,
    nameTouched,
    emailTouched,
    phoneTouched,
  ) => {
    const allErrors = computeErrors({
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
    });

    return {
      name: nameTouched ? allErrors.name : "",
      email: emailTouched ? allErrors.email : "",
      phone: phoneTouched ? allErrors.phone : "",
    };
  },
);

export const selectPersonalInfoValues = createSelector(
  (state) => state.infoStore.name.value,
  (state) => state.infoStore.email.value,
  (state) => state.infoStore.phone.value,
  (name, email, phone) => ({
    name,
    email,
    phone,
  }),
);

export default personalInfoSlice.reducer;
