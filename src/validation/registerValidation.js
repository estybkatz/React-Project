import Joi from "joi";

import validation from "./validation";

const registerSchema = Joi.object({
  firstName: Joi.string().min(2).max(100).required(),
  lastName: Joi.string().min(2).max(100).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z]).{0,}$"))
    .min(2)
    .max(10)
    .required(),
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
