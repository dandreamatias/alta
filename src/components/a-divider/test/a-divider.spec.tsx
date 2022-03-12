import { newSpecPage } from '@stencil/core/testing';
import { ADivider } from '../a-divider';

describe('a-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ADivider],
      html: `<a-divider></a-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <a-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-divider>
    `);
  });
});
