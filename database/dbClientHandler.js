const pool = require('./db')

const dbClientHandler = async (query, id, res, next) => {
    try {
        const client = await pool.connect()
        const result = await client.query(query, id)

        if (id) {
            res.status(200).json(result.rows[0])
        } else {
            res.status(200).json(result.rows)
        }

        client.release()
    } catch (err) {
        next(err)
        }
}

module.exports = dbClientHandler