import { newE2EPage } from '@stencil/core/testing';

describe('a-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-list></a-list>');

    const element = await page.find('a-list');
    expect(element).toHaveClass('hydrated');
  });
});
