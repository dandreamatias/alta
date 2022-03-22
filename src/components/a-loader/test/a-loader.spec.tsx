import { newSpecPage } from '@stencil/core/testing';
import { ALoader } from '../a-loader';

describe('a-loader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ALoader],
      html: `<a-loader></a-loader>`,
    });
    expect(page.root).toEqualHtml(`
      <a-loader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-loader>
    `);
  });
});
