import { Component, EventEmitter, Event, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'a-input',
  styleUrl: 'a-input.css',
  shadow: true,
})
export class AInput {
  @Prop({ reflect: true, mutable: true }) label: string;
  @Prop({ reflect: true, mutable: true }) value: string;
  @Prop() type = 'text';
  @Event() valueChanged: EventEmitter<string>;
  
  private onInputChangeValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(this.value);
  }

  render() {
    return <Host>
      {this.label && <label>{this.label}</label>}
      <input type={this.type} value={this.value} onInput={(e) => this.onInputChangeValue(e)} />
    </Host>
  }

}
