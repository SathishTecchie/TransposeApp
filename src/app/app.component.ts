import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public inputString: string;
  public outPutString: string;

  /**
   * @name reverseTheText
   * @param none
   * @returns none
   * @desc it is used to reverse the string value
   * @memberOf AppComponent
   */
  public reverseTheText(): void {
    let outPutData = "";
    if (this.inputString) {
      for (let count = this.inputString.length - 1; count >= 0; count--) {
        if (this.inputString[count] === "\n") {
          outPutData = outPutData + "\n";
        }
        outPutData = outPutData + this.inputString[count];
      }
      this.outPutString = outPutData;
    }
  }
}
