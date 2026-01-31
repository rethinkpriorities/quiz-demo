import '@testing-library/jest-dom';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock window.confirm for tests
globalThis.confirm = vi.fn(() => true);

// Mock window.scrollTo (not implemented in jsdom)
window.scrollTo = vi.fn();
