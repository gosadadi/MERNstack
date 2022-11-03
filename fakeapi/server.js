const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

const createUser=()=>{
    const newFake={
        firstName:faker.name.firstName(),
        lastName:faker.name.lastName(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.number(),
        password:faker.internet.password(),
        _id:faker.datatype.number()
    };
    return newFake
};

const newFakeUser=createUser();


const createCompany=()=>{
    const newFake={
        name:faker.company.name(),
        _id:faker.datatype.number(),
        address:faker.address.streetAddress(),
        city:faker.address.city(),
        state:faker.address.state(),
        zipCode:faker.address.zipCode(),
        country:faker.address.country()
    };
    return newFake
};

const newFakeCompany=createCompany();


app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser);
});

const userCompany={...newFakeUser,...newFakeCompany};
console.log(userCompany);


app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany);
});



app.get("/api/user/company", (req, res) => {
    res.json(userCompany);
    
});





app.listen( port, () => console.log(`Listening on port: ${port}`) );