import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'a-avatar',
  styleUrl: 'a-avatar.css',
  shadow: true,
})
export class AAvatar {
  @Prop() label = '';
  @Prop() image;
  @Prop() size = 'm'

  render() {
    return (
      <div class={"avatar " + this.size}>
        {this.label && !this.image ? this.label.charAt(0) : <img src={this.image} />}
      </div>
    );
  }

}
