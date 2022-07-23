const Joi = require('joi');

const validateAccount = Joi.object().keys({
    clientId: Joi.number().required().label('clientId'),
    value: Joi.number().min(1).required().label('value')
})

const validateAccountMiddleware = (req, res, next) => {
    const { error } = validateAccount.validate(req.body, { abortEarly: false });
    if (!error) {
       return next();
    }

    const messages = error.details[0].message;
    return res.status(400).json({errors: messages});
};

module.exports = validateAccountMiddleware;