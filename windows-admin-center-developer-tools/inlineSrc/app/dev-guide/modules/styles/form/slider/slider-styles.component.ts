import { Component } from '@angular/core';

@Component({
    selector: 'sme-ng2-form-styles-slider',
    template: `
      <div class="sme-layout-absolute sme-position-inset-none sme-documentation">
          <p>
              <i>Sliders</i>
              <span>let the user set a value in a given range by tapping—or scrubbing back and forth—on a track. 
                  It provides a visual indication of adjustable content, as well as the current setting in the total range of content. (Ex. adjusting brightness).</span>
          </p>
          <p>
              <span>Use a</span>
              <i>slider</i>
              <span>when you want users to be able to set defined, contiguous values (such as volume) or a range of discrete values (such as screen resolution settings). A</span>
              <i>slider</i>
              <span>is a good choice when you know that users think of the value as a relative quantity, not a numeric value. For example, 
                  users think about setting their audio volume to low or medium—not about setting the value to 2 or 5. </span>
          </p>
          <p>
              <span>Use a</span>
              <i>slider</i>
              <span> if the user would benefit from instant feedback on the effect of setting changes. 
                      For example, users can choose a color more easily by immediately seeing the effect of changes to hue, saturation, or luminosity values. 
                      Only a step range of 1 is supported.
              </span>
          </p>
          <h2>Horizontal Slider</h2>
          <p>Slider is displayed horizontally and can be moved to the right or left.</p>
          <input type="range" value="50" max="100" step="1">
          <code>&lt;input type="range" value="50" max="100" step="1"&gt;</code>
          <h2>Vertical Slider</h2>
          <p>Slider is displayed vertically and can be moved to the top or bottom.</p>
          <h3>Coming Soon...</h3>
          <!-- <input type="range" class="sme-slider sme-slider-vertical" value="50" max="100" step="1"> -->
      </div>
    `
})
export class SliderStylesComponent { }
