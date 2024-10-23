const categoriesModel = require("../models/categories.model")

const viewCategories = async (req, res) => {
    try {
        // const userId = <receive user id through auth>
        const categoryData = await categoriesModel.viewCategories(userId);
        res.send(categoryData);
    } catch(err) {
        console.error("Unable to view categories.");
    }
}

const addCategory = async (req, res) => {
    try {
        // const userId = <receive user id through auth>
        const newCategory = req.body.newCategory;
        const categoryData = await categoriesModel.addCategory(userId, newCategory);
        res.send(categoryData);
    } catch (err) {
        console.error("Unable to add category.")
    }
}

const editCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const categoryEdit = req.body.categoryEdit;
        const categoryData = await categoriesModel.editCategory(categoryId, categoryEdit);
        res.send(categoryData)
    } catch (err) {
        console.error("Unable to edit category.")
    }
}

const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const categoryData = await categoriesModel.Model.deleteCategory(categoryId);
        res.send(categoryData)
    } catch (err) {
        console.error("Unable to delete category.")
    }
}


module.exports = { viewCategories, addCategory, editCategory, deleteCategory }