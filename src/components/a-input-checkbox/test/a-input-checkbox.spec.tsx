import { newSpecPage } from '@stencil/core/testing';
import { AInputCheckbox } from '../a-input-checkbox';

describe('a-input-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AInputCheckbox],
      html: `<a-input-checkbox></a-input-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <a-input-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-input-checkbox>
    `);
  });
});
