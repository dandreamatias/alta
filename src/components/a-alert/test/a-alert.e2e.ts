import { newE2EPage } from '@stencil/core/testing';

describe('a-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-alert></a-alert>');

    const element = await page.find('a-alert');
    expect(element).toHaveClass('hydrated');
  });
});
