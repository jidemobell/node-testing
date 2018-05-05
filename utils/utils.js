var addAll = (a,b) => a+b ;
var squareAll = x => x * x;

var setName = (user, fullName) => {
    let names = fullName.split(' ');
    user.fisrtName = names[0];
    user.last = names[1];
    return user
}

var asyncAdd = (a,b, callback) => {
    setTimeout(()=> {
       callback(a+b)
    }, 1000)
}

module.exports = {
    addAll,
    squareAll,
    setName,
    asyncAdd
}