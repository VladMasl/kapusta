import axios from 'axios';

 axios.defaults.baseURL = 'https://kapusta-backend.goit.global/';

export const getTransactionReportApi = async () => {
  // return axios
  //   .get('/transaction/period-data', {
  //     params: {
  //       date: '2022-07',
  //     },
  //   })
  //   .then(response => {
  //     console.log(response.data);
  //     return response.data;
  //   });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        incomes: {
          total: 12000,
          incomesData: {
            'З/П': {
              total: 12000,
              Аванс: 5000,
              Основная: 7000,
            },
          },
        },
        expenses: {
          total: 5200,
          incomesData: {
            Транспорт: {
              total: 4000,
              СТО: 3500,
              Мойка: 500,
            },
            'Всё для дома': {
              total: 1200,
              Вазон: 150,
              'Шкаф-купе': 1050,
            },
          },
        },
      });
    }, 1000);
  });
};
