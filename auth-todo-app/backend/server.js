import express from 'express'
import pool from './database.js'
import cors from 'cors'
import { parse } from 'dotenv';
const app = express();

app.use(express.json());
app.use(cors());


app.get('/api/todos', async (req, res) => {
    
    try {
        const result = await pool.query(
            `select * from todos 
            where user_id = $1`,
            [parseID]
        )

        if(result.rows.length === 0){
            res.status(404).send("Kullanıcı bulunamadı");
        }
        res.status(200).json(result.rows);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});


app.post('/api/todos', async (req, res)=>{

    try {
        const result = await pool.query(
            `INSERT INTO todos (user_id, title, description)
            values($1, $2, $3)
            RETURNING *`,
            [userID, title, description]
        );
        res.status(200).json(result.rows[0]); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});

app.put('/api/todos/:id', async (req, res)=>{
    const todoID = parseInt(req.params.id);
    if(isNaN(todoID)){
        res.send(400).send("Gecersiz ID");
    }

    try {
        const result = await pool.query(
            `UPDATE todos
            set title = $1, description = $2, is_done = $3
            where id =  $4 AND user_id = $5
            RETURNING *`,
            [title, description, is_done, todoID, user_id]
        );
        if(result.rows.length === 0){
            return res.status(404).send("Kullanıcı bulunamadı");
        }
        res.send(200).json(result.rows[0]);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});


app.delete('/api/todos/:id', async (req, res)=>{
    const todoID = parseInt(req.params.id);
    if(isNaN(todoID)){
        res.status(400).send("Gecersiz ID");
    }

    try {
        const result = await pool.query(
            `DELETE from todos
            where id = $1 AND user_id = $2
            RETURNING *`,
            [todoID, user_id]
        );
        if(result.rows.length === 0){
            res.status(404).send("Kullanıcı bulunamadı");
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
