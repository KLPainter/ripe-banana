class HttpError extends Error {
    constructor({ code, message }) {
        super(message);
        this.code = code;
        this.name = 'HttpError';
    }
}

const handler = (err, req, res) => {

    let code = 500;
    let error = 'Internal Server Error';

    if(err instanceof HttpError) {
        code = err.code;
        error = err.message;
    }
    else if(err.name === 'CastError' || err.name === 'ValidationError') {
        code = 400;
        error = err.message;
    }
    else if(process.env.NODE_ENV !== 'production') {
        error = err.message;
        console.log(err); // eslint-disable-line no-console
    } 
    else {
        console.log(err); // eslint-disable-line no-console
    }

    res.status(code.send({ error }));

};

const api404 = (req, res, next) => {
    next(new HttpError({
        code: 404,
        message: 'Api path does not exist'
    }));
};

module.exports = {
    handler,
    HttpError,
    api404
};