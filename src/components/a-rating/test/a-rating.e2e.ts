import { newE2EPage } from '@stencil/core/testing';

describe('a-rating', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-rating></a-rating>');

    const element = await page.find('a-rating');
    expect(element).toHaveClass('hydrated');
  });
});
