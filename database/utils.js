const pool = require('./db')

const validateData = (data, keys) => {
    if (!keys.every(prop => data[prop])) {
        let error = new Error('Invalid Data')
        error.status = 400
        res.set('Content-Type', 'plain/text')
        throw error
    }
}

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

const postOne = async (query, newItem, keys, params, res, next) => {
    try {
        const client = await pool.connect()
        validateData(newItem, keys)
        const result = await client.query(query, params)
        newItem.id = result.rows[0].id
        res.status(201).json(newItem)
        client.release()
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAll,
    getOne,
    postOne
}   