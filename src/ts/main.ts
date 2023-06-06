import '../assets/css/main.css'
import { MainController } from './controllers/mainController';



const main = new MainController(document.querySelector('#app')!)

window.addEventListener('hashchange', () => {
  main.renderPage();
})

window.addEventListener('load', async () => {
  main.renderPage();
})

