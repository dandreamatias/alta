import { newSpecPage } from '@stencil/core/testing';
import { AInputPassword } from '../a-input-password';

describe('a-input-password', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AInputPassword],
      html: `<a-input-password></a-input-password>`,
    });
    expect(page.root).toEqualHtml(`
      <a-input-password>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-input-password>
    `);
  });
});
