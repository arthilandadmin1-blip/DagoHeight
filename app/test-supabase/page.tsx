import { supabase } from "@/lib/supabase";

export default async function TestSupabase() {
  const { data, error } = await supabase
    .from("properties")
    .select("*");

  if (error) {
    return (
      <main style={{ padding: "40px" }}>
        <h1>Supabase Error</h1>
        <pre>{error.message}</pre>
      </main>
    );
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Supabase Connected ✅</h1>

      <p>Jumlah property: {data.length}</p>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}