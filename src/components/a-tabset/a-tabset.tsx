import { Component, Host, Element, h, State, Prop } from '@stencil/core';
import { ATab } from '../a-tab/a-tab';

@Component({
  tag: 'a-tabset',
  styleUrl: 'a-tabset.css',
  shadow: true,
})
export class ATabset {
  @Prop({ mutable: true, reflect: true }) selected: string = '0';
  @Element() el: HTMLElement;
  @State() tabs: ATab[] = [];

  componentWillLoad() {
    this.tabs = Array.from(this.el.childNodes).filter(element => element.nodeName === 'A-TAB').map((t) => {
      t['slot'] = t['index']
      return t as unknown as ATab
    });
  };

  render() {
    return (
      <Host>
        <div class="tab">
          {this.tabs.map((tab) => <div
            class={{ selected: this.selected === tab.index, 'tab-section': true }}
            onClick={() => this.selected = tab.index}>{tab.header}
          </div>)}
        </div>
        {this.tabs.map((tab) => <div class={{ content: true, none: this.selected !== tab.index }}>
          <slot name={tab.index}></slot>
        </div>)}
      </Host>

    );
  }

}
