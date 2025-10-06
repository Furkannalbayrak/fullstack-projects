import { Router } from 'express'
import pool from './database.js'
import bcrypt from 'bcrypt'

const router = Router();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.query(
            `INSERT INTO users(name, email, password_hash)
            values($1, $2, $3)
            RETURNING *`,
            [name, email, hashedPassword]
        );
        res.status(201).send("Kayıt başarıyla gerçekleşti. Oturum açarak hesabınıza girebilirsiniz");

    } catch (error) {
        console.error(error.message);

        if (error.code === "23505") {
            return res.status(400).json("Bu kullanıcı zaten mevcut")
        }

        res.status(500).json("Sunucu hatası. Lütfen daha sonra tekrar deneyin.");
    }
});

export default router;