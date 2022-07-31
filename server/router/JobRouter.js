const express = require('express')
const router = express.Router()
const Job = require('../models/job-model')

//getting all job list
router.get('/jobs', function (req, res, next) {
    Job.find({}).then(function (jobs) {
        res.send(jobs)
    }).catch(next)
})

//getting one job
router.get('/jobs/:id', function (req, res, next) {
    Job.findOne({_id: req.params.id}).then(function (jobs) {
        res.send(jobs)
    }).catch(next)
})

router.post('/jobs', function (req, res, next) {
    Job.create(req.body).then(function (job) {
        res.send(job)
    }).catch(next)
})
//update job
router.delete('/jobs/:id', function (req, res, next) {
    Job.findByIdAndUpdate({_id: req.params.id}).then(function () {
        Job.findOne({_id: req.params.id}).then(function () {
            res.send(job)
        })
    }).catch(next)
})


//delete job
router.delete('/jobs/:id', function (req, res, next) {
    Job.findByIdAndRemove({_id: req.params.id}).then(function (jobs) {
        res.send(jobs)
    }).catch(next)
})




module.exports = router