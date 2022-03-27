const { Router } = require('express');
const multer = require('multer')
const R  = require('../networks')
const messageService = require('../../services/messages')
const router = Router();

const upload = multer({
    dest: 'public/files/'
})

router.get('/', (req, res)=>{
    const filter = req.query.filter || null;
    messageService.getMessage(filter)
        .then((success)=>{
            R.success(req,res,success,200)
        })
        .catch(e=>{
            R.error(req,res,e,500)
        })
})

router.post('/',upload.single('file') ,(req, res)=>{
    const {user, message, chat} = req.body;
    const { file } = req

    messageService.addMessage(user,message,chat,file)
        .then((success)=>{
            res.header({'custom-header': 'mi valor personalizado'})
            R.success(req,res,success,201)
        })
        .catch(e => {
            R.error(req,res,e,201)
        })
})

router.patch('/:id', (req, res)=>{
    const {id} = req.params
    const body = req.body

    messageService.editMessage(id,body)
        .then((success)=>{
            res.header({'custom-header': 'mi valor personalizado'})
            R.success(req,res,success,201)
        })
        .catch(e => {
            R.error(req,res,e,201)
        })

})

router.delete('/:id', (req, res)=>{
    const {id} = req.params

    messageService.deleteMessage(id)
        .then((success)=>{
            res.header({'custom-header': 'mi valor personalizado'})
            R.success(req,res,success,201)
        })
        .catch(e => {
            R.error(req,res,e,201)
        })

})


module.exports = router;