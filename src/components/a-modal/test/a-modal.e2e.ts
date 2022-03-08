import { newE2EPage } from '@stencil/core/testing';

describe('a-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-modal></a-modal>');

    const element = await page.find('a-modal');
    expect(element).toHaveClass('hydrated');
  });
});
