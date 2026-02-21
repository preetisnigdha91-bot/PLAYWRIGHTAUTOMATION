// @ts-check
import { chromium, defineConfig, devices, expect } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
   reporter: 'html',
   timeout: 40_000,
   expect:
   {timeout:40_000},
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  
  use: {
       browserName : "chromium",
  headless: false
 
}
});

