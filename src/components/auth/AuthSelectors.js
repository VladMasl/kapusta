const getAuthIsLoading = state => state.auth.isLoading;
const getAuthToken = state => state.auth.accessToken;
const getAuthRefreshToken = state => state.auth.refreshToken;
const getAuthSid = state => state.auth.sid;
const getAuthIdUser = state => state.auth.idUser;
const getAuthEmail = state => state.auth.email;
const getAuthBalance = state => state.auth.balance;
const getAuthTransactions = state => state.auth.transactions;
const getAuthError = state => state.auth.error;

export {
  getAuthBalance,
  getAuthEmail,
  getAuthError,
  getAuthIdUser,
  getAuthIsLoading,
  getAuthRefreshToken,
  getAuthSid,
  getAuthToken,
  getAuthTransactions,
};
