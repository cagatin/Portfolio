import { getAllProjects, getSingleProject, createProject, deleteProject } from '../../controllers/projectController';
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
