export async function getStaticProps() {
  return {
    props: {
      timestamp: new Date().toISOString(),
    }
  }
}

type Props = {
  timestamp: string;
};

export default function Page({ timestamp }: Props) {
  return (
    <main>
      <h1>Test page</h1>
      <p>Cached at the edge with Cloudflare!</p>
      <footer style={{ marginTop: '2rem', fontSize: '0.9em', color: '#888' }}>
        Page rendered at: {timestamp}
      </footer>
    </main>
  );
}
