import React from 'react';
import { render } from '@testing-library/react';
import { vi } from 'vitest';

vi.mock('./perform', () => ({
  default: { initialize: vi.fn(), play: vi.fn(), stop: vi.fn() },
}));

import Index from './pages/index';

it('renders without crashing', () => {
  render(<Index />);
});
