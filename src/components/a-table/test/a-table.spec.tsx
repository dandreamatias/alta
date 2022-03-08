import { newSpecPage } from '@stencil/core/testing';
import { ATable } from '../a-table';

describe('a-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ATable],
      html: `<a-table></a-table>`,
    });
    expect(page.root).toEqualHtml(`
      <a-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-table>
    `);
  });
});
