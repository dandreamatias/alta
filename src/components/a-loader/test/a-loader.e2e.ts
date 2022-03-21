import { newE2EPage } from '@stencil/core/testing';

describe('a-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-loader></a-loader>');

    const element = await page.find('a-loader');
    expect(element).toHaveClass('hydrated');
  });
});
