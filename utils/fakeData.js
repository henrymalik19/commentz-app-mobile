import faker from 'faker';

function generateUserData(num) {

    let data = []

    for (let i = 0; i < num; i++) {
        data.push({
            id: i.toString(),
            name: faker.name.findName(),
            avatar: faker.image.avatar(),
            message: faker.lorem.paragraph(),
            date: faker.date.weekday()
        });
    }
    return data;
}


function generateMessages(num) {

    let data = [];

    let userOne = faker.image.avatar();
    let userTwo = faker.image.avatar();

    for (let i = 0; i < num; i++) {
        data.push({
            id: i.toString(),
            userId: '1',
            avatar: userOne,
            message: faker.lorem.paragraph()
        });
        data.push({
            id: (num + i).toString(),
            userId: '2',
            avatar: userTwo,
            message: faker.lorem.paragraph()
        });
    }

    return data
}

export { generateUserData, generateMessages };