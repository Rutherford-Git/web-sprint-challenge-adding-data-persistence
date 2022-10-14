// build your `/api/projects` router here
const router = require('express').Router()
const model = require('./model')

router.get('/', (req, res, next) => {
    model.find()
    .then(thing => {
      let x = thing.map(e => {
            return {
                ...e,
                project_completed: e.project_completed === 1 ? true : false
            }
        })
    res.json(x)   
    })
    .catch(next)
  })

  router.post('/', (req, res, next) => {
    model.insert(req.body)
    .then(thing => {
      res.json({
        ...thing,
        project_completed: thing.project_completed === 1 ? true : false
    })   
      })
    .catch(next)
})

module.exports = router;