import { API_ENDPOINT } from "../globals/api-endpoint";
import Advice from "../models/advice";

class AdviceApi {
  static async getRandomAdvice() {
    const response = await fetch(API_ENDPOINT.GET_RANDOM_ADVICE);
    return await response.json().then(data => new Advice(data.slip.id, data.slip.advice));
  }

  static async getAdviceById(id: string) {
    const response = await fetch(API_ENDPOINT.GET_ADVICE_BY_ID(id));
    return await response.json().then(data => new Advice(data.slip.id, data.slip.advice));
  }
}

export default AdviceApi;