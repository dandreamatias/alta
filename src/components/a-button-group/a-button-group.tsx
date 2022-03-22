import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'a-button-group',
  styleUrl: 'a-button-group.css',
  shadow: true,
})
export class AButtonGroup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
