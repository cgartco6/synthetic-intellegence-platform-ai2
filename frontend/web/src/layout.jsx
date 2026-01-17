export default function Layout({ children }) {
  return (
    <div style={{
      background: "#0a0f1f",
      color: "#e0e0e0",
      minHeight: "100vh",
      padding: 20
    }}>
      <h1 style={{ color: "#00f0ff" }}>SYNTHEDU</h1>
      {children}
    </div>
  );
}
