import { newSpecPage } from '@stencil/core/testing';
import { AImg } from '../a-img';

describe('a-img', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AImg],
      html: `<a-img></a-img>`,
    });
    expect(page.root).toEqualHtml(`
      <a-img>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-img>
    `);
  });
});
