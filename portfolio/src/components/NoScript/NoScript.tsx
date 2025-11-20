/**
 * NoScript Component
 * Simple fallback message for users with JavaScript disabled
 */

export default function NoScript() {
  return (
    <noscript>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#0F1724",
          color: "#F8FAFC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "2rem",
          zIndex: 9999,
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Samuel Melo - Full Stack Developer</h1>
        <p style={{ fontSize: "1.125rem", marginBottom: "2rem" }}>
          This portfolio requires JavaScript to function properly.
        </p>
        <p style={{ fontSize: "1rem", opacity: 0.8 }}>
          Please enable JavaScript in your browser to view the full experience.
        </p>
      </div>
    </noscript>
  )
}
