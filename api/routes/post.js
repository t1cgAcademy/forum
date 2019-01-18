const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Post = require('../models/Post.js');

router.get('/', (req, res) => {
  Post.find((err, posts) => {
    if (err)
      res.status(404).json(err);
    
    var p = buildForum(posts)
    console.log(p)
    res.json(p)
  })
});

roots = (data) => {
  let roots = [];
  let newData = [];
  for (let i=0; i<data.length; i++) {
    let d = data[i].toJSON()
    if (d.parentID === null) {
      roots.push(d)
    } else {
      newData.push(d)
    }
  }
  return {
    roots, 
    data: newData
  }
};
getChildren = (id, data) => {
  let children = []
  let newData = []

  for (let i=0; i<data.length;i++) {
    console.log(id, data[i].parentID, JSON.stringify(data[i].parentID) === JSON.stringify(id))
    if (JSON.stringify(data[i].parentID) === JSON.stringify(id)) {
      children.push(data[i])
    } else {
      newData.push(data[i])
    }
  }
  return {
    children, 
    data: newData
  }
};
buildThread = (r, data) => {
  if (data.length === 0) {
    r.replies = []
    return r;
  }
  let c = getChildren(r._id, data);
  
  let thread = Object.assign({}, r)
  thread.replies = c.children.map(child => {
    return buildThread(child, c.data)
  })
  return thread
};
buildForum = (data) => {
  let forum = []
  let r = roots(data)
  for (index in r.roots) {
    forum.push(buildThread(r.roots[index], r.data))
  }
  return forum
};

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

router.get('/:code', (req, res) => {
  Post.find({ 'code': req.params.code })
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
  console.log("posting", Object.keys(req.body), Object.values(req.body))
  const newPost = new Post({
    date: new Date(),
    parentID: (req.body.id) ? req.body.id : null,
    courseID: req.body.code,
    id: mongoose.Types.ObjectId(),
    author: req.body.author,
    summary: (req.body.summary) ? req.body.summary : "",
    content: req.body.content,
    replies: []
  })

  console.log(newPost)

  newPost
    .save()
    .then(post => res.json({ post, msg: 'Success' }))
    .catch(err => {
      console.log(err)
      res.status(404).json(err)
    });
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
