import axios from 'axios';

const axiosblue = axios.create({
  baseURL: 'https://www.stackadapt.com/coinmarketcap/',
 
  
});
export default axiosblue;