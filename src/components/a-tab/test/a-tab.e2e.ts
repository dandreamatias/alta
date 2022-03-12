import { newE2EPage } from '@stencil/core/testing';

describe('a-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-tab></a-tab>');

    const element = await page.find('a-tab');
    expect(element).toHaveClass('hydrated');
  });
});
