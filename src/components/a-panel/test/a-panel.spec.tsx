import { newSpecPage } from '@stencil/core/testing';
import { APanel } from '../a-panel';

describe('a-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [APanel],
      html: `<a-panel></a-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <a-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-panel>
    `);
  });
});
