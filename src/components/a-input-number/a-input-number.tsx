import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'a-input-number',
  styleUrl: 'a-input-number.css',
  shadow: true,
})
export class AInputNumber {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
