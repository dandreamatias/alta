import { newSpecPage } from '@stencil/core/testing';
import { ABreadcrumb } from '../a-breadcrumb';

describe('a-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ABreadcrumb],
      html: `<a-breadcrumb></a-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <a-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-breadcrumb>
    `);
  });
});
