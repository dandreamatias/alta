import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'a-accordion-tab',
  styleUrl: 'a-accordion-tab.css',
  shadow: true,
})
export class AAccordionTab {
  @Prop() header: string;
  @Prop() index: number;

  render() {
    return (
        <div class='content'>
          <slot></slot>
        </div>
    );
  }

}
