const router = require('express').Router();
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')
// Auth
router.post("/register", authController.signUp);

// user display:'blok
router.get('/',userController.getAllUsers);
router.get('/:id', userController.getUserById)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)
module.exports = router;