import faker from 'faker';

function generateChat(num, userid) {

    let data = []

    for (let i = 0; i < num; i++) {
        let avatar = faker.image.avatar();
        data.push({
            id: i.toString(),
            name: faker.name.findName(),
            avatar: avatar,
            messages: generateMessages(10, userid, avatar),
            date: faker.date.weekday()
        });
    }
    return data;
}


function generateMessages(num, id, avatar) {

    let data = [];

    let guest = avatar;

    for (let i = 0; i < num; i++) {
        data.push({
            id: i.toString(),
            userId: id,
            recvd: true,
            message: faker.lorem.paragraph(),
        });
        data.push({
            id: (num + i).toString(),
            userId: 1,
            avatar: guest,
            recvd: true,
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

export { generateChat, generateMessages, getAvatar, getName };