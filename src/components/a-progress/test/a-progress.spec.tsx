import { newSpecPage } from '@stencil/core/testing';
import { AProgress } from '../a-progress';

describe('a-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AProgress],
      html: `<a-progress></a-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <a-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-progress>
    `);
  });
});
