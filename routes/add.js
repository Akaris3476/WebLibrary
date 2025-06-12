import express from 'express';
const router = express.Router()

router.get('/',  async (request, response) => {

    response.render('add.ejs')
    
});
 
export default router;