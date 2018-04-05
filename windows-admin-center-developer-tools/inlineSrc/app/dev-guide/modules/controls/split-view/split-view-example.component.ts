import { Component } from '@angular/core';

@Component({
    selector: 'sme-split-view-example',
    template: `
      <sme-split-view #sv>
          <sme-split-view-pane>
              <button (click)="sv.togglePane()">Click me to toggle the pane</button>
              <p>I'm the pane. The pane is the area that grows/shrinks.</p>
              <p>The pane takes as much room as it needs.</p>
              <p><b>isExpanded</b>: {{sv.isExpanded}}</p>
              <p *ngIf="sv.isExpanded">You can only see this because the pane is expanded. Because this string is longer, you'll see the pane grow when I appear.
              </p>
          </sme-split-view-pane>

          <sme-split-view-content>
              <div class="sme-layout-absolute- sme-position-inset-none">
                  <p>I'm the content. I take up whatever room is left over.</p>
              </div>
          </sme-split-view-content>
      </sme-split-view>
    `
})
export class SplitViewExampleComponent { }
