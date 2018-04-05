import { Component } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AppContextService } from '@msft-sme/shell/angular';

@Component({
    selector: 'sme-ng2-links',
    template: `
      <div class="sme-layout-absolute sme-position-inset-none sme-documentation">
          <h1>Links</h1>
          <section>
              <p>Links (anchors) in sme default to an indestinguishable apperance from other text.</p>
              <p>The reason for this is that anchor tags are primaraly used for internal navigation. .
              </p>

          </section>

          <h2>Default Behaviour</h2>
          <section>
              <p>Links (anchors) in SME default to an indestinguishable apperance from other text. They should retain this apperance when used for internal navigation or 'button' like behavior</p>

              <p>
                  Note that links are not normally used as plane text, but have some other styling applied to them, such as
                  <a class="sme-link" routerLink="/dev/styles/buttons">Buttons</a>
              </p>

              <h3>Example</h3>

              <div class="sme-documentation-example">
                  <a routerLink="/dev">Go Back to 'Landing'</a>
              </div>

              <code>&lt;a routerLink="/dev"&gt;Go Back to 'Landing'&lt;/a&gt;</code>

          </section>

          <h2>Traditional Behaviour</h2>
          <section>
              <p>The traditional link style can be restored using the 'sme-link' class. It should only be applied when the link will navigate away from the product. </p>
              <p>Traditional link styleing may also be applied when the major focus of the page will be changing or if it needs to be distinguishable (such as in a paragraph), suchs as when navigating from managing a cluster to managing a server</p>

              <h3>Example</h3>
              <div class="sme-documentation-example">
                  <a class="sme-link" href="http://www.bing.com">Go to 'Bing'</a>
              </div>
              <code>&lt;a class="sme-link" href="http://www.bing.com"&gt;Go to 'Bing'&lt;/a&gt;</code>

          </section>
      </div>
    `
})
export class LinksComponent {
    
    public static navigationTitle(appContextService: AppContextService, snapshot: ActivatedRouteSnapshot): string {
        return 'Links';
    }
}
