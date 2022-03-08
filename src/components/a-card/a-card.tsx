import { Component, h } from '@stencil/core';

@Component({
  tag: 'a-card',
  styleUrl: 'a-card.css',
  shadow: true,
})
export class ACard {

  render() {
    return (
      <div class='card'>
        <div class="header">
          <slot name="header"></slot>
        </div>
        <slot></slot>
      </div>
    );
  }

}
