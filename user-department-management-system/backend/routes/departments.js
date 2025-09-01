import { Router } from "express"
import pool from "../database.js"

const router = Router();

router.get("/", async (req, res) => {
    try {
        const result = await pool.query(
            `select * from departments order by id`
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});

router.post("/add-department", async (req, res) => {
    const { department_name } = req.body;
    try {
        const result = await pool.query(
            `insert into departments (department_name) values($1)
            RETURNING *`,
            [department_name]
        );
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});

router.get("/:id", async (req, res) => {
    const parseID = parseInt(req.params.id);
    if (isNaN(parseID)) {
        res.status(400).send("Gecersiz ID");
    }

    try {
        const result = await pool.query(
            `select * from departments
            where id = $1`,
            [parseID]
        );
        if (result.rows.length === 0) {
            return res.status(404).send("Departman bulunamadı");
        }
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});

router.put("/id/:id", async (req, res) => {
    const parseID = parseInt(req.params.id);
    const { department_name } = req.body;

    if (isNaN(parseID)) {
        res.status(400).send("Gecersiz ID");
    }

    try {
        const result = await pool.query(
            `update departments
            set department_name = $1
            where id = $2
            RETURNING *`,
            [department_name, parseID]
        );
        if (result.rows.length === 0) {
            return res.status(404).send("Departman bulunamadı");
        }
        res.status(200).json(result.rows[0]);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});

router.delete("/id/:id", async (req, res) => {
    const parseID = parseInt(req.params.id);
    if(isNaN(parseID)){
        res.status(400).send("Gecersiz ID");
    }

    try {
        const result = await pool.query(
            `delete from departments
            where id = $1
            RETURNING *`,
            [parseID]
        );
        if(result.rows.length === 0){
            return res.status(404).send("Departman bulunamadı");
        }
        res.status(200).send("Departman başarıyla silindi");

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});

export default router;