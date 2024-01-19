import BudgetEntry from "./components/Budget/BudgetEntry";
import BudgetEntries from "./components/Budget/BudgetEntryList";
import { getBudgetEntries } from "./services/BudgetEntries";

export default async function Home() {
  const budgetEntries = await getBudgetEntries();

  return (
    <main className="main">
      <h1>Entries</h1>
      <BudgetEntries budgetEntries={budgetEntries} />
      <BudgetEntry />
    </main>
  );
}
