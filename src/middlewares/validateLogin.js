const Joi = require('joi');

const validateLogin = Joi.object().keys({
    email: Joi.string().email().required().label('email'),
    password: Joi.string().min(6).required().label('password')
})

const validateLoginMiddleware = (req, res, next) => {
    const { error } = validateLogin.validate(req.body);
    if (!error) {
       return next();
    }

    const messages = error.details[0].message;
    return res.status(400).json({errors: messages});
};

module.exports = validateLoginMiddleware;