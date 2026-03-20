import React from "react";

export default function PublicFooter() {
  return (
    <div style={styles.footer}>
      <div style={styles.text}>Brooks Scouting Report</div>
      <div style={styles.credit}>Built by DLW Solutions LLC</div>
    </div>
  );
}

const styles = {
  footer: {
    marginTop: "60px",
    padding: "30px",
    background: "#161b22",
    borderTop: "1px solid #30363d",
    textAlign: "center",
    color: "white"
  },
  text: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "6px"
  },
  credit: {
    fontSize: "14px",
    opacity: 0.7
  }
};

