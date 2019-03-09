const app = require('../app');

describe('Running app.js', ()=>{
    it('mutiplication ', ()=>{
        const mutiplication = app.mutiplication(1, 5);
        expect(mutiplication).toBe(5);
    })
})