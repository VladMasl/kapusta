import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  refresh,
  logOut,
  googleLogin,
  getAuthUser,
  newBalance,
} from './authOperations';
import * as api from '../../utils/api';

const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  idUser: null,
  email: null,
  balance: null,
  transactions: null,
  error: null,
  isLoading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    /* =====================REGISTER==================== */
    [register.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [register.fulfilled]: (state, { payload }) => {
      const { accessToken, refreshToken, sid, userData } = payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.sid = sid;
      state.idUser = userData.id;
      state.email = userData.email;
      state.balance = userData.balance;
      state.transactions = userData.transactions;
      state.isLoading = false;
    },
    [register.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    /* ======================LOGIN===================  */
    [login.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      const { accessToken, refreshToken, sid, userData } = payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.sid = sid;
      state.idUser = userData.id;
      state.email = userData.email;
      state.balance = userData.balance;
      state.transactions = userData.transactions;
      state.isLoading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* ======================GOOGLE===================  */
    [googleLogin.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [googleLogin.fulfilled]: (state, { payload }) => {
      const { accessToken, refreshToken, sid, userData } = payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.sid = sid;
      state.idUser = userData.id;
      state.email = userData.email;
      state.balance = userData.balance;
      state.transactions = userData.transactions;
      state.isLoading = false;
    },
    [googleLogin.rejected]: (state, { payload }) => ({
      ...initialState,
      error: payload,
    }),
    /* ======================GET USER===================  */
    [getAuthUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getAuthUser.fulfilled]: (state, { payload }) => {
      const { email, balance, transactions } = payload;
      state.email = email;
      state.balance = balance;
      state.transactions = transactions;
      state.isLoading = false;
    },
    [getAuthUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* ================LOGOUT======================= */
    [logOut.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logOut.fulfilled]: state => ({
      ...initialState,
    }),
    [logOut.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.state.error = payload;
    },
    /* ================= REFRESH ======================*/
    [refresh.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [refresh.fulfilled]: (state, { payload }) => {
      const { newAccessToken, newRefreshToken, newSid } = payload;
      state.accessToken = newAccessToken;
      state.sid = newSid;
      state.refreshToken = newRefreshToken;
      state.isLoading = false;
    },
    [refresh.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* =================NEW BALANCE================= */
    [newBalance.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    },
    [newBalance.fulfilled]: (state, { payload }) => {
      state.balance = payload.newBalance;
      state.isLoading = false;
    },
    [newBalance.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const { reducer: authReducer } = slice;
export const { token, resetAuthState } = slice.actions;
