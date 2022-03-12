import { newSpecPage } from '@stencil/core/testing';
import { ADropdown } from '../a-dropdown';

describe('a-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ADropdown],
      html: `<a-dropdown></a-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <a-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-dropdown>
    `);
  });
});
