import React from 'react';
import { AuthRoot } from './features/auth/auth-root';
import { MainDataTimer } from './features/main-data-control/main-data-timer';
import { NavHeader } from './features/navigation/nav-header';
import { PageRouter } from './features/navigation/page-router';

export function App(): JSX.Element {
  return (
    <div>
      <AuthRoot />
      <NavHeader />
      <PageRouter />
      <MainDataTimer />
    </div>
  );
}
