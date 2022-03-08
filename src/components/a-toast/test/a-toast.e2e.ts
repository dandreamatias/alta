import { newE2EPage } from '@stencil/core/testing';

describe('a-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-toast></a-toast>');

    const element = await page.find('a-toast');
    expect(element).toHaveClass('hydrated');
  });
});
