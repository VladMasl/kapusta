import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthError } from 'redux/auth/AuthSelectors';
import { login, register } from '../../redux/auth/authOperations';
import s from './AuthForm.module.scss';

const AuthForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const error = useSelector(getAuthError);

  const validate = values => {
    const errors = {};
    const regexEmail = /^[a-z0-9._%+-]{2,}@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$/i;
    if (!values.email) {
      errors.email = 'This is a required field';
    } else if (!regexEmail.test(values.email)) {
      errors.email = 'Email can contain latin letters, numbers, period, hyphen, underscore, @,';
    } else if (email.indexOf('-') === 0 || email.endsWith('-')) {
      errors.email = 'A hyphen cannot be at the beginning or at the end Email';
    } else if (email.length < 6) {
      errors.email = 'Minimum number of characters in a field - 6';
    } else if (email.length > 63) {
      errors.email = 'Maximum number of characters in a field - 63';
    }
    if (!values.password) {
      errors.password = 'This is a required field';
    } else if (password.length < 7) {
      errors.password = 'Password must contain at least 7 characters';
    } else if (password.length > 12) {
      errors.password = 'Password must contain a maximum of 12 characters';
    } else if (!regexPassword.test(values.password)) {
      errors.password = 'Password must contain letters and numbers';
    }
    return errors;
  };
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    let submitter = e.nativeEvent.submitter;
    if (submitter.name === 'login') {
      const errors = validate({ email, password });
      setFormErrors(errors);

      if (!errors.email && !errors.password) {
        dispatch(login({ email, password }));
        setEmail('');
        setPassword('');
      }
    }

    if (submitter.name === 'registration') {
      const errors = validate({ email, password });
      setFormErrors(errors);

      if (!errors.email && !errors.password) {
        dispatch(register({ email, password }));
        setEmail('');
        setPassword('');
      }
    }
  };

  const canceler = e => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      e.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.emailLabel}>
        <p className={s.text}>
          {formErrors.email && <span className={s.error}>*</span>}
          Email:
        </p>
        <input
          type="email"
          name="email"
          value={email}
          className={s.input}
          placeholder="your@email.com"
          onChange={handleChangeEmail}
          onKeyDown={canceler}
          autoComplete="on"
        />
        {formErrors.email && <p className={s.error}>{formErrors.email}</p>}
      </label>
      <label className={s.passwordlLabel}>
        <p className={s.textPass}>
          {formErrors.password && <span className={s.error}>*</span>}
          Password:
        </p>
        <input
          type="password"
          name="password"
          value={password}
          className={s.inputpassword}
          placeholder="Password"
          onChange={handleChangePassword}
          onKeyDown={canceler}
          autoComplete="off"
        />
        {formErrors.password && <p className={s.error}>{formErrors.password}</p>}
      </label>
      <div className={s.btns}>
        <button type="submit" className={s.login} name="login">
          Log in
        </button>
        <button type="submit" name="registration" className={s.registration}>
          Registration
        </button>
      </div>
      {error && <p className={s.errorAuth}>{error}</p>}
    </form>
  );
};

export default AuthForm;
