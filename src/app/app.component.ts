import { Component } from '@angular/core'; 
@Component({
  selector: 'app-root',

  template: `
  <ix-basic-navigation
  data-testid="crsp-main-navigation"
  hideHeader="false"
  breakpoints="sm|md"
>
  <div  slot="logo">some fance Titel <ix-pill variant="alarm" icon="disconnected"> Test </ix-pill></div>
  <ix-menu>
    <ix-menu-item tabIcon="home"> Home </ix-menu-item>
  </ix-menu>
  <ix-pill icon="disconnected"> Expect label to be readable </ix-pill>
   
</ix-basic-navigation>

  
  `,
})
export class AppComponent {
  
}
