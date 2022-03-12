import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'a-divider',
  styleUrl: 'a-divider.css',
  shadow: true,
})
export class ADivider {
  @Prop() position = 'left';

  render() {
    return (
      <Host>
        <div class='container'>
          <div class={"line " + this.position}>
            <span>
              <slot></slot>
            </span>
          </div>
        </div>
      </Host>
    );
  }

}
