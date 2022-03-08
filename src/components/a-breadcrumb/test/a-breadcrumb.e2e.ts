import { newE2EPage } from '@stencil/core/testing';

describe('a-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-breadcrumb></a-breadcrumb>');

    const element = await page.find('a-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
