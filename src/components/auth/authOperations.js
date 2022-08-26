import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../utils/api';

const Error = {
  AUTH_FAILED: 'Invalid email or password.',
  UNKNOWN: 'Unknown backend error occurred.',
};

const register = createAsyncThunk('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    await api.register(credentials);
    const { data } = await api.login(credentials);
    api.token.set(data.accessToken);
    return data;
  } catch (error) {
    if (error.message === 'Request failed with status code 409') {
      return rejectWithValue('Provided email already exists');
    }
    return rejectWithValue(Error.UNKNOWN);
  }
});

const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await api.login(credentials);
    api.token.set(data.accessToken);
    return data;
  } catch (error) {
    if (error.message === 'Request failed with status code 403') {
      return rejectWithValue("Email doesn't exist / Password is wrong");
    }
    return rejectWithValue(Error.UNKNOWN);
  }
});

const googleLogin = createAsyncThunk('auth/google', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await api.googleAuth();
    api.token.set(data.accessToken);
    return data;
  } catch (error) {
    if (error.message === 'Request failed with status code 403') {
      return rejectWithValue("Email doesn't exist / Password is wrong");
    }
    return rejectWithValue(Error.UNKNOWN);
  }
});

const refresh = createAsyncThunk('auth/refresh', async (_, { getState, rejectWithValue }) => {
  try {
    api.token.set(getState().auth.refreshToken);
    const { data } = await api.refresh({ sid: getState().auth.sid });
    api.token.set(data.newAccessToken);
    return data;
  } catch (error) {
    return rejectWithValue(Error.UNKNOWN);
  }
});

const logOut = createAsyncThunk('auth/logOut', async (_, { rejectWithValue }) => {
  try {
    await api.logout();
    api.token.unset();
  } catch (error) {
    return rejectWithValue(Error.UNKNOWN);
  }
});

const getAuthUser = createAsyncThunk('auth/getUser', async (_, { getState, rejectWithValue }) => {
  const token = getState().auth.accessToken;
  api.token.set(token);
  try {
    const { data } = await api.getUser();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { register, login, refresh, logOut, googleLogin, getAuthUser };
