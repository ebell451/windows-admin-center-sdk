import { Component } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AppContextService } from '@msft-sme/shell/angular';

@Component({
    selector: 'sme-ng2-accessibility',
    template: `
      <div class="sme-layout-absolute sme-position-inset-none sme-documentation">
          <h1>Accessibility</h1>
          <section>
              <p>Accessible design starts with these fundamental rules that our styles try to follow and encourage.</p>

              <ol>
                  <li><b>Keep html simple.</b> There is rarly a need to create complex div structures if the proper built in classes and controls are used.</li>
                  <li><b>Let the html speak for itself.</b> Use the proper elements for your intent. For example, an anchor tag that doesnt navigate the user should be a button. Likewise a div with only text should probably be a heading or paragraph tag.</li>
                  <li><b>Use ARIA properly</b> This is hard but worth it. <a href="https://msdn.microsoft.com/en-us/library/gg701982(v=vs.85).aspx">Learn how ARIA works on MSDN.</a> and use it consistently. SME controls will use and encourage the use of these attributes
                      as much as possible. </li>
              </ol>
          </section>


          <h2>Keyboard Navigation</h2>
          <section>
              <p>Keyboard navigation is easy to overlook but a few simple principals will help make it simple.</p>

              <ol>
                  <li>Anchors without hrefs should always hav a tab index</li>
                  <li>If elements appear in a different order than declared in html, use tabIndex to correct the focus order</li>
              </ol>

              <h3>Keyboard vs Mouse Focus</h3>
              <p>SME Core includes some default functionality that will add/remove the sme-focus-hidden class when an element is focused with a mouse as opposed to a keyboard.</p>
              <p>By default any focusable element, when it recieves focus, will show a dashed outline to indicate that it has focus. However when the sme-focus-hidden class is applied this outline does not show up.</p>
          </section>
      </div>
    `
})
export class AccessibilityComponent {
    
    public static navigationTitle(appContextService: AppContextService, snapshot: ActivatedRouteSnapshot): string {
        return 'Accessibility';
    }
}
