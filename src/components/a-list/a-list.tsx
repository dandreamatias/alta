import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'a-list',
  styleUrl: 'a-list.css',
  shadow: true,
})
export class AList {
  @Prop() items: string[] | number[] | string = [];
  @Prop() label: string;
  @Prop() selectable: boolean;
  _items = [];

  @Watch('items')
  arrayDataWatcher(newValue: string[] | number[] | string) {
    if (typeof newValue === 'string') {
      this._items = JSON.parse(newValue);
    }
    else {
      this._items = newValue;
    }
  }

  componentWillLoad() {
    this.arrayDataWatcher(this.items);
  }

  render() {
    return (
      <ul class='list'>
        {this._items.map(item => <li>{this.label ? item[this.label] : item}</li>)}
      </ul>
    );
  }

}
