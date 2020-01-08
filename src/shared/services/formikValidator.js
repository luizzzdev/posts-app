const FormikValidatorService = {
  validate(schema, values) {
    const formattedSchema = Object.keys(values).reduce((result, field) => {
      result[field] = {
        ...schema[field],
        value: values[field],
      };

      return result;
    }, {});

    const fields = Object.keys(formattedSchema);

    return fields.reduce((errors, fieldName) => {
      const field = formattedSchema[fieldName];
      const isEmail = field.type === 'email';

      if (isEmail && !this._validateEmail(field.value)) {
        errors[fieldName] = 'Invalid email address';
      }

      if (field.required && !field.value) {
        errors[fieldName] = 'Required';
      }

      return errors;
    }, {});
  },
  /**
   *
   * @param email
   * @private
   */
  _validateEmail(email) {
    return (
      typeof email === 'string' &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    );
  },
};

export default FormikValidatorService;
