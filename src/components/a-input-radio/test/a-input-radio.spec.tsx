import { newSpecPage } from '@stencil/core/testing';
import { AInputRadio } from '../a-input-radio';

describe('a-input-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AInputRadio],
      html: `<a-input-radio></a-input-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <a-input-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-input-radio>
    `);
  });
});
