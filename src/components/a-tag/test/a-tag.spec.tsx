import { newSpecPage } from '@stencil/core/testing';
import { ATag } from '../a-tag';

describe('a-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ATag],
      html: `<a-tag></a-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <a-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-tag>
    `);
  });
});
