import { newSpecPage } from '@stencil/core/testing';
import { ATabset } from '../a-tabset';

describe('a-tabset', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ATabset],
      html: `<a-tabset></a-tabset>`,
    });
    expect(page.root).toEqualHtml(`
      <a-tabset>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-tabset>
    `);
  });
});
