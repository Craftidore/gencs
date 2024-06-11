import app from '../lib/app/app.js';
import assert from 'assert'
import supertest from 'supertest';
import { connect } from '../lib/db.js';
import mongoose from 'mongoose';


describe('Character actions', () => {
    before((done) => {
        connect().then(() => {
            done();
        });
    });
    it ('test-get', () => {
        return supertest(app).get('/api/v1/characters')
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .then((res) => {
                for (const char of res.body) {
                    if (char.name !== undefined) {
                        assert(char.name.length > 0, 'All character names should have a size');
                    }
                }
            });
    });
    it ('test-post', () => {
        return supertest(app).post('/api/v1/characters')
            .set({name:'Bob'})
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .then(res => {
                const char_id = res.body.id;
                const name = res.body.name;
                return supertest(app).get(`/api/v1/characters/${char_id}`)
                    .expect(200);
            });
    });
    after((done) => {
        mongoose.connection.close().then(() => {
            done();
        })
    })
});
