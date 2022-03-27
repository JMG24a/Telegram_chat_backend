const { Router } = require('express');
const R  = require('../networks')
const messageService = require('../../services/messages')
const router = Router();

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

router.post('/', (req, res)=>{
    const {user, message, chat} = req.body

    messageService.addMessage(user,message,chat)
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