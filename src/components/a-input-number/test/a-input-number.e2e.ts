import { newE2EPage } from '@stencil/core/testing';

describe('a-input-number', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-input-number></a-input-number>');

    const element = await page.find('a-input-number');
    expect(element).toHaveClass('hydrated');
  });
});
