import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'a-loader',
  styleUrl: 'a-loader.css',
  shadow: true,
})
export class ALoader {
  @Prop() type: string;

  render() {
    return (
      <Host>

        {this.type === 'dual-ring' && < div class='dual-ring'></div>}
        {this.type === 'ripple' && <div class='ripple'>
          <div></div>
          <div></div>
        </div>}
      </Host>
    );
  }

}
