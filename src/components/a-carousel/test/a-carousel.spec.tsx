import { newSpecPage } from '@stencil/core/testing';
import { ACarousel } from '../a-carousel';

describe('a-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ACarousel],
      html: `<a-carousel></a-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <a-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-carousel>
    `);
  });
});
