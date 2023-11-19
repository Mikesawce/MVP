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
        const result = await pool.query(query)
     
        res.status(200).json(result.rows)
    
    } catch (err) {
        next(err)
        }
}

const getOne = async (query, id, res, next) => {
    try {
        const result = await pool.query(query, id)

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
        validateData(newItem, keys)
        const result = await pool.query(query, params)
        newItem.id = result.rows[0].id
        res.set('Content-Type', 'application/json')
        res.status(201)
        res.json(newItem)
    } catch (err) {
        next(err)
    }
}

const editOne = async (query, query2, id, newItem, keys, params, res, next) => {
    try {
        validateData(newItem, keys)
        const result = await pool.query(query, [id])
    
        const existingItem = result.rows[0]

        for (const key in newItem) {
            if (newItem.hasOwnProperty(key)) {
                existingItem[key] = newItem[key]
            }
        }

        const updatedResult = await pool.query(query2, [...params, id])
        if (updatedResult.rowCount === 1) {
            res.status(200).json(existingItem)
        } else {
            let error = new Error('Failed to Update')
            error.status = 500
            throw error
        }
    } catch (err) {
        next(err)
    }
}

const deleteOne = async (query, query2, id, newItem, keys, res, next) => {
    try {
        validateData(newItem, keys)
        const result = await pool.query(query, [id])

        if (!id) {
            let error = new Error('Wrong path or Not found')
            error.status = 404
            throw error
        }

        const deleteResult = await pool.query(query2, [id])
        if (deleteResult.rowCount === 1) {
            res.status(200).json({ message: 'Nice delete!'})
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    editOne,
    deleteOne
}   