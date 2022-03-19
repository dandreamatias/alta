import { newSpecPage } from '@stencil/core/testing';
import { AAccordion } from '../a-accordion';

describe('a-accordition', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AAccordion],
      html: `<a-accordition></a-accordition>`,
    });
    expect(page.root).toEqualHtml(`
      <a-accordition>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-accordition>
    `);
  });
});
