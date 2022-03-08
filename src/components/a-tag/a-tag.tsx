import { Component, h } from '@stencil/core';

@Component({
  tag: 'a-tag',
  styleUrl: 'a-tag.css',
  shadow: true,
})
export class ATag {

  render() {
    return (
      <div class="tag">
        <slot></slot>
      </div>
    );
  }
}
