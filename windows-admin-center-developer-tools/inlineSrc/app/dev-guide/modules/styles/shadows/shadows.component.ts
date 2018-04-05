import { Component } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AppContextService } from '@msft-sme/shell/angular';

@Component({
    selector: 'sme-ng2-shadows',
    template: `
      <div class="sme-layout-absolute sme-position-inset-none sme-documentation">
          <h1>Shadows</h1>
          <section>
              <p>Shadows are used sparingly in SME. They should only be used in a few special cases.</p>
              <p>In general, these cases are covered by controls that you can use. However if you are not using angular you may need to use these classes to get the same look and feel.</p>
          </section>

          <h2>Classes</h2>
          <section>
              <table>
                  <thead>
                      <tr>
                          <th>Class</th>
                          <th>Effect</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>.sme-shadow-dropdown</td>
                          <td>Applies a dropdown shadow on the bottom-right of an element</td>
                      </tr>
                      <tr>
                          <td>.sme-shadow-action-pane</td>
                          <td>Applies an action pane shadow to the left of an element</td>
                      </tr>
                      <tr>
                          <td>.sme-shadow-dialog</td>
                          <td>Applies an dialog shadow to all sides of an element</td>
                      </tr>
                      <tr>
                          <td>.sme-shadow-scrolled-content</td>
                          <td>Applies an scrolled content shadow to the inner-top of an element</td>
                      </tr>
                  </tbody>
              </table>
          </section>
      </div>
    `
})
export class ShadowsComponent {

    public static navigationTitle(appContextService: AppContextService, snapshot: ActivatedRouteSnapshot): string {
        return 'Shadows';
    }
}
