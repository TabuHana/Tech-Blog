const router = require('express').Router()
const { Post, User, Comment } = require('../models')
const passport = require('passport')

//Sends in jwt(badge authentication) to get all the users posts
router.get('/posts', passport.authenticate('jwt'), async function (req, res) {
  const posts = await Post.findAll({ include: [User] })
  res.json(posts)
})

//authenticates user logins in order to make a post
router.post('/posts', passport.authenticate('jwt'), async function (req, res) {
  const posts = await Post.create(
    {
      ...req.body,
      uid: req.user.id
    })
  res.json(posts)
})

module.exports = router