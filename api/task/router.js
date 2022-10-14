// build your `/api/tasks` router here
const router = require('express').Router()
const model = require('./model')

router.get('/', (req, res, next) => {
    model.find()
    .then(thing => {
      let x = thing.map(e => {
            return {
                ...e,
                task_completed: e.task_completed === 1 ? true : false
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
        task_completed: thing.task_completed === 1 ? true : false
        })
    })
    .catch(next)
})

module.exports = router;