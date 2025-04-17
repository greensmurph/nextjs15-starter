export default function Page() {
  const buildTime = new Date().toISOString();

  return (
    <main>
      <h1>Test page</h1>
      <footer style={{ marginTop: '2rem', fontSize: '0.9em', color: '#888' }}>
        Page rendered at: {buildTime}
      </footer>
    </main>
  );
}
