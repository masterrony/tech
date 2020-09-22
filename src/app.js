import { createServer } from 'http'
import express from "express";
import dotenv from 'dotenv';
import sequelize from './middlewares/dbInstance'
import AppMiddleware from './middlewares/appMiddleware';
import Api from './routes/api';
import Web from './routes/web'



dotenv.config()

const app = new express();
app.use(AppMiddleware);
app.use('/' , Web);
app.use('/api' , Api);
app.set('view engine', 'ejs')

sequelize.authenticate()
  .then(() => console.log('database connected'))
  .catch(err => console.log(err))


const server = createServer(app)
const PORT = process.env.PORT || 3333
server.listen(PORT, ()=>{
    console.log(`server is running on port : ${PORT}`);
});
