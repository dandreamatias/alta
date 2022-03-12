import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'a-rating',
  styleUrl: 'a-rating.css',
  shadow: true,
})
export class ARating {
  @Prop() stars = 5;
  @Prop() rate = 3

  buildRating() {
    const arr = new Array(this.stars).fill(false).map((_el, i) => (i <= this.rate));
    return arr.map((s, i) => <i onClick={() => this.rate = i} class={"gg-shape-circle " + (s ? 'selected' : '')} ></i>)
  }

  render() {
    return (
      <div>
        {this.buildRating()}
      </div>
    );
  }

}
