import { newSpecPage } from '@stencil/core/testing';
import { AAccordionTab } from '../a-accordion-tab';

describe('a-accordion-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AAccordionTab],
      html: `<a-accordion-tab></a-accordion-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <a-accordion-tab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-accordion-tab>
    `);
  });
});
