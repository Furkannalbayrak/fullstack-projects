import express from 'express'
import pool from './database.js'
import cors from 'cors'
import authenticateToken from './middleware/authenticateToken.js'
import loginRoute from './login.js'
import registerRoute from './register.js'
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', registerRoute);
app.use('/api', loginRoute);

app.get('/api/todos', authenticateToken, async (req, res) => {
    const userID = req.user.id;

    try {
        const result = await pool.query(
            `select * from todos 
            where user_id = $1`,
            [userID]
        );

        if (result.rows.length === 0) {
            return res.status(404).send("Kullanıcı bulunamadı");
        }
        res.status(200).json(result.rows);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});


app.post('/api/todos', authenticateToken, async (req, res) => {
    const userID = req.user.id
    const { text } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO todos (user_id, text)
            values($1, $2)
            RETURNING *`,
            [userID, text]
        );
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});

app.put('/api/todos/:id', authenticateToken, async (req, res) => {
    const todoID = parseInt(req.params.id);
    if (isNaN(todoID)) {
        return res.status(400).send("Gecersiz ID");
    }

    const { text, is_done } = req.body;
    const userID = req.user.id;

    try {
        const result = await pool.query(
            `UPDATE todos
            set text = $1, is_done = $2, updated_at = now()
            where id =  $3 AND user_id = $4
            RETURNING *`,
            [text, is_done, todoID, userID]
        );
        if (result.rows.length === 0) {
            return res.status(404).send("Kullanıcı bulunamadı");
        }
        res.status(200).json(result.rows[0]);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});


app.delete('/api/todos/:id', authenticateToken, async (req, res) => {
    const todoID = parseInt(req.params.id);
    if (isNaN(todoID)) {
        return res.status(400).send("Gecersiz ID");
    }

    const userID = req.user.id;

    try {
        const result = await pool.query(
            `DELETE from todos
            where id = $1 AND user_id = $2
            RETURNING *`,
            [todoID, userID]
        );
        if (result.rows.length === 0) {
            return res.status(404).send("Kullanıcı bulunamadı");
        }
        res.status(200).send("Kullanıcı başarıyla silindi");

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});

app.listen(3000, () => {
    console.log("Sunucu ayakta");
});
