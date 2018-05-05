let utils = require('./utils')
const expect = require('expect');



describe('Initial test cases', () => {
    test('should add two number' , () => {
        expect(utils.addAll(3,11)).toBe(14)
     });

     test('should sqwuare a numbr' ,() => {
         expect(utils.squareAll(4)).toBe(16)
     })

     test('bogus testcase with object', ()=> {
         expect({name: 'Jide'}).toEqual({name: 'Jide'})
     })

    //  test('to include', ()=> {
    //     expect([2,3,4]).toInclude(3)
    // })

    // test('bogus testcase with object testing include', ()=> {
    //     expect({
    //         name: 'Jide',
    //         age: 25
    //     }).toInclude({age: 25})
    // })    

    test('async add two numbers', (done)=> {
        expect(utils.asyncAdd(4, 3, (sum)=>{
            expect(sum).toBe(7)
            done();
        }))
    })
})


// describe('more object testing', () => {
//     test('should verify first and last name are set', () => {
//         expect(utils.setName({"age": 24, "Location": "Lagos"},"Jane Austen")).toInclude({"firstName": "Jane"})
//    })
// })
    