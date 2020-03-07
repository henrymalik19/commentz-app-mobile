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

    let guest = faker.image.avatar();

    for (let i = 0; i < num; i++) {
        data.push({
            id: i.toString(),
            userId: 0,
            message: faker.lorem.paragraph()
        });
        data.push({
            id: (num + i).toString(),
            userId: 1,
            avatar: guest,
            message: faker.lorem.paragraph()
        });
    }

    return data
}

function getAvatar() {

    avatar = faker.image.avatar();
    return avatar;
}

function getName() {

    name = faker.name.findName();
    return name;
}

export { generateUserData, generateMessages, getAvatar, getName };