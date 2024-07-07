function validateReferral(data) {
    const errors = [];
  
    if (!data.referrerName) {
      errors.push('Referrer name is required');
    }
    if (!data.referrerEmail) {
      errors.push('Referrer email is required');
    }
    // Add more validations as needed
  
    return errors;
  }
  
  module.exports = {
    validateReferral,
  };
  