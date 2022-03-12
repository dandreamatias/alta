import { newE2EPage } from '@stencil/core/testing';

describe('a-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-dropdown></a-dropdown>');

    const element = await page.find('a-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
