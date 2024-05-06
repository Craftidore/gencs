import express from 'express';

const app = express();

app.use((req, res) => {
    res.status(200);
    res.json({'message':'Server not implemented'})
})

export default app;


