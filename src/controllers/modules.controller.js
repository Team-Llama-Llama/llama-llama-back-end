const modulesModel = require("../models/modules.model")

const viewModules = async (req, res) => {
    try {
        // const userId = <receive user id through auth>
        const moduleId = req.body.moduleId;
        const moduleDataData = await modulesModel.viewModules(moduleId);
        res.send(moduleDataData);
    } catch(err) {
        console.error("Unable to view modules.");
    }
}

const addModule = async (req, res) => {
    try {
        const moduleId = req.params.id;
        const newModule = req.body.newModule;
        const moduleData = await modulesModel.addModule(moduleId, newModule);
        res.send(moduleData);
    } catch (err) {
        console.error("Unable to add module.")
    }
}

const editModule = async (req, res) => {
    try {
        const moduleId = req.params.id;
        const moduleEdit = req.body.moduleEdit
        const moduleData = await modulesModel.editmodule(moduleId, moduleEdit);
        res.send(moduleData)
    } catch (err) {
        console.error("Unable to edit module.")
    }
}

const deleteModule = async (req, res) => {
    try {
        const moduleId = req.params.id;
        const moduleData = await modulesModel.deleteModule(moduleId);
        res.send(moduleData)
    } catch (err) {
        console.error("Unable to delete module.")
    }
}

module.exports = { viewModules, addModule, editModule, deleteModule}