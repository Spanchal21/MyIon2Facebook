import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {AccordionModule} from "ng2-accordion";


@Component({
  templateUrl: 'build/pages/about/about.html'
})

// @Component({ 
//      selector: "app", 
//      template: ` 
// <div class="container"> 
 
//     <h2>Regular accordion</h2> 
//     <accordion> 
//          <accordion-group heading="About me"> 
//              Its all about me. 
//          </accordion-group> 
//          <accordion-group heading="Contacts"> 
//              This is content of the contacts 
//          </accordion-group> 
//          <accordion-group heading="Map"> 
//              Content of the Map 
//          </accordion-group> 
//        <accordion-group> 
//              <accordion-heading> 
//                  Custom heading 
//              </accordion-heading> 
//              Its all about me. 
//          </accordion-group> 
//      </accordion> 
//       <h2>Regular accordion with first opened group</h2> 
//      <accordion> 
//          <accordion-group heading="About me" [isOpened]="true"> 
//              Its all about me. 
//          </accordion-group> 
//          <accordion-group heading="Contacts"> 
//            This is content of the contacts 
//          </accordion-group> 
//          <accordion-group heading="Map"> 
//              Content of the Map 
//          </accordion-group> 
//          <accordion-group> 
//              <accordion-heading> 
//                <b>Custom</b> <i style="color: deeppink">heading</i> 
//              </accordion-heading> 
//              Its all about me. 
//          </accordion-group> 
//      </accordion> 
  
//      <h2>Accordion with arrows</h2> 
//      <acrdion [showArrows]="true"> 
//          <accordion-group heading="About me"> 
//              Its all about me. 
//          </accordion-group> 
//          <accordion-group heading="Contacts"> 
//              This is content of the contacts 
//          </accordion-group> 
//          <cordion-group heading="Map"> 
//              Content of the Map 
//          </accordion-group> 
//          <accordion-group> 
//              <accordion-heading> 
//                  Custom heading 
//              </accordion-heading> 
//             ts all about me. 
//          </accordion-group> 
//      </accordion> 
  
//      <h2>Accordion where you can close multiple groups</h2> 
//      <accordion [closeOthers]="false"> 
//          <accordion-group heading="About me"> 
//              I all about me. 
//          </accordion-group> 
//          <accordion-group heading="Contacts"> 
//              This is content of the contacts 
//          </accordion-group> 
//          <accordion-group heading="Map"> 
//              Content of the Map 
//          </accoron-group> 
//          <accordion-group> 
//              <accordion-heading> 
//                  Custom heading 
//              </accordion-heading> 
//              Its all about me. 
//          </accordion-group> 
//      </accordion>  
//      <h2>Accordion where all items are expanded by default</h2> 
//      <accordion [expandAll]="true"> 
//          <accordion-group heading="About me"> 
//              Its all about me. 
//          </accordion-group> 
//          <accordion-group headg="Contacts"> 
//              This is content of the contacts 
//          </accordion-group> 
//          <accordion-group heading="Map"> 
//              Content of the Map 
//          </accordion-group> 
//          <accordion-group> 
//              <accordion-heading>                 Custom heading 
//              </accordion-heading> 
//              Its all about me. 
//          </accordion-group> 
//      </accordion> 
  
//      <h2>Accordion with custom "clickable zone"</h2> 
//      <accordion> 
//          <accordion-group heading="About me"> 
//              Its all about me. 
//          </accordion-group> 
//          <accordion-group heading="Contacts"> 
//              This is content of the contacts 
//          </accordion-group> 
//          <accordion-group heading="Map"> 
//              Content of the Map 
//          </accordion-group> 
//          <accordion-group> 
//              <accordion-heading> 
//                  <input type="checkbox"> <accordion-toggle>Custom clickable heading</accordion-toggle> 
//              </accordion-heading> 
//              Its all about me. 
//          </accordion-group> 
//      </accordion> 
//  </div> 
//  ` 
//  })


export class AboutPage {
  constructor(private navController: NavController) {
  }
}
 
 
  
 