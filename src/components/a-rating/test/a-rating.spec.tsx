import { newSpecPage } from '@stencil/core/testing';
import { ARating } from '../a-rating';

describe('a-rating', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ARating],
      html: `<a-rating></a-rating>`,
    });
    expect(page.root).toEqualHtml(`
      <a-rating>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-rating>
    `);
  });
});
