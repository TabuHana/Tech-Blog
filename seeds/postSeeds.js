const { Post } = require('../models')

const postData = [
  {
    title: 'Sample post',
    body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis natus at, sunt a officia minima dolores consectetur harum minus est expedita animi eos, tempora eaque? Rerum sint excepturi esse.`
  },
  {
    title: 'MacBook Pro',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, blanditiis ipsa, fugiat voluptates labore quos aut commodi ipsum iure deserunt, voluptatum corrupti sunt harum temporibus quia veniam ullam eius ratione?
    Doloremque voluptates libero beatae corrupti porro est repellat neque, dolorem, accusantium in minima officiis voluptatibus, magni quam vitae commodi maxime. Quisquam, neque iusto molestias totam obcaecati porro exercitationem sequi excepturi?`
  }
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts