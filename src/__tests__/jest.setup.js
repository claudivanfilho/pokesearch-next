// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import "whatwg-fetch";

import { setupServer } from "msw/node";

import { defaultHandlers } from "./mockServiceWorker";

export const mockedServer = setupServer(...defaultHandlers);

beforeAll(() => mockedServer.listen());
afterEach(() => mockedServer.resetHandlers());
afterAll(() => mockedServer.close());
