import BudgetEntries from "./components/Budget/BudgetEntry";
import { getBudgetEntries } from "./services/BudgetEntries";

export default async function Home() {
  const budgetEntries = await getBudgetEntries();

  return (
    <main className="main">
      <h1>Entries</h1>
      <BudgetEntries budgetEntries={budgetEntries} />
    </main>
  );
}
