import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'a-progress',
  styleUrl: 'a-progress.css',
  shadow: true,
})
export class AProgress {
  @Prop() value: number;
  @Prop() start = 0;
  @Prop() end = 100;
  @Prop() percentage: boolean;

  calcWidth(): number {
    const range = this.end - this.start;
    return 100 / range * (this.value ?? 0);
  }

  render() {
    return (
      <div class='container'>
        <div class='bar' style={{ width: `${this.calcWidth()}%` }}>{this.percentage && <label class='percentage'>{`${this.calcWidth()}%`}</label>}</div>
      </div>
    );
  }

}
