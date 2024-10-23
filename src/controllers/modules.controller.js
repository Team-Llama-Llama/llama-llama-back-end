const modulesModel = require("../models/modules.model")

const viewModules = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const moduleData = await modulesModel.viewModules(categoryId);
        res.send(moduleData);
    } catch(err) {
        console.error("Unable to view modules.");
    }
}

const addModule = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const newModule = req.body.newModule;
        const moduleData = await modulesModel.addModule(categoryId, newModule);
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

module.exports = { viewModules, addModule, editModule, deleteModule }