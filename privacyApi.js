import { useEffect, useState } from "react";
import { getPrivacy } from "../api/privacyApi";

export default function Privacy() {
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    getPrivacy().then(setPolicy);
  }, []);

  if (!policy) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="text-white p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{policy.title}</h1>
      <p className="leading-relaxed whitespace-pre-line">{policy.content}</p>
    </div>
  );
}

