import { Router } from 'express'
import pool from './database.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config();

const router = Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query(
            `SELECT * from users
                where email = $1`,
            [email]
        )
        const user = result.rows[0];

        if (!user) {
            return res.status(401).send("Kullanıcı bulunamadı");
        }

        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) {
            return res.status(401).send("Şifre Hatalı");
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        );

        res.json({ token })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error !");
    }
});

export default router;