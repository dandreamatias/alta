import { newE2EPage } from '@stencil/core/testing';

describe('a-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-panel></a-panel>');

    const element = await page.find('a-panel');
    expect(element).toHaveClass('hydrated');
  });
});
