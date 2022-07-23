const Joi = require('joi');

const validateInvestments = Joi.object().keys({
    clientId: Joi.number().required().label('clientId'),
    assetId: Joi.number().required().label('assetId'),
    quantity: Joi.number().min(1).required().label('quantity')
})

const validateInvestmentsMiddleware = (req, res, next) => {
    const { error } = validateInvestments.validate(req.body, { abortEarly: false });
    if (!error) {
       return next();
    }

    const messages = error.details.map(e => e.message);
    return res.status(400).json({errors: messages});
};

module.exports = validateInvestmentsMiddleware;