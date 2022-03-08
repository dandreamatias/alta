import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'a-panel',
  styleUrl: 'a-panel.css',
  shadow: true,
})
export class APanel {
  @Prop() header: string;
  @Prop() open: boolean = true;

  render() {
    return (
      <details open={this.open}>
        <summary onClick={() => this.open = !this.open}>{this.header} {this.open ? <i class="gg-math-minus"></i> : <i class="gg-math-plus"></i>}</summary>
        <div class='content'>
          <slot></slot>
        </div>
      </details>
    );
  }

}
