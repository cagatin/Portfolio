const router = require('express').Router();
import projectRoutes from './projectRoutes';

router.use('/project', projectRoutes);

module.exports = router;