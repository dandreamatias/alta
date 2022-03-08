import { newSpecPage } from '@stencil/core/testing';
import { AAvatar } from '../a-avatar';

describe('a-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AAvatar],
      html: `<a-avatar></a-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <a-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-avatar>
    `);
  });
});
