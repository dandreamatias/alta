import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'a-avatar',
  styleUrl: 'a-avatar.css',
  shadow: true,
})
export class AAvatar {
  @Prop() label = ''
  @Prop() size = 'm'

  render() {
    return (
      <div class={"avatar " + this.size}>
        {this.label && this.label}
      </div>
    );
  }

}
