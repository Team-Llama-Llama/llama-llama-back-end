const knex = require("../knex.js");

const MODULES_TABLE = "modules";
const timestamp = Date.now();

class Modules {
    constructor() {}

    static viewModules(categoryId) {
        return knex(MODULES_TABLE)
            .select("*")
            .where({ category_id : categoryId })
    }

    static addModule(categoryId, newModule) {
        return knex(MODULES_TABLE)
            .insert({
                category_id: categoryId,
                title: newModule.title,
                reference_url: newModule.reference_url,
                created_at: timestamp,
                updated_at: timestamp,
            })
    }

    static editModule(moduleId, moduleEdit) {
        return knex(MODULES_TABLE)
            .where({ id: moduleId })
            .update({ 
                title: moduleEdit.title, 
                reference_url: moduleEdit.reference_url,
                body: moduleEdit.body,
                solution: moduleEdit.solution,
                updated_at: timestamp,
            })
    }

    static deleteCategory(moduleId) {
        return knex(CATEGORIES_TABLE)
            .where({ id: moduleId })
            .del()
    }

}

module.exports = { Modules }
