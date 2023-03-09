// @ts-check
import { test, expect } from '@playwright/test';

const LOCAL_HOST_URL= "http://localhost:5173/"
const CATS_IMG_HTTPS_URL = `https://cataas.com/`

test('test end to end', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);

  const text = await page.getByRole("paragraph")
  const img = await page.getByRole("img")

  const textContent = await text.textContent()
  const imgSrc = await img.getAttribute("src")
  console.log(textContent, imgSrc);
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc?.startsWith(CATS_IMG_HTTPS_URL)).toBeTruthy()
});


