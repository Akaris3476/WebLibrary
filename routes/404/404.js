import express from 'express';
const router = express.Router();

router.get('/', (req,res) => {
    res.status(404).render('error/404.ejs');
});

export default router;