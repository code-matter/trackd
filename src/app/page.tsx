"use client";

import BudgetEntries from "./components/Budget/BudgetEntryList";
import useWaitForHydration from "./hooks/useWaitForHydration";

export default function Home() {
  const [isHydrated, loader] = useWaitForHydration();
  if (!isHydrated) return loader;
  return (
    <main className="main">
      <h1>Entries</h1>
      <BudgetEntries />
    </main>
  );
}
