import { newE2EPage } from '@stencil/core/testing';

describe('a-input-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-input-text></a-input-text>');

    const element = await page.find('a-input-text');
    expect(element).toHaveClass('hydrated');
  });
});
