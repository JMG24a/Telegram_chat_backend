const {Router} = require('express')
const messageRouter = require('./messages');
const userRouter = require('./users');
const chatRouter = require('./chat')

const appRouter = (app) =>{
    const routerV1 = Router();
    app.use('/api/v1', routerV1)
    routerV1.use('/messages',messageRouter);
    routerV1.use('/users',userRouter)
    routerV1.use('/chats', chatRouter)
}

module.exports = appRouter;