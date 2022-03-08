import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'a-input-password',
  styleUrl: 'a-input-password.css',
  shadow: true,
})
export class AInputPassword {
  @State() type = 'password';

  render() {
    return (
      <input type={this.type} />
    );
  }

}
