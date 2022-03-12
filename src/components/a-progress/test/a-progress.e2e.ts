import { newE2EPage } from '@stencil/core/testing';

describe('a-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-progress></a-progress>');

    const element = await page.find('a-progress');
    expect(element).toHaveClass('hydrated');
  });
});
