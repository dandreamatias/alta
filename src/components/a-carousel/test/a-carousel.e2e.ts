import { newE2EPage } from '@stencil/core/testing';

describe('a-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-carousel></a-carousel>');

    const element = await page.find('a-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
