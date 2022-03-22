import { newSpecPage } from '@stencil/core/testing';
import { AButtonGroup } from '../a-button-group';

describe('a-button-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AButtonGroup],
      html: `<a-button-group></a-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <a-button-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-button-group>
    `);
  });
});
