const AuthenticationController = require('./controllers/AuthenticationController')
const BlogsController = require('./controllers/BlogsController')

module.exports = function(app) {
    app.get('/',BlogsController.getTop)
    app.get('/create', BlogsController.createBlog)
    app.get('/login', AuthenticationController.login)
    app.get('/register', AuthenticationController.register)
    app.get('/user/:username', BlogsController.getUserBlogs)
}