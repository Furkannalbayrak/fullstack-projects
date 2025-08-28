import { Router } from "express"
import pool from '../database.js'

const router = Router();

router.get("/", async (req, res) => {

    try {
        const result = await pool.query(
            `Select * from users order by id`
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});

router.get("/id/:id", async (req, res) => {
    const parseID = parseInt(req.params.id);
    if (isNaN(parseID)) {
        return res.status(400).send("Gecersiz ID");
    }

    try {
        const result = await pool.query(
             `SELECT u.id, u.name, u.surname, u.email, u.department_id, d.department_name from users u
            left join departments d
            on u.department_id = d.id
            where u.id = $1`,
            [parseID]
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

router.get("/name/:name", async (req, res) => {
    const parseName = req.params.name;

    try {
        const result = await pool.query(
            `SELECT u.id, u.name, u.surname, u.email, u.department_id, d.department_name from users u
            left join departments d
            on u.department_id = d.id
            where lower(name) like lower($1)
            order by u.id`,
            [`%${parseName}%`]
        );
        res.status(200).json(result.rows);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
})

router.post("/", async (req, res) => {
    const { name, surname, email, department_id } = req.body;
    try {
        const result = await pool.query(
            `insert into users (name, surname, email, department_id)
            values($1, $2, $3, $4)
            RETURNING *`,
            [name, surname, email, department_id]
        );
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});

router.put("/:id", async (req, res) => {
    const parseID = parseInt(req.params.id);
    const { name, surname, email, department_id } = req.body;
    if (isNaN(parseID)) {
        return res.status(400).send("Gecersiz ID");
    }

    try {
        const result = await pool.query(
            `UPDATE users 
            set name = $1, surname = $2, email = $3, department_id = $4
            where id = $5
            RETURNING *`,
            [name, surname, email, department_id, parseID]
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

router.delete("/:id", async (req, res) => {
    const parseID = parseInt(req.params.id);
    if (isNaN(parseID)) {
        return res.status(400).send("Gecersiz ID");
    }

    try {
        const result = await pool.query(
            `delete from users
            where id = $1
            RETURNING *`,
            [parseID]
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

export default router;