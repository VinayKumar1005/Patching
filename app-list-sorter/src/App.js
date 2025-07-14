import React, { useState } from "react";
import appList from "./appList";

function getMatchScore(app, matchList) {
  // Score: exact match (3), startsWith (2), includes (1), else (0)
  const lowerApp = app.toLowerCase();
  for (let i = 0; i < matchList.length; i++) {
    const match = matchList[i].toLowerCase();
    if (lowerApp === match) return 3;
    if (lowerApp.startsWith(match)) return 2;
    if (lowerApp.includes(match)) return 1;
  }
  return 0;
}

export default function App() {
  const [input, setInput] = useState("");
  const [sortedApps, setSortedApps] = useState(appList);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    const matchList = e.target.value.split(/[,\n]/).map(s => s.trim()).filter(Boolean);
    if (matchList.length === 0) {
      setSortedApps(appList);
      return;
    }
    // Sort apps by match score, then alphabetically
    const appsWithScore = appList.map(app => ({
      name: app,
      score: getMatchScore(app, matchList)
    }));
    appsWithScore.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
    setSortedApps(appsWithScore.map(a => a.name));
  };

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", fontFamily: "Segoe UI, sans-serif" }}>
      <h2>Application List Sorter</h2>
      <p>Enter a list of keywords or app names (comma or newline separated):</p>
      <textarea
        rows={4}
        style={{ width: "100%", fontSize: 16, padding: 8 }}
        value={input}
        onChange={handleInputChange}
        placeholder="e.g. CRM, IMA, QC"
      />
      <h3 style={{ marginTop: 30 }}>Sorted Applications</h3>
      <ul style={{ background: "#f8f8f8", borderRadius: 8, padding: 20, listStyle: "none" }}>
        {sortedApps.map(app => (
          <li key={app} style={{ padding: "6px 0", borderBottom: "1px solid #eee" }}>{app}</li>
        ))}
      </ul>
    </div>
  );
}
