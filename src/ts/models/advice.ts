import { Iadvice } from "../interfaces/Iadvice";

class Advice implements Iadvice<number, string> {
  adviceNumber: number;
  adviceMessage: string;

  constructor(adviceNumber: number, adviceMessage: string) {
    this.adviceNumber = adviceNumber;
    this.adviceMessage = adviceMessage;
  }


  public get number(): number {
    return this.adviceNumber;
  }


  public set number(v: number) {
    this.adviceNumber = v;
  }


  public get message(): string {
    return this.adviceMessage;
  }


  public set message(v: string) {
    this.adviceMessage = v;
  }



}

export default Advice;