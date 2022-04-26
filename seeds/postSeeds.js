const { Post } = require('../models')

const postData = [
  {
    title: 'Sample post',
    body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis natus at, sunt a officia minima dolores consectetur harum minus est expedita animi eos, tempora eaque? Rerum sint excepturi esse.`
  },
  {
    title: 'Sample post 2',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reprehenderit magnam doloremque. Libero maiores eveniet eos nesciunt fugit perferendis temporibus culpa! Sint quos vero atque consectetur recusandae quod rerum expedita.`
  }
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts