import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
}));


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}にアクセスしました`);
    next();
});

app.get('/api/message', (req, res) => {
    res.json({message: 'Hello from the server!'
    });
});

app.listen(3000, () => {
    console.log('サーバー：http://localhost:3000');
});