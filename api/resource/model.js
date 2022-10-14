// build your `Resource` model here
const db = require('../../data/dbConfig')

const find = async ()=>{
    return db('resources')
}

const getById = async ([id])=>{
    return await db('resources').where('resource_id', id).first()
}

const insert = async (other)=>{
    const con = await db('resources').insert(other)
    return getById(con)
}

module.exports = {
    find,
    insert,
    getById
}