import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import{getPeriodTransactions}from 'utils/api';

export const getPeriod = createAsyncThunk(
  'transactions/getPeriodTransactions',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await getPeriodTransactions(date);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const  getTransactionReportApi = () => {
  return axios
    .get('/transaction/period-data', {
      params: {
        date: '2022-07',
      },
    })
    .then(response => {
      console.log(response.data);
      return response.data;
    });
};
