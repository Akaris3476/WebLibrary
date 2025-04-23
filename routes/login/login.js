import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const router = express.Router()

router.use(express.json());


// const users = [
//     {
//         id: 1,
//         username: 'admin',
//         password: '$2b$10$sht1vVAWUA67DaLi9Eb6K.QP/Py9eZ5FPdzD3BjvqJsRpbv3Z/jQq', // "meow"
//         admin_right: true
//     }
// ];


router.get('/', async (req,res) => {
    res.render('admin/login.ejs');
});


router.post('/', async (req, res) => {
    
    const { username, password } =  req.body;
    console.log('Got:', username, password);

    const user = users.find(u => u.username === username);
    try {

        if (!user) {
            throw new Error('Wrong username. This user doesn\'t exist');
        }

        const valid = await bcrypt.compare(password, user.password);
        console.log(valid)

        if (!valid) {
            throw new Error('Wrong password');
        }

        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_Private_Key
        );
    
        res.json({ message: 'Success', token });
    
    } catch(err) {
        res.json({message: `${err.message}`})
    }





});


export default router;