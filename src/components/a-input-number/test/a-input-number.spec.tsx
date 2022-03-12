import { newSpecPage } from '@stencil/core/testing';
import { AInputNumber } from '../a-input-number';

describe('a-input-number', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AInputNumber],
      html: `<a-input-number></a-input-number>`,
    });
    expect(page.root).toEqualHtml(`
      <a-input-number>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-input-number>
    `);
  });
});
