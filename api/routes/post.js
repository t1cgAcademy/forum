const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Post = require('../models/Post.js');

router.get('/', (req, res) => {
  Post.find()
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ msg: 'No Posts' }));
});

// takes an array of posts and builds a nested json object
// representing a forum

buildThread = (posts) => {
}

router.get('/:id', (req, res) => {
  Post.find({ $or:[ {'_id': req.params.id}, {'parent_id': req.params.id} ]})
    .then(post => {
      if (!post) {
        res.status(404).json({ msg: 'No post found with that id' });
      }
      res.json(post);
    })
    .catch(err =>
      res.status(404).json({ msg: 'No post found with that id' })
    );
});

router.post('/', (req, res) => {
  const newPost = new Post({
    date: new Date(),
    parentID: (req.body.id) ? req.body.id : null,
    courseID: req.body.code,
    id: mongoose.Types.ObjectId(),
    author: req.body.author,
    summary: (req.body.summary) ? req.body.summary : "",
    content: req.body.content,
  })

  console.log(newPost)

  newPost
    .save()
    .then(post => res.json({ post, msg: 'Success' }))
    .catch(err => res.status(404).json(err));
});

router.put('/', (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      if (!post) {
        res.status(404).json({ msg: 'No post found with that id' });
      }

      post
        .set({ 
          summary: req.params.summary,
          content: req.params.content,
          date: new Date(),
        })
        .save()
        .catch(err => res.status(404).json(err));

    })
    .catch(err =>
      res.status(404).json({ msg: 'No post found with that id' })
    );
})

module.exports = router;
