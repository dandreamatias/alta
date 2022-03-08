import { newE2EPage } from '@stencil/core/testing';

describe('a-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-tag></a-tag>');

    const element = await page.find('a-tag');
    expect(element).toHaveClass('hydrated');
  });
});
