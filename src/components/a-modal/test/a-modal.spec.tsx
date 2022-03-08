import { newSpecPage } from '@stencil/core/testing';
import { AModal } from '../a-modal';

describe('a-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AModal],
      html: `<a-modal></a-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <a-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-modal>
    `);
  });
});
