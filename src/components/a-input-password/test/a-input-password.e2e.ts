import { newE2EPage } from '@stencil/core/testing';

describe('a-input-password', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-input-password></a-input-password>');

    const element = await page.find('a-input-password');
    expect(element).toHaveClass('hydrated');
  });
});
