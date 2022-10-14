// build your `Task` model here
const db = require('../../data/dbConfig')


const find = async ()=>{
    return await db('tasks as ts')
        .leftJoin('projects as pr', 'ts.project_id', 'pr.project_id')
        .select( 
        'task_id', 
        'task_description', 
        'task_notes',
        'task_completed',
        'project_name', 
        'project_description',)
}

const getById = async ([id])=>{
    return await db('tasks').where('task_id', id).first()
}

const insert = async (other)=>{
    const con = await db('tasks').insert(other)
    return getById(con)
}

module.exports = {
    find,
    insert
}