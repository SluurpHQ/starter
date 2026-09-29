export const data = { title: "My Sluurp app" };

export default function Home() {
  return (
    <main class="mx-auto grid min-h-screen max-w-xl content-center gap-4 p-8">
      <h1 class="text-4xl font-bold tracking-tight">It works.</h1>
      <p class="text-muted-foreground">
        This page is <code>app/routes/index.tsx</code>. Change it, add collections in the admin at <a class="underline" href="/_/">/_/</a>, and read the docs at{" "}
        <a class="underline" href="https://sluurp.org/docs">sluurp.org</a>.
      </p>
    </main>
  );
}
