const { test, expect, chromium } = require("@playwright/test");
const {login, password} = require ("../user");

test("test success authorization", async ({ page }) => {

  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(login);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(password);
  await page.getByTestId('login-submit-btn' , {timeout: 100000}).click();
  await page.getByRole('heading', { name: 'Моё обучение' }).click();

});

test("test not success authorization", async ({ page }) => {

  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill("login");
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill("password");
  await page.getByTestId('login-submit-btn').click();
  await page.locator("data-testid=login-error-hint").isVisible;

});