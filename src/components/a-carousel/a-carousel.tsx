import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'a-carousel',
  styleUrl: 'a-carousel.css',
  shadow: true,
})
export class ACarousel {
  @State() index = 0;
  @Prop() images: string[] = [];

  render() {
    return (
      <div class='container' style={{ backgroundImage: `url(${this.images[this.index]})` }}>
        <div class='btn' onClick={() => { if (this.index > 0) this.index-- }}>
          <i class="gg-chevron-left"></i>
        </div>
        <div  class='btn' onClick={() => {
            if (this.index < this.images.length - 1) {
              this.index++
            } else {
              this.index = 0
            }
          }}>
          <i class="gg-chevron-right" ></i>
        </div>
        <div class='position'>
          {this.images.map((_, index) => <div onClick={() => this.index = index} class={{current: index === this.index}}></div>)}
          </div>
      </div>
    );
  }

}
