import { newE2EPage } from '@stencil/core/testing';

describe('a-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-card></a-card>');

    const element = await page.find('a-card');
    expect(element).toHaveClass('hydrated');
  });
});
