const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class UserRepository {
    async add(name, email){
        const user = await prisma.user.create({
            data: {
            name,
            email,
            },
        })
        return user.name;
    }
}

module.exports = UserRepository;