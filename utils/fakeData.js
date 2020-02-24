export default function generateUserData(num) {

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
