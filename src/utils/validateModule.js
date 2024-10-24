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
  if (!obj.body || typeof obj.body !== "string") {
    errors.push('Invalid "body". It must be a string.');
  }

  // Validate referenceUrl (if present)
  if (obj.referenceUrl && typeof obj.referenceUrl !== "string") {
    errors.push('Invalid "referenceUrl". It must be a string if provided.');
  }

  // Validate solution (optional)
  if (obj.solution && typeof obj.solution !== "string") {
    errors.push('Invalid "solution". It must be a string if provided.');
  }

  return errors;
}

module.exports = { validateModule };
