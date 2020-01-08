import React from 'react';
import Card from '../../../shared/components/UI/Card/card';
import { Formik } from 'formik';
import authClasses from '../../Auth.module.sass';
import Input from '../../../shared/components/UI/Input/input';
import Button from '../../../shared/components/UI/Button/button';
import Text from '../../../shared/components/UI/Text/Text';
import AuthService from '../../authService';
import FormikValidatorService from "../../../shared/services/formikValidator";

const Register = () => {
  const submitHandler = async (
    { nickname, email, password },
    { resetForm }
  ) => {
    await AuthService.signUp(nickname, email, password);
    resetForm();
  };

  const fieldsSchema = {
    email: {
      type: 'email',
      required: true,
    },
    password: {
      required: true,
    },
    nickname: {
      required: true,
    },
  };

  return (
    <div className={authClasses.Auth}>
      <div className={authClasses.Card}>
        <Card>
          <Text light center>
            Não vai ficar de fora dessa, né? Realize aqui seu cadastro :)
          </Text>
          <Formik
            initialValues={{ email: '', password: '', nickname: '' }}
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
                  value={values.nickname}
                  placeholder="Como você gostaria de ser chamado?"
                  type="text"
                  name="nickname"
                  onChange={handleChange}
                  invalid={errors.nickname && touched.nickname}
                />

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
                    Cadastrar-se
                  </Button>
                  <Text light center mid>
                    OU
                  </Text>
                  <Button outlined full>
                    Login
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

export default Register;
