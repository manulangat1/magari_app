import express, {Application,Request,Response} from 'express';
import  cors from 'cors';
import dotenv from 'dotenv';

//  local imports 

import modules from './modules';



const app:Application = express();

dotenv.config();

const PORT = process.env.PORT

app.use(cors());

app.get('/' , function(req:Request,res:Response){
    res.send("Welcome to the magari site!");
})

modules(app); 




app.listen(PORT , () => {
    console.log(`Server connected successfully on http://localhost:${PORT}/api/v1 in ${process.env.NODE_ENV} mode`)
})


export default app;