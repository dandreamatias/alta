import { newE2EPage } from '@stencil/core/testing';

describe('a-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-divider></a-divider>');

    const element = await page.find('a-divider');
    expect(element).toHaveClass('hydrated');
  });
});
