const pool = require('./db')

const getAll = async (query, res, next) => {
    try {
        const client = await pool.connect()
        const result = await client.query(query)
     
        res.status(200).json(result.rows)
    
        client.release()
    } catch (err) {
        next(err)
        }
}

const getOne = async (query, id, res, next) => {
    try {
        const client = await pool.connect()
        const result = await client.query(query, id)

        if (!id) {
            let error = new Error('Wrong path or Not found')
            error.status = 404  
            throw error
        }

        res.status(200).json(result.rows[0])
    } catch (err) {
        next(err)
    }
}

const postOne = async (query, id, res, next) => {
    
}

module.exports = {
    getAll,
    getOne
}   