import { newE2EPage } from '@stencil/core/testing';

describe('a-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-table></a-table>');

    const element = await page.find('a-table');
    expect(element).toHaveClass('hydrated');
  });
});
