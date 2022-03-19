import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'a-card',
  styleUrl: 'a-card.css',
  shadow: true,
})
export class ACard {
  hasHeader: boolean;
  @Element() el: HTMLElement;

  componentWillLoad() {
    this.hasHeader = Array.from(this.el.childNodes)
      .some(element => element['slot'] === 'header');
  };

  render() {
    return (
      <div class='card'>
        {this.hasHeader && <div class='header'>
          <slot name='header'></slot>
        </div>}
        <slot></slot>
      </div>
    );
  }

}
