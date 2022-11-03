import {faker} from '@faker-js/faker';

const createUser=()=>{
    const newFake={
        firstName:faker.name.firstName(),
        lastName:faker.name.lastName(),
        email:faker.email.email()

    };
    return newFake
};

const newFakeUser=createUser();
console.log(newFakeUser);