const ImageRepository = require("../repository/image")
const imageRepository = new ImageRepository();


class ImageController {
    async add(req, res){
        const name = req.files.sampleFile.name;
        const data = Buffer.from(req.files.sampleFile.data);
        try {
            const image =  await imageRepository.add(name, data)
            return res.status(201).json(`image: ${image}`);
        } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Something went wrong' })
        }
    }
    async list(req, res){
        const img = await imageRepository.list();
        return res.send(img);
    }
}

module.exports = ImageController;