let string = 0
let number = 0
let boolean = 0
let object = 0
let others = 0

let user = {
    name: "Mekhdi",
    age: 16,
    height: 180,
    study: 'at school',
    friends: ['nikita', 'alex', 'vlad']
}
let passport = {
    serries: 'AC',
    number: 3423423432,
    data: '2021-01-01',
    dataExp: '2023-01-01',
    visa: ['korea', 'london', 'dubai']
}

Object.assign(user, {passport})
let key = Object.keys(user, user.passport)
let value = Object.values(user, user.passport)
let arr = [...value, ...key]   

console.log(arr);

arr.filter(item => {
    if (typeof (item) === 'string') {
        string++
    } else if (typeof (item) === 'number') {
        number++
    } else if (typeof (item) === 'boolean') {
        boolean++
    } else if (typeof (item) === 'object') {
        object++
    } else {
        others++
    }
}) 
newArr = [string + number]

console.table(
    [string, number, boolean, object, others], [newArr]
);
