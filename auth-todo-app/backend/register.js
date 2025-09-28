import { Router } from 'express'
import pool from './database.js'
import bcrypt from 'bcrypt'

const router = Router();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const result = await pool.query(
            `INSERT INTO users(name, email, password_hash)
            values($1, $2, $3)
            RETURNING *`,
            [name, email, hashedPassword]
        );
        res.status(201).send("Kayıt başarıyla gerçekleşti. Oturum açarak hesabınıza girebilirsiniz");

    } catch (error) {
        console.error(error.message);
        res.status(400).send("Bu email zaten kayıtlı");
    }
});

export default router;