const knex = require("../knex.js");

const MODULES_TABLE = "modules";

function timestamp() {
  return new Date().toISOString();
}

class Modules {
  constructor() {}

  static viewModules(categoryId) {
    return knex(MODULES_TABLE).select("*").where({ category_id: categoryId });
  }

  // Database add timestamps
  static addModule(categoryId, title, referenceUrl) {
    return knex(MODULES_TABLE).insert({
      category_id: categoryId,
      title: title,
      body: "",
      reference_url: referenceUrl,
      solution: "",
    }).returning("*")
  }

  static editModule(moduleId, moduleEdit) {
    return knex(MODULES_TABLE)
      .where({ id: moduleId })
      .update({
        title: moduleEdit.title,
        reference_url: moduleEdit.referenceUrl,
        body: moduleEdit.body,
        solution: moduleEdit.solution,
        updated_at: timestamp(),
      })
      .returning("*")
      .select("*");
      
  }

  static deleteModule(moduleId) {
    return knex(MODULES_TABLE).where({ id: moduleId }).del();
  }
}

module.exports = Modules;
