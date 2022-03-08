import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'a-breadcrumb',
  styleUrl: 'a-breadcrumb.css',
  shadow: true,
})
export class ABreadcrumb {
  @Prop() items: string[] | number[] | string = [];
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
      <div class='breadcrumb'>
        {this._items.map(item => <a class='a' onClick={() => console.log(item)}>{item.label}</a>)}
      </div>
    );
  }

}
