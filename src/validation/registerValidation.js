import Joi from "joi";

import validation from "./validation";

const registerSchema = Joi.object({
  firstName: Joi.string().min(2).max(255).required(),
  middleName: Joi.string().min(2).max(255).allow(""),
  lastName: Joi.string().min(2).max(255).required(),
  phone: Joi.string().min(7).max(14).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z]).{0,}$"))
    .min(2)
    .max(10)
    .required(),
  imageUrl: Joi.string().min(6).max(1024).allow(""),
  imageAlt: Joi.string().min(6).max(256).allow(""),
  state: Joi.string().min(2).max(256).allow(""),
  country: Joi.string().min(2).max(256).required(),
  city: Joi.string().min(2).max(256).required(),
  street: Joi.string().min(2).max(256).required(),
  houseNumber: Joi.string().min(1).max(256).required(),
  zipCode: Joi.number().min(1).max(999999999).allow(""),
  biz: Joi.boolean(),
});

const validateRegisterSchema = (userInput) =>
  validation(registerSchema, userInput);

export default validateRegisterSchema;

/*const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  middleName: Joi.string(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  password: Joi.string().required(),
  imgUrl: Joi.string().uri(),
  imgAlt: Joi.string(),
  state: Joi.string(),
  country: Joi.string(),
  city: Joi.string(),
  street: Joi.string(),
  houseNumber: Joi.string(),
  zip: Joi.string(),
});

function validate(formData) {
  const { error, value } = schema.validate(formData, { abortEarly: false });
  if (error) {
    const errors = {};
    error.details.forEach((detail) => {
      errors[detail.context.key] = detail.message;
    });
    return errors;
  }
  return null;
}*/

// email: Joi.string().min(6).max(255).required().email(),
//password: Joi.string().min(6).max(1024).required(),
