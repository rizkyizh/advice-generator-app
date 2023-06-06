import { DasboardPage } from "../pages/dasboard";

export class MainController {
  _content: page.elementRender;

  constructor(content: page.elementRender) {
    this._content = content;
  }

  async renderPage() {
    await DasboardPage.render({
      adviceNumber: this._content.adviceNumber,
      adviceMessage: this._content.adviceMessage
    })
    await DasboardPage.afterRender();
  }

}