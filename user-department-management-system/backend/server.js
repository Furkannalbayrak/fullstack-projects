import express from 'express'
import pool from './database.js'
import userRoutes from './routes/users.js'
import departmentRoutes from './routes/departments.js'
const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/departments", departmentRoutes);

app.get("/", async (req, res) => {

    try {
        const result = await pool.query(
        `SELECT u.id, u.name, u.surname, u.email, u.department_id, d.department_name from users u
         left join departments d
         on u.department_id = d.id
         order by u.id`
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});

app.listen(3000, () => {
    console.log("Sunucu ayakta");
});