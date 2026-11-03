import { LineChart } from "lucide-react";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        margin: 0,
        background: "#0b0f14",
        color: "#e6edf3",
        fontFamily: "system-ui, -apple-system, sans-serif",
        textAlign: "center",
        padding: "1.5rem",
      }}
    >
      <LineChart size={40} color="#22c55e" aria-hidden="true" />
      <h1 style={{ margin: 0, fontSize: "2rem" }}>StockTrade Lab</h1>
      <p style={{ margin: 0, color: "#9aa4af", maxWidth: "32rem" }}>
        A professional stock trading platform with an interactive Operating System Simulation Laboratory.
      </p>
    </main>
  );
}
