const UserRepository = require("../repository/user")

const userRepository = new UserRepository();

class UserController {
    async add(req, res){
        const { name, email } = req.body
        try {
            const user =  await userRepository.add(name, email)
            return res.status(201).json(`user: ${user}`);
        } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Something went wrong' })
        }
    }
}

module.exports = UserController;