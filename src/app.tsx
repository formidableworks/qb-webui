import React from 'react';
import { AuthRoot } from './features/auth/auth-root';
import { NavShell } from './features/navigation/nav-shell';

export function App(): JSX.Element {
  return (
    <>
      <AuthRoot />
      <NavShell />
    </>
  );
}
