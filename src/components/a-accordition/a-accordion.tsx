import { Component, h, Prop, Element, State } from '@stencil/core';
import { AAccordionTab } from '../a-accordion-tab/a-accordion-tab';

@Component({
  tag: 'a-accordion',
  styleUrl: 'a-accordion.css',
  shadow: true,
})
export class AAccordion {
  @Prop({ mutable: true, reflect: true }) selected;
  @Element() el: HTMLElement;
  @State() tabs: AAccordionTab[] = [];

  componentWillLoad() {
    this.tabs = Array.from(this.el.childNodes)
      .filter(element => element.nodeName === 'A-ACCORDION-TAB')
      .map(t => {
        t['slot'] = String(t['index']);
        return t as unknown as AAccordionTab;
      });
    console.log(this.tabs);
  };

  private handleClick(i) {
    this.selected = String(i);
  }

  loadEL() {
    return [...this.tabs]
      .map(tab => <div>
          <div class='header' onClick={() => this.handleClick(tab.index)}>
            {tab.header}
          </div>
          {String(tab.index) === String(this.selected) && <slot name={tab['slot']}></slot>}
        </div>,
      );
  }

  render() {
    return this.loadEL();
  }

}
