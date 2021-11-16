const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { app } = require('../../app/server.js');

chai.use(chaiHttp);
chai.should();

describe('Router', () => {
    it('/foobar', done => {
        sinon.stub(console, 'error');

        chai.request(app)
            .get('/foobar')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });

    it('/healthcheck.html', done => {
        chai.request(app)
            .get('/healthcheck.html')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('/favicon.ico', done => {
        chai.request(app)
            .get('/favicon.ico')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
