import { newE2EPage } from '@stencil/core/testing';

describe('a-accordion-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-accordion-tab></a-accordion-tab>');

    const element = await page.find('a-accordion-tab');
    expect(element).toHaveClass('hydrated');
  });
});
