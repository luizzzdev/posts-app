import React from 'react';
import Card from '../../../shared/components/UI/Card/card';
import { Formik } from 'formik';
import authClasses from '../../Auth.module.sass';
import Input from '../../../shared/components/UI/Input/input';
import Button from '../../../shared/components/UI/Button/button';
import Text from '../../../shared/components/UI/Text/Text';
import FormikValidatorService from '../../../shared/services/formikValidator';
import AuthService from '../../authService';

const Login = props => {
  const fieldsSchema = {
    email: {
      type: 'email',
      required: true,
    },
    password: {
      required: true,
    },
  };

  const submitHandler = async ({ email, password }) => {
    try {
      const user = await AuthService.signIn(email, password);
      props.history.push('/posts');
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className={authClasses.Auth}>
      <div className={authClasses.Card}>
        <Card>
          <Text light center>
            Faça login para cadastrar novos posts :)
          </Text>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              return FormikValidatorService.validate(fieldsSchema, values);
            }}
            onSubmit={submitHandler}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  value={values.email}
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  invalid={errors.email && touched.email}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                  invalid={errors.password && touched.password}
                />

                <div className={authClasses.Actions}>
                  <Button full type="submit" disabled={isSubmitting}>
                    Login
                  </Button>
                  <Text light center mid>
                    OU
                  </Text>
                  <Button outlined full>
                    Cadastrar
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </Card>
      </div>
    </div>
  );
};

export default Login;
