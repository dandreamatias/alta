import { newE2EPage } from '@stencil/core/testing';

describe('a-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-input></a-input>');

    const element = await page.find('a-input');
    expect(element).toHaveClass('hydrated');
  });
});
