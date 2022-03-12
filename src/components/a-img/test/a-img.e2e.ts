import { newE2EPage } from '@stencil/core/testing';

describe('a-img', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-img></a-img>');

    const element = await page.find('a-img');
    expect(element).toHaveClass('hydrated');
  });
});
