import { newSpecPage } from '@stencil/core/testing';
import { AInputUpload } from '../a-input-upload';

describe('a-input-upload', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AInputUpload],
      html: `<a-input-upload></a-input-upload>`,
    });
    expect(page.root).toEqualHtml(`
      <a-input-upload>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-input-upload>
    `);
  });
});
