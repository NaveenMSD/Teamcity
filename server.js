const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/calculate', (req, res) => {
    try {
        const result = eval(req.body.expression);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: 'Invalid expression' });
    }
});

app.listen(port, () => {
    console.log(`Calculator app backend listening at http://localhost:${port}`);
});
