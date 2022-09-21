const { getAllProjects, getSingleProject, createProject, deleteProject } = require('../../controllers/projectController');
const router = require('express').Router();

// api/projects
router.route('/')
    .get(getAllProjects)
    .post(createProject);

// api/projects/:projectId
router.route('/:projectId')
    .get(getSingleProject)
    .delete(deleteProject);

module.exports = router;
