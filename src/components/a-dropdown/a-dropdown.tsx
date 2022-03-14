import { Component, h, Prop, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'a-dropdown',
  styleUrl: 'a-dropdown.css',
  shadow: true,
})
export class ADropdown {
  @Prop() showclear = false;
  @Prop() options: any[] | string = [];
  @Prop({ reflect: true, mutable: true }) selected: any;
  @Prop() label = 'label';
  @Prop() value = 'value';
  @Prop() placeholder: string;
  @Event() selectChanged: EventEmitter<string>;
  _items = [];

  @Watch('options')
  arrayDataWatcher(newValue: string[] | number[] | string) {
    if (typeof newValue === 'string') {
      this._items = JSON.parse(newValue);
    }
    else {
      this._items = newValue;
    }
  }

  private onSelect(item: any) {
    (document.activeElement as any).blur()
    this.selected = item;
    this.selectChanged.emit(this.selected);
  }

  componentWillLoad() {
    this.arrayDataWatcher(this.options);
  }

  render() {
    return (
      <div class='dropdown'>
        {this.selected && this.showclear && <i onClick={() => this.onSelect(undefined)}
          class="gg-close-o"></i>}
        <button>
          {this.selected ? this.selected[this.label] : this.placeholder}
          <i class="gg-chevron-down"></i>
          <ul class="list">
            {this._items.map(item => <li tabindex="1" onClick={() => this.onSelect(item)}>{item[this.label]}</li>)}
          </ul>
        </button>
      </div>

    );
  }

}
