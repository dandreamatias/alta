import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'a-toast',
  styleUrl: 'a-toast.css',
  shadow: true,
})
export class AToast {
  @Prop() message: {
    text: string;
    title: string;
    type: string;
    closable: boolean;
    life: number
  };



  render() {
    return this.message && 
    <div class={'toast ' + this.message.type ?? 'info'}>
      <h3>{this.message.title}  {this.message.closable ? <i onClick={() => this.message = undefined} class="gg-close"></i> : ''}</h3>
      {this.message.text}
    </div>;
  }

}
