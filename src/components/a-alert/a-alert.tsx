import { Component, h, Prop } from '@stencil/core';




@Component({
  tag: 'a-alert',
  styleUrl: 'a-alert.css',
  shadow: true,
})
export class AAlert {
  @Prop() type: 'info' | 'success' | 'warning' | 'danger';

  render() {
    return (
      <div class={'message ' + this.type ?? ''}>
        <slot></slot>
      </div>
    );
  }

}
