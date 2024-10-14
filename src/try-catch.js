// try {
//     console.log('Коду в середині try...catch');

//     userName
    
//     console.log('Коду після помилки try...catch');
// } catch (error) {
//     console.log('Помилка');
// }
// console.log('Коду після виконання try...catch');



const validJSON = '{ "name": "Манго", "age": 3 }';
const invalidJSON = '{ бекенд повернув якусь нісенітницю }';

try {
    console.log(JSON.parse(validJSON));
} catch (error) {
    console.log('помилка');
}

try {
    JSON.parse(invalidJSON);
} catch (error) {
    console.log('помилка');
}