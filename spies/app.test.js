const rewire = require('rewire');
const app = rewire('./app');
var spy = jest.fn()

describe('App', ()=>{
    test('It should call the spy correctly', ()=> {
        
        spy('Andrew',25);
        expect(spy).toHaveBeenCalledWith('Andrew',25);
    })
     
    // var  db = {saveUser: spy}
    // app.__set__('db', db);

    // test('it should call save user with user object', ()=>{
    //     var email ='jidd@jidd.com'
    //     var password = 1234;

    //     app.handleSignUp(email,password);
    //     expect(db.saveUser).toHaveBeenCalledWith(email,password);
    // })
   


})