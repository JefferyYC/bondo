//Validation
const Joi = require('@hapi/joi');

const registerValidation = (data) => {

    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    return schema.validate(data);
}

//RegisterValidation for Mentor
const mentorRegisterValidation = (data) => {

    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        introduction: Joi.string().min(6).required(),
        experience: Joi.string().min(6).required(),
        education: Joi.string().min(6).required()
    });

    return schema.validate(data);
}

const loginValidation = (data) => {

    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    return schema.validate(data);
}

//Mentor Login Validation 
const mentorLoginValidation = (data) => {

    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.mentorLoginValidation = mentorLoginValidation;
module.exports.mentorRegisterValidation = mentorRegisterValidation;
