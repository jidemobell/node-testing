const db = require('./db')

var handleSignUp = (email, password) => {
    //check if email exist
    //save user to database
    db.saveUser({ email,password })
     //send welcome email
}