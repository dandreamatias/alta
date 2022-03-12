import { newSpecPage } from '@stencil/core/testing';
import { AInputText } from '../a-input-text';

describe('a-input-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AInputText],
      html: `<a-input-text></a-input-text>`,
    });
    expect(page.root).toEqualHtml(`
      <a-input-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-input-text>
    `);
  });
});
