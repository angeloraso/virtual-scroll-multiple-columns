import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { VirtualScrollModule } from "./virtualScroll/virtualScroll.module";
import { AccountCardComponent } from "./accountCard/accountCard.component";

@NgModule({
  imports: [BrowserModule, FormsModule, VirtualScrollModule],
  declarations: [AppComponent, AccountCardComponent],
  providers: [
    {
      provide: "Window",
      useValue: window
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
