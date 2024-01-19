// import { sql } from "@vercel/postgres";
import { Button } from "antd";

export default function Home() {
  // const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;
  return (
    <main className="main">
      <h1>hello</h1>
      <Button>OK</Button>
    </main>
  );
}
