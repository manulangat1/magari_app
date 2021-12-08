import express, {Application} from 'express';
import  cors from 'cors';

const app:Application = express();
const PORT = process.env.PORT

app.use(cors());



app.listen(() => {
    console.log(`Our backend is running on port ${PORT}`)
})
