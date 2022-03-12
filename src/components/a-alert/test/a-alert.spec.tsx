import { newSpecPage } from '@stencil/core/testing';
import { AAlert } from '../a-alert';

describe('a-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AAlert],
      html: `<a-alert></a-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <a-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-alert>
    `);
  });
});
