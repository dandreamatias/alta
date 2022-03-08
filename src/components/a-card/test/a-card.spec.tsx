import { newSpecPage } from '@stencil/core/testing';
import { ACard } from '../a-card';

describe('a-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ACard],
      html: `<a-card></a-card>`,
    });
    expect(page.root).toEqualHtml(`
      <a-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-card>
    `);
  });
});
