import React, { useState } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { UnitPage } from './pages/UnitPage';
import { ErrorBoundary } from './utils/errorBoundary';
import type { Unit } from './types';

function App() {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  return (
    <ErrorBoundary>
      <MainLayout>
        {selectedUnit ? (
          <UnitPage
            unit={selectedUnit}
            onBack={() => setSelectedUnit(null)}
          />
        ) : (
          <HomePage onUnitSelect={setSelectedUnit} />
        )}
      </MainLayout>
    </ErrorBoundary>
  );
}

export default App;