import { Component, h, Prop, State, EventEmitter, Event, } from '@stencil/core';

@Component({
  tag: 'a-input-password',
  styleUrl: 'a-input-password.css',
  shadow: true,
})
export class AInputPassword {
  @State() type = 'password';
  @Prop({ reflect: true, mutable: true }) value: string;
  @Event() valueChanged: EventEmitter<string>;
  
  private onInputChangeValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(this.value);
  }

  render() {
    return (
      <div>
        <input type={this.type} value={this.value} onInput={(e) => this.onInputChangeValue(e)} />
        <button 
        onClick={() => this.type = this.type === 'password' ? 'text' : 'password'}>
          {this.type === 'password' ? <i class="gg-eye"></i> : <i class="gg-eye-alt"></i>}
          </button>
      </div>

    );
  }

}
