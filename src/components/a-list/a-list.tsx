import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'a-list',
  styleUrl: 'a-list.css',
  shadow: true,
})
export class AList {
  @Prop() items: string[] | number[] | string = [];
  @Prop() editable: string[] | number[] | string = [];
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
        {this._items.map(item => <li >{item} <div class='icon-container'><i class="gg-more-vertical-alt"></i></div></li>)}
      </ul>
    );
  }

}
