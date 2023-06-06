import Advice from "../models/advice";
import AdviceApi from "../networks/advice-api";
import { generateRandomNumber } from "../utils/util";

export const DasboardPage: page.dasboard = {
  render: async function (el: page.elementRender) {
    const initialDataRender: Advice = await AdviceApi.getRandomAdvice()
    el.adviceNumber.innerHTML = `ADVICE #${initialDataRender.adviceNumber.toString()}`;
    el.adviceMessage.innerHTML = `"${initialDataRender.adviceMessage}"`;
  },
  afterRender: function () {
    console.log("render success!");

    this._initialData();
  },
  _initialData: async function () {
    document.querySelector<HTMLButtonElement>('#btn-next')
      ?.addEventListener('click', async () => {

        const getRandomNumber: string = generateRandomNumber().toString();
        const advice: Advice = await AdviceApi.getAdviceById(getRandomNumber);

        const idEL = document.querySelector<HTMLHeadingElement>('#adviceId')!;
        const messageEL = document.querySelector<HTMLParagraphElement>('#adviceMessage')!;
        idEL.innerHTML = `ADVICE #${advice.adviceNumber.toString()}`;
        messageEL.innerHTML = `"${advice.adviceMessage}"`;

      })


  }
}