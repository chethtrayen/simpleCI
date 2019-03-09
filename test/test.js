const { expect } = require('chai');
const { mutiplication } = require('../app');

describe('init test', ()=>{
    it('mutiplication', ()=>{
        const answer = mutiplication(1,5); 
        expect(answer).to.be.equal(5);
    })
})