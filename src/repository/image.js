const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
let user_id = 6;

class ImageRepository {
    async add(name, file){
        const image = await prisma.images.create({
            data: {
            name,
            file,
            user_id
            },
        })
        return image.name;
    }
    async list(){
        const img = await prisma.images.findMany({
            where: {
                user_id: 6
    }});
        return img;
    }
}

module.exports = ImageRepository;