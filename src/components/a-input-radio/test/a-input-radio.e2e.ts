import { newE2EPage } from '@stencil/core/testing';

describe('a-input-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-input-radio></a-input-radio>');

    const element = await page.find('a-input-radio');
    expect(element).toHaveClass('hydrated');
  });
});
