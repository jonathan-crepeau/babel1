import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Root route successful.."
    });
});

app.listen(PORT, () => console.log(`Application listening on ${PORT}`));