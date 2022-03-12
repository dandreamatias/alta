import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'a-input-radio',
  styleUrl: 'a-input-radio.css',
  shadow: true,
})
export class AInputRadio {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
