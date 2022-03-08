import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'a-button',
  styleUrl: 'a-button.css',
  shadow: true,
})
export class AButton {
  @Prop() text: string;
  @Prop() type: 'text' | 'outline';

  render() {
    return <button class={{ button: true, text: this.type === 'text', outline: this.type === 'outline' }}>{this.text}</button>;
  }

}
