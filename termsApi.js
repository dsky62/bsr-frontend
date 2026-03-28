import { useEffect, useState } from "react";
import { getTerms } from "../api/termsApi";

export default function Terms() {
  const [terms, setTerms] = useState(null);

  useEffect(() => {
    getTerms().then(setTerms);
  }, []);

  if (!terms) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="text-white p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{terms.title}</h1>
      <p className="leading-relaxed whitespace-pre-line">{terms.content}</p>
    </div>
  );
}

