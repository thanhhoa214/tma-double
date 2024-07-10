import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import DoubleItForm from "./components/DoubleItForm";
import History from "./components/History";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://thanhhoa214.github.io/tma-double/tonconnect-manifest.json"
      uiPreferences={{ theme: THEME.DARK, borderRadius: "s" }}
    >
      <main className="max-w-md mx-auto min-h-svh flex flex-col items-center gap-4 p-4">
        <Navbar />
        <DoubleItForm />
        <History />
      </main>

      <Toaster />
    </TonConnectUIProvider>
  );
}

export default App;
