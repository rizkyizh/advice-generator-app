import '../assets/css/main.css'
import { MainController } from './controllers/mainController';



const main = new MainController({
  adviceNumber: document.querySelector<HTMLHeadingElement>('#adviceId')!,
  adviceMessage: document.querySelector<HTMLParagraphElement>('#adviceMessage')!
})

window.addEventListener('hashchange', () => {
  main.renderPage();
})

window.addEventListener('load', async () => {
  main.renderPage();
})

