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
  static addModule(categoryId, newModule) {
    return knex(MODULES_TABLE).insert({
      category_id: categoryId,
      title: newModule.title,
      body: newModule.body,
      reference_url: newModule.referenceUrl,
      solution: newModule.solution,
    });
  }

  static editModule(moduleId, moduleEdit) {
    return knex(MODULES_TABLE).where({ id: moduleId }).update({
      title: moduleEdit.title,
      reference_url: moduleEdit.referenceUrl,
      body: moduleEdit.body,
      solution: moduleEdit.solution,
      updated_at: timestamp(),
    });
  }

  static deleteModule(moduleId) {
    return knex(MODULES_TABLE).where({ id: moduleId }).del();
  }
}

module.exports = Modules;
