import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'a-modal',
  styleUrl: 'a-modal.css',
  shadow: true,
})
export class AModal {
  @Prop() visible: boolean;
  @Watch('visible')

  render() {
    return (
      <Host>
        <div class={{ wrapper: true, show: this.visible }}>
          <div class="modal">
            <div class='header'>
              <slot name="header"></slot>
            </div>
            <slot name="body"></slot>
            <div class="footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
