import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'a-tab',
  styleUrl: 'a-tab.css',
  shadow: true,
})
export class ATab {
  @Prop() header: string;
  @Prop() index: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
