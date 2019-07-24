import axios from "axios";
import env from "../../../environment";

const getTimesRodada = async idRodada => {
  try {
    /* const USER_APP = functions.loadLocalStorage('');
    const token = USER_APP.token;
    const options = {
      headers: {
        Authorization: token
      }
    } */
    const url = `${env.API_URL}/rodadasTimes?rodadaId=${343}`;
    const rodadasResult = await axios.get(url);
    return rodadasResult;
  } catch (error) {
    return error.response;
  }
};

const getTimes = async () => {
  try {
    /* const USER_APP = functions.loadLocalStorage('');
    const token = USER_APP.token;
    const options = {
      headers: {
        Authorization: token
      }
    } */
    const url = `${env.API_URL}/times`;
    const times = await axios.get(url);
    return times;
  } catch (error) {
    return error.response;
  }
};

export { getTimesRodada, getTimes };
