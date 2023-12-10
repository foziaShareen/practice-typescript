function addTen(num) {
    return num + 10;
}
addTen(20);
// if we have write our function like this
// function addTen(num){
//   return num+10;
//}
//it is bad practice because num will be "any" and it is not the way typescript work
// here is an interestin thing
function addTwo(num) {
    // because num is any type so we can use string function here
    num.toUpperCase();
    // it can be apply which is bad, so always annotate type 
    return num + 2;
}
// another scenario
function lowerCase(value) {
    return value.toLowerCase();
}
export {};
//lowerCase(2);//get error 
// just do it tourself without type annotation 
