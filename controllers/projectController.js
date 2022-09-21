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