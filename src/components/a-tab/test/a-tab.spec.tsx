import { newSpecPage } from '@stencil/core/testing';
import { ATab } from '../a-tab';

describe('a-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ATab],
      html: `<a-tab></a-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <a-tab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-tab>
    `);
  });
});
