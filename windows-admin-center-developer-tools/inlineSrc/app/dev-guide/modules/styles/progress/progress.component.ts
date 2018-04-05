import { Component } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AppContextService } from '@msft-sme/shell/angular';

@Component({
    selector: 'sme-ng2-progress',
    template: `
      <div class="sme-layout-absolute sme-position-inset-none sme-documentation">
          <h1>Progress</h1>
          <p>The Progress control is a css only control you can use to indicate that an element is processing or loading.</p>
          <p>
              <span>In general, use an sme control such as </span>
              <a class="sme-link" routerLink="/dev/controls/loading-wheel">sme-loading-wheel</a>
              <span>before using these classes directly.</span>
          </p>

          <h2>Determinite Progress</h2>
          <progress class="sme-progress" role="progressbar" max="100" value="80" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" tabindex="0" aria-label="determinate progress bar"></progress>

          <p>Determinate progress should be used when you know when progress of a process is measurable.</p>
          <p>This version of progress uses the progress element for maximum accesibility. Here is an example of how to add this element in code:</p>

          <code>&lt;progress class="sme-progress" role="progressbar" max="100" value="80" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" tabindex="0" aria-label="determinate progress bar"&gt;&lt;/progress&gt;</code>

          <h2>Indeterminite Progress (Regional)</h2>

          <div class="sme-progress sme-progress-indeterminate-regional" role="progressbar" aria-valuetext="Loading..." tabindex="0" aria-label="indeterminate regional progress bar">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>

          <p>Indeterminite regional progress should be used when a large region of the page is processing and you do not know when it will complete.</p>
          <p>This version of progress cannot use the progress element so be sure to use role="progressbar" for the best accessability. Here is an example of how to add this element in code:</p>

          <code>&lt;div class="sme-progress sme-progress-indeterminate-regional" role="progressbar" aria-valuetext="Loading..." tabindex="0" aria-label="indeterminate regional progress bar"&gt;
          &lt;span&gt;&lt;/span&gt;
          &lt;span&gt;&lt;/span&gt;
          &lt;span&gt;&lt;/span&gt;
          &lt;span&gt;&lt;/span&gt;
          &lt;span&gt;&lt;/span&gt;
      &lt;/div&gt;</code>

          <h2>Indeterminite Progress (Local)</h2>

          <div class="sme-progress sme-progress-indeterminate-local" role="progressbar" aria-valuetext="Loading..." tabindex="0" aria-label="indeterminate local small progress bar">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>

          <p>Indeterminite local progress should be used when a small region of the page is processing and you do not know when it will complete.</p>
          <p>This version of progress cannot use the progress element so be sure to use role="progressbar" for the best accessability. Here is an example of how to add this element in code:</p>

          <code>&lt;div class="sme-progress sme-progress-indeterminate-local" role="progressbar" aria-valuetext="Loading..." tabindex="0" aria-label="indeterminate local small progress bar"&gt;
          &lt;span&gt;&lt;/span&gt;
          &lt;span&gt;&lt;/span&gt;
          &lt;span&gt;&lt;/span&gt;
          &lt;span&gt;&lt;/span&gt;
          &lt;span&gt;&lt;/span&gt;
      &lt;/div&gt;</code>


          <h3>Dot Size</h3>
          <p>The size of the progress dots in an indeterminite local progress can be controled with the following class structure:</p>
          <code>.sme-progress-[size]</code>

          <p>The defualt value for '[size]' is 'medium' but 'small' and 'large' are also available.</p>
      </div>
    `
})
export class ProgressComponent {
    
    public static navigationTitle(appContextService: AppContextService, snapshot: ActivatedRouteSnapshot): string {
        return 'Progress';
    }
}
