import { newE2EPage } from '@stencil/core/testing';

describe('a-input-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-input-checkbox></a-input-checkbox>');

    const element = await page.find('a-input-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
