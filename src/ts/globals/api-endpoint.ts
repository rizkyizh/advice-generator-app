import { CONFIG } from "./config";


export const API_ENDPOINT: configuration.API_ENDPOINT = {
  GET_RANDOM_ADVICE: `${CONFIG.BASEURL}/advice`,
  GET_ADVICE_BY_ID: (id) => `${CONFIG.BASEURL}/advice/${id}`
}