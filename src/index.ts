import express from 'express';

const app = express();

app.route("/").get((req, res) => {
    res.send('Halo')
})

app.listen(8000);