import { Component, h } from '@stencil/core';

@Component({
  tag: 'a-input-checkbox',
  styleUrl: 'a-input-checkbox.css',
  shadow: true,
})
export class AInputCheckbox {

  render() {
    return (
      <label class="container" >
        <input type="checkbox" />
        <div class='checkbox' tabindex="1">
          <i class="gg-check"></i>
        </div>
      </label>
    );
  }

}
