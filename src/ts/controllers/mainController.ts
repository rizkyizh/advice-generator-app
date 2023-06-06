import { DasboardPage } from "../pages/dasboard";

export class MainController {
  _content: HTMLElement;

  constructor(content: HTMLElement) {
    this._content = content;
  }

  async renderPage() {
    this._content.innerHTML = await DasboardPage.render()
    await DasboardPage.afterRender();
  }

}