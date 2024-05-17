const { GET_ALL_USERS, REGISTER_USER, GET_ALL_CATEGORIES, CREATE_CATEGORY } = require('../utils/url-helper');
const userController = require('../controllers/user-controller');
const categoryController = require('../controllers/category-controller');
const Router = require('./router');

const router = new Router();

//users
router.addRoute(GET_ALL_USERS,userController.getAllUsers);
router.addRoute(REGISTER_USER,userController.createUser);

//category
router.addRoute(GET_ALL_CATEGORIES,categoryController.getAllCategories);
router.addRoute(CREATE_CATEGORY,categoryController.createCategory);

module.exports = router.handleRoute.bind(router);