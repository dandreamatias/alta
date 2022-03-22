import { newE2EPage } from '@stencil/core/testing';

describe('a-button-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-button-group></a-button-group>');

    const element = await page.find('a-button-group');
    expect(element).toHaveClass('hydrated');
  });
});
