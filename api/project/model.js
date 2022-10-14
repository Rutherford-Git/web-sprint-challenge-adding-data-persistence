// build your `Project` model here
const db = require('../../data/dbConfig')

const find = async ()=>{
    let res = db('projects')
    .select('project_name', 'project_description', 'project_completed')

    /* let result = res.map((row)=>{
        if (row.project_completed === 0){
          row.push({
           ...row, 
            project_completed: false })
        }
    })
    return result */
    return res
}

const getById = async ([id])=>{
    return await db('projects').where('project_id', id).first()
}

const insert = async (other)=>{
    const con = await db('projects').insert(other)
    return getById(con)
}

module.exports = {
    find,
    insert
}