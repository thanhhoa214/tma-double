import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import DoubleItForm from "./components/DoubleItForm";
import History from "./components/History";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://thanhhoa214.github.io/tma-double/tonconnect-manifest.json"
      uiPreferences={{ theme: THEME.DARK }}
    >
      <main className="max-w-md mx-auto min-h-svh flex flex-col justify-center items-center gap-4 p-4">
        <DoubleItForm />
        <History />
      </main>

      <Toaster />
    </TonConnectUIProvider>
  );
}

export default App;
