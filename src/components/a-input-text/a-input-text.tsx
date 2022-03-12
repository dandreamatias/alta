import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'a-input-text',
  styleUrl: 'a-input-text.css',
  shadow: true,
})
export class AInputText {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
