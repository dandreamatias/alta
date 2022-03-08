import { newSpecPage } from '@stencil/core/testing';
import { AToast } from '../a-toast';

describe('a-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AToast],
      html: `<a-toast></a-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <a-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-toast>
    `);
  });
});
