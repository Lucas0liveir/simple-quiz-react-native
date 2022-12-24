/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import Axios from 'axios';

export default Axios.create({
  //adb reverse para redirecionar a porta 3000 do smartphone para a porta 3000 do computador
  baseURL: 'http://localhost:3000',
  timeout: 2000,
});
