const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Course = require('../models/Course.js');

router.get('/', (req, res) => {
  Course.find()
    .then(course => res.json(course))
    .catch(err => res.status(404).json({ msg: 'No courses' }));
});

router.get('/:id', (req, res) => {
  Course.findById(req.params.id)
    .then(course => {
      if (!course) {
        res.status(404).json({ msg: 'No course found with that id' });
      }
      res.json(course);
    })
    .catch(err =>
      res.status(404).json({ msg: 'No course found with that id' })
    );
});

router.post('/', (req, res) => {
  console.log(req.body)
  const newCourse = new Course({
    id: mongoose.Types.ObjectId(),
    code: req.body.code,
    name: req.body.name,
    summary: req.body.summary,
  })

  console.log(newCourse)

  newCourse
    .save()
    .then(course => res.json({ course, msg: 'Success' }))
    .catch(err => res.status(404).json(err));
});

router.put('/', (req, res) => {
  Course.findById(req.params.id)
    .then(course => {
      if (!course) {
        res.status(404).json({ msg: 'No course found with that id' });
      }

      course
        .set({ 
          summary: req.params.summary,
          content: req.params.content,
          date: new Date(),
        })
        .save()
        .catch(err => res.status(404).json(err));

    })
    .catch(err =>
      res.status(404).json({ msg: 'No course found with that id' })
    );
})

module.exports = router;
