import Advice from "../models/advice";
import AdviceApi from "../networks/advice-api";
import { generateRandomNumber } from "../utils/util";

export const DasboardPage: page.dasboard = {
  render: async function () {
    const initialDataRender: Advice = await AdviceApi.getRandomAdvice()
    return `<div
        id="content-wrapper"
        class="bg-DarkGrayishBlue p-4 text-center rounded-md max-w-[600px] mx-auto max-h-96 relative"
      >
      <h1 class="text-NeonGreen tracking-widest text-[8px] sm:text-[14px]" id="adviceId">
      ADVICE #${initialDataRender.adviceNumber}
      </h1>
      <p
      class="font-extrabold text-lingtCyan my-4 text-[16px] sm:text-[28px]"
      id="adviceMessage"
      >
      ${initialDataRender.adviceMessage}
        </p>
        <picture>
          <source
            media="(min-width: 375px)"
            srcset="./assets/images/pattern-divider-desktop.svg"
          />
          <img
            class="mx-auto mb-7"
            src="./assets/images/pattern-divider-mobile.svg"
            alt="yae sakura"
          />
        </picture>
        <button
          class="p-2 rounded-full bg-NeonGreen absolute middle hover:bg-lingtCyan"
          id="btn-next"
        >
          <img src="./assets/images/icon-dice.svg" />
        </button>
      </div>`
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