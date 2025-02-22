'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, AppStore, persistor } from '@/store/store';
import LoadingSpinner from './components/ui/LoadingSpinner';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = store;
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate
        loading={<LoadingSpinner width={360} height={270} className="pt-[20rem] md:pt-[40rem]" />}
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
