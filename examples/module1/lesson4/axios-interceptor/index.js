import axios from 'axios';

const getDateDataOnIndex = (index) => {
  return new Date().toISOString().split('T')[index];
};

const calculateElapsedTime = (config) => {
  const {
    metadata: { startTime },
  } = config;
  const elapsedTime = new Date() - startTime;
  console.log(`Your waiting time is ${elapsedTime} ms`);
};

const dateLogger = (config) => {
  console.log('config', config);
  const date = getDateDataOnIndex(0);
  const hours = getDateDataOnIndex(1).split('.')[0];
  console.log(`The request was registered on: ${date} at time: ${hours}`);
  config.metadata = { startTime: new Date() };
  return config;
};

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  dateLogger(config);
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  calculateElapsedTime(response.config);
  return response;
});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=1000');

document.querySelector('#data').innerHTML = articles[0].content;
