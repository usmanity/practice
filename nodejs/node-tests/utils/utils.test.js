const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    it('should add two numbers', () => {
        var res = utils.add(33, 11);
        expect(res).toEqual(44);
    });

    it('should square a number', () => {
        var res = utils.square(4);
        expect(res).toEqual(16);
    });

    it('should expect some values', () => {
        expect(50).not.toEqual(51);
        expect({
            name: 'Jester'
        }).toEqual({
            name: 'Jester'
        });
        expect([2,3,4]).toEqual(expect.arrayContaining([3,4,2]));
    });

    it('should a user with name Baghat Singh to be set in a user object', () => {
        var emptyUser = {};
        var user = utils.setName(emptyUser, 'Baghat Singh');
        expect(user).toEqual({
            firstName: 'Baghat',
            lastName: 'Singh'
        });
    });
    describe('Async methods', () => {
        it('should async add two number', (done) => {
            utils.asyncAdd(4, 5, (sum) => {
                expect(sum).toBe(9);
                done();
            });
        });

        it('should async square a number', (done) => {
            utils.asyncSquare(8, (sq) => {
                expect(sq).toBe(64);
                done();
            });
        });
    })
})


