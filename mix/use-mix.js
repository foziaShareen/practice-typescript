// This declares a function named showInfo that takes an argument data of type Info. 
//Inside the function, it prints the name and age from the data object.
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
// This calls the showInfo function with an object that matches the structure of the Info type.
showInfo({ theName: "Fozia", theAge: 40 });
//This declares a function named showFullInfo that takes an argument data of type Full, which includes the properties from both Info and an additional country property. 
//Inside the function, it prints the name, age, and country from the data object.
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
//This calls the showFullInfo function with an object that matches the structure of the Full type,
// including the additional country property.
showFullInfo({ theName: "Fozia", theAge: 4, country: "Pakistan" });
export {};
