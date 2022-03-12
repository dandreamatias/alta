import { newE2EPage } from '@stencil/core/testing';

describe('a-tabset', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-tabset></a-tabset>');

    const element = await page.find('a-tabset');
    expect(element).toHaveClass('hydrated');
  });
});
