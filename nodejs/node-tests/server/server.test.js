const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return "hello world" response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello world')
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should fine a user at the users endpoint', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toEqual(expect.arrayContaining([{
                        firstName: 'Muhammad',
                        age: 28
                    }]))
                })
                .end(done);
        });
    });

});

