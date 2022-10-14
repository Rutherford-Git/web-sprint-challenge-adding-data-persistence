// build your `/api/tasks` router here
const router = require('express').Router()
const model = require('./model')

router.get('/', (req, res, next) => {
    model.find()
    .then(thing => {
      res.json(thing)
    })
    .catch(next)
  })

  router.post('/', (req, res, next) => {
    model.insert(req.body)
    .then(thing => {
        if(thing.task_completed === 'red'){
            thing.task_completed = true
        }
      res.json(thing)
    })
    .catch(next)
})

module.exports = router;