import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'a-img',
  styleUrl: 'a-img.css',
  shadow: true,
})
export class AImg {
  @State() fullScreen = false;
  @Prop() preview: string;
  @Prop() full: string;
  @Prop() alt;


  render() {
    return (
      <Host>
        <img class='preview' onClick={() => this.fullScreen = true} src={this.preview} alt={this.alt} />
        {this.fullScreen && <div onClick={() => this.fullScreen = false} class='container'>
          <img src={this.full} alt={this.alt} />
        </div>}
      </Host>
    );
  }

}
