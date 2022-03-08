import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'a-pagination',
  styleUrl: 'a-pagination.css',
  shadow: true,
})
export class APagination {
  @State() _selected = 1;
  @Prop() start: number = 1;
  @Prop() end: number;
  @Prop() range: number = 5;
  @Prop({ reflect: true, mutable: true }) selected: number = 0;

  getRange() {
    let n = 0;
    const arr = [<div class='paging' onClick={() => { if (this._selected > this.start) { this._selected-- } }}>&lt;</div>];
    for (let i = this.start; i <= (this.end ?? Infinity) && n < this.range; i++) {
      n++
      arr.push(<div tabindex="1" class={{ paging: true, selected: this._selected === i }} onClick={() => this._selected = i}>{i}</div>)
    }
    arr.push(<div class='paging' onClick={() => {
      if (this._selected < (this.end ?? this.range + this.start - 1)) {
        this._selected++
      }
    }
    }>&gt;</div>);
    return arr;
  }

  render() {
    return (
      <div class="paging-container">
        {this.getRange()}
      </div>
    );
  }

}
