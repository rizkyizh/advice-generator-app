declare module configuration {
  type CONFIG = {
    BASEURL: string
  }

  interface API_ENDPOINT {
    GET_RANDOM_ADVICE: string,
    GET_ADVICE_BY_ID(id: string): string
  }

}

declare module page {
  type dasboard = {
    render(),
    afterRender(),
    _initialData()
  }
}
