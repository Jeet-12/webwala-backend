const express = require('express');
const router = express.Router();
const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  toggleTask,
} = require('../controllers/taskController');
const { protect } = require('../middleware/auth');

// All task routes are protected
router.use(protect);

// @route   POST   /api/tasks
// @route   GET    /api/tasks
router.route('/').post(createTask).get(getTasks);

// @route   GET    /api/tasks/:id
// @route   PUT    /api/tasks/:id
// @route   DELETE /api/tasks/:id
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask);

// @route   PATCH  /api/tasks/:id/toggle
router.patch('/:id/toggle', toggleTask);

module.exports = router;
