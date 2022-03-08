import { newSpecPage } from '@stencil/core/testing';
import { AList } from '../a-list';

describe('a-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AList],
      html: `<a-list></a-list>`,
    });
    expect(page.root).toEqualHtml(`
      <a-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-list>
    `);
  });
});
