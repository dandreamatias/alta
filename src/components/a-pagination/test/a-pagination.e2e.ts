import { newE2EPage } from '@stencil/core/testing';

describe('a-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-pagination></a-pagination>');

    const element = await page.find('a-pagination');
    expect(element).toHaveClass('hydrated');
  });
});
