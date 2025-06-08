import express from 'express';
const router = express.Router();
import { authToken } from '../../models/jwt_auth.js';



router.get('/', (req, res) => {
    res.render('admin/adminPanel.ejs', {})
});

router.get('/token-check', authToken, (req, res) => {
    console.log(req.user)
    res.json(req.user)
})

export default router;