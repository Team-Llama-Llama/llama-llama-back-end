// Validation function for a Module object
function validateModule(obj) {
  const errors = [];

  // Check if categoryId is a number
  if (!obj.categoryId || isNaN(obj.categoryId)) {
    errors.push('Invalid or missing "categoryId".');
  }

  // Validate title
  if (!obj.title || typeof obj.title !== "string" || obj.title.length > 255) {
    errors.push(
      'Invalid "title". It must be a string with a maximum length of 255 characters.'
    );
  }

  // Validate body
  if (typeof obj.body !== "string") {
    errors.push('Invalid "body". It must be a string.');
  }

  // Validate referenceUrl (if present)
  if (typeof obj.referenceUrl !== "string") {
    errors.push('Invalid "referenceUrl". It must be a string.');
  }

  // Validate solution (optional)
  if (typeof obj.solution !== "string") {
    errors.push('Invalid "solution". It must be a string.');
  }

  return errors;
}

module.exports = { validateModule };
