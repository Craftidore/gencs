import express from 'express' 
import bodyParser from 'body-parser';
import apiRouter from './api/api.js';


const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api/v1', apiRouter);

app.use((req, res) => {
    res.status(404);
    res.json({'message':'Not found'});
})

export default app;
