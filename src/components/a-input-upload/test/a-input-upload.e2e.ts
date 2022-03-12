import { newE2EPage } from '@stencil/core/testing';

describe('a-input-upload', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-input-upload></a-input-upload>');

    const element = await page.find('a-input-upload');
    expect(element).toHaveClass('hydrated');
  });
});
