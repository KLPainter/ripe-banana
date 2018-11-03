const app = require('../../lib/app');
const request = require('supertest');
const { dropCollection } = require('./db');

let actors = [
    {
        name: 'Matt Diamond',
        dob: new Date('11-11-1911'),
        pob: 'Sweden'
    },
    {
        name: 'Susan Surandin',
        dob: new Date('04-14-1985'),
        pob: 'Miami'
    },
    {
        name: 'Perpetually Unemployed',
        dob: new Date('12-12-1912'),
        pob: 'Canada'
    }
];

let studios = [
    {
        name: 'YuraqYana Studios',
        address: {
            city: 'Lima',
            state: 'Lima',
            country: 'Peru'
        }
    },
    {
        name: 'Pixar',
        address: {
            city: 'Palo Alto',
            state: 'CA',
            country: 'USA'
        }
    },
    {
        name: 'Defunct Studio',
        address: {
            city: 'Pasadena',
            state: 'CA',
            country: 'USA'
        }
    }
];

let reviewers = [
    { 
        name: 'George Watchington', 
        company: 'Patriot Films',
        email: 'georgieHotStuff@hotmail.com',
        clearPassword: 'georgessecret',
        roles: ['admin'] 
    },
    { 
        name: 'Abraham Linkoln', 
        company: 'Great Conflict Productions',
        clearPassword: 'fourScoreAndPasswordAgo',
        email: 'Abe1809@askjeeves.com',
        roles: ['editor']
    }
];


const createActor = actor => {
    return request(app)
        .post('/actors')
        .send(actor)
        .then(res => res.body);
};

const createStudio = studio => {
    return request(app)
        .post('/studios')
        .send(studio)
        .then(res => res.body);
};

const createReviewer = reviewer => {
    return request(app)
        .post('/reviewers/signup')
        .send(reviewer)
        .then(res => res.body);
};

const createReviewerToken = reviewer => {
    return request(app)
        .post('/reviewers/signin')
        .send(reviewer)
        .then(res => res.body);
};

const createActors = () => {
    return Promise.all(actors.map(createActor));
};

const createStudios = () => {
    return Promise.all(studios.map(createStudio));
};

const createReviewers = () => {
    return Promise.all(reviewers.map(createReviewer));
};

const createReviewerTokens = () => {
    return Promise.all(reviewers.map(createReviewerToken));
};


module.exports = {
    createStudios, 
    createActors,
    createReviewers,
    createReviewerTokens
};
