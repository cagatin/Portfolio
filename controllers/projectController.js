const Project = require('../models/Project');

// Retrieve all available projects
const getAllProjects = async function (req, res) {
    try {
        const projectData = await Project.find({});
        if (!projectData) {
            res.status(404).json({ message: "No Projects in the Database" });
        }
        res.status(200).json(projectData);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// Retrieve single project based on _id route parameter
const getSingleProject = async function (req, res) {
    try {
        const projectData = await Project.findById(req.params.id);
        if (!projectData) {
            res.status(404).json({ message: "No project exists with that ID" });
        }
        res.status(200).json(projectData);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// Adds project to the Database
const createProject = async function (req, res) {
    try {
        // Data will be passed as so:
        /*
        {
            title: "Project Title",
            description: "Some project description",
            githubUrl: "https://github.com/cagatin/Social-Network-API",
            deployedUrl: "somedeployedURl.com"
        }
        */
        const projectData = await Project.create(req.body);
        if (!projectData) {
            res.status(404).json({ message: "Error in creating new project" });
        }
        res.status(200).json(projectData);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// Delete a project from the database based on _id route parameter passed
const deleteProject = async function (req, res) {
    try {
        const projectData = await Project.findByIdAndDelete(req.params.id);
        if (!projectData) {
            res.status(404).json({ message: `Could not delete the project with the ID of ${req.params.id}` });
        }
        res.status(200).json(projectData);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getAllProjects,
    getSingleProject,
    createProject,
    deleteProject
}