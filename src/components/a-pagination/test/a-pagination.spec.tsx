import { newSpecPage } from '@stencil/core/testing';
import { APagination } from '../a-pagination';

describe('a-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [APagination],
      html: `<a-pagination></a-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <a-pagination>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-pagination>
    `);
  });
});
