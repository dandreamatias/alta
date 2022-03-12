import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'a-input-upload',
  styleUrl: 'a-input-upload.css',
  shadow: true,
})
export class AInputUpload {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
