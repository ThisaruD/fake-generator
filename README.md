# fake-data-generator

## Description

You can use this npm package for genarate fake data of people(Name,Adress,Mobile Number,Email)
for your needs of dummy data in project development

1. Generate fake Name
2. Generate fake Address
3. Generate Fake Mobile Number
4. Generate Fake Email (seletcted name or random name)


### Installation

To install the ppackage, follow these steps:

1. Open your terminal in project directory
2. Run `npm install fake-generator` to install dependencies.

### Usage

Here are some example for the usage of the fake-data-generator package


```javascript
const fakeGenerator = require('fake-generator')

console.log(fakeGenerator.getFakeName()) //fake name 

console.log(fakeGenerator.getFakeAddress()) // fake address

console.log(fakeGenerator.getFakeMobileNumber()) //fake mobile number

console.log(fakeGenerator.getFakeEmail()) //get fake email for random name

var firsName = "Peter"
var lastName = "Pan"
console.log(fakeGenerator.getFakeEmail(firsName,lastName))// get fake email for give user name
```



## Contributing

If you'd like to contribute to this project, You can send your pull requests directly.
 [github](https://github.com/ThisaruD/fake-generator)



## License

This project is licensed under the [ISC License](LICENSE).

