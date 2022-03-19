import { newE2EPage } from '@stencil/core/testing';

describe('a-accordition', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-accordition></a-accordition>');

    const element = await page.find('a-accordition');
    expect(element).toHaveClass('hydrated');
  });
});
