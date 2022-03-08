import { newE2EPage } from '@stencil/core/testing';

describe('a-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-avatar></a-avatar>');

    const element = await page.find('a-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
