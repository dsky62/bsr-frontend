import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PublicLayout from "../../../components/PublicLayout";

export default function CoachesCorner() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);
  const [modalLayer, setModalLayer] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const coachContent = {
    interviews: {
      name: "Coach Interviews",
      layer1: [
        { id: 1, label: "Elite Program Leaders", desc: "Top coaches in PNW", emoji: "🎤" },
        { id: 2, label: "Developmental Philosophies", desc: "Player growth methods", emoji: "📚" },
        { id: 3, label: "System Breakdowns", desc: "Offensive & defensive schemes", emoji: "📋" },
      ],
      layer2: {
        1: [
          { id: 101, title: "Coach Mike - Elite Guard Development", interview: "30 years coaching, focuses on ball-handling and court vision." },
          { id: 102, title: "Coach Sarah - Team Culture Builder", interview: "Creates championship mentality through player leadership." },
        ],
        2: [
          { id: 201, title: "The Pace-and-Space System", description: "Why modern basketball demands ball movement and spacing." },
          { id: 202, title: "Defensive Principles", description: "Building pressure defense while maintaining court control." },
        ],
        3: [
          { id: 301, title: "Pick-and-Roll Mastery", details: "Breaking down the most effective offensive set in basketball." },
          { id: 302, title: "Transition Game Strategy", details: "Converting defense to offense with pace and purpose." },
        ],
      },
    },
    resources: {
      name: "Coaching Resources",
      layer1: [
        { id: 1, label: "Practice Plans", desc: "Ready-to-use drills", emoji: "⚙️" },
        { id: 2, label: "Leadership Guides", desc: "Team management tips", emoji: "👨‍💼" },
        { id: 3, label: "Player Development", desc: "Skill progression frameworks", emoji: "📈" },
      ],
      layer2: {
        1: [
          { id: 101, title: "Guard Development Practice", description: "Full 90-minute session for PG/SG skill building." },
          { id: 102, title: "Team Defense Drill Set", description: "5-drill progression for championship-level defense." },
        ],
        2: [
          { id: 201, title: "Building Team Culture", description: "Creating accountability and buy-in with your roster." },
          { id: 202, title: "Communication Strategies", description: "How to give feedback that improves player performance." },
        ],
        3: [
          { id: 301, title: "6-Month Skill Progression", description: "Periodized approach to developing elite players." },
          { id: 302, title: "Athleticism vs. IQ", description: "Balancing physical tools with basketball intelligence." },
        ],
      },
    },
    community: {
      name: "Coach Community",
      layer1: [
        { id: 1, label: "Coaching Network", desc: "Connect with other coaches", emoji: "🤝" },
        { id: 2, label: "Events & Clinics", desc: "Training opportunities", emoji: "🏅" },
        { id: 3, label: "Discussion Forum", desc: "Share ideas & experiences", emoji: "💬" },
      ],
      layer2: {
        1: [
          { id: 101, title: "PNW Coaches Network", description: "Monthly meetups for regional coaches to share best practices." },
          { id: 102, title: "National Coach Community", description: "Connect with elite coaches across the country." },
        ],
        2: [
          { id: 201, title: "Summer Coaching Clinic", description: "3-day intensive with Hall of Famers and current pros." },
          { id: 202, title: "Regional Coaching Summit", description: "Annual gathering for Pacific Northwest program leaders." },
        ],
        3: [
          { id: 301, title: "System Sharing Thread", description: "Post and discuss your offensive/defensive systems." },
          { id: 302, title: "Player Development Q&A", description: "Ask questions and get advice from experienced coaches." },
        ],
      },
    },
  };

  const openModal = (modal, layer = 1) => {
    setActiveModal(modal);
    setModalLayer(layer);
    setSelectedItem(null);
  };

  const goToNextLayer = (itemId) => {
    setSelectedItem(itemId);
    setModalLayer(2);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalLayer(1);
    setSelectedItem(null);
  };

  const renderModal = () => {
    if (!activeModal) return null;

    const content = coachContent[activeModal];
    if (!content) return null;

    const layer1Items = content.layer1 || [];
    const layer2Items = content.layer2 || {};

    if (modalLayer === 1) {
      return (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} style={styles.backBtn}>← Back</button>
            <h1 style={styles.modalTitle}>{content.name}</h1>
            <div style={styles.layer1Grid}>
              {layer1Items.map(item => (
                <div key={item.id} onClick={() => goToNextLayer(item.id)} style={styles.layer1Card}>
                  <div style={styles.emoji}>{item.emoji}</div>
                  <h3 style={styles.layer1CardTitle}>{item.label}</h3>
                  <p style={styles.layer1CardDesc}>{item.desc}</p>
                  <button style={styles.exploreBtn}>Explore →</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    const layer2Data = layer2Items[selectedItem] || [];
    const selectedLayer1 = layer1Items.find(i => i.id === selectedItem) || layer1Items[0];

    return (
      <div style={styles.modalOverlay} onClick={closeModal}>
        <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setModalLayer(1)} style={styles.backBtn}>← Back</button>
          <h1 style={styles.modalTitle}>{selectedLayer1.label}</h1>
          <div style={styles.layer2List}>
            {layer2Data.map(item => (
              <div key={item.id} style={styles.layer2Item}>
                <h3 style={styles.layer2ItemTitle}>{item.title}</h3>
                <p style={styles.layer2ItemMeta}>
                  {item.interview || item.description || item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <PublicLayout>
      {renderModal()}
      
      {/* Back to Home Arrow */}
      <div style={styles.backNav}>
        <button onClick={() => navigate("/")} style={styles.homeBtn}>
          ← Back to Home
        </button>
      </div>

      <h1 style={{ fontSize: 26, marginBottom: 20 }}>👨‍🏫 Coaches Corner</h1>
      <p style={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.6, marginBottom: 30 }}>
        Insights, strategies, philosophies, and developmental approaches from coaches across the Pacific Northwest.
      </p>

      <div style={styles.grid}>
        <div style={styles.card} onClick={() => openModal('interviews')}>
          <div style={styles.cardEmoji}>🎤</div>
          <h3 style={styles.cardTitle}>Coach Interviews</h3>
          <p style={styles.cardDesc}>Learn from elite program leaders</p>
        </div>

        <div style={styles.card} onClick={() => openModal('resources')}>
          <div style={styles.cardEmoji}>⚙️</div>
          <h3 style={styles.cardTitle}>Coaching Resources</h3>
          <p style={styles.cardDesc}>Ready-to-use practice plans & guides</p>
        </div>

        <div style={styles.card} onClick={() => openModal('community')}>
          <div style={styles.cardEmoji}>🤝</div>
          <h3 style={styles.cardTitle}>Coach Community</h3>
          <p style={styles.cardDesc}>Connect with other coaches</p>
        </div>
      </div>
    </PublicLayout>
  );
}

const styles = {
  backNav: {
    marginBottom: "20px",
  },
  homeBtn: {
    background: "rgba(0,180,255,0.2)",
    color: "#00B4FF",
    border: "1px solid #00B4FF",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "14px",
    transition: "0.3s",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    background: "rgba(0,180,255,0.1)",
    border: "2px solid #00B4FF",
    borderRadius: "14px",
    padding: "24px",
    cursor: "pointer",
    transition: "0.3s",
  },
  cardEmoji: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "800",
    color: "#00B4FF",
    marginBottom: "8px",
  },
  cardDesc: {
    fontSize: "14px",
    opacity: 0.85,
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  modalContainer: {
    maxWidth: "900px",
    width: "90%",
    maxHeight: "80vh",
    overflowY: "auto",
    padding: "40px",
    background: "linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)",
    borderRadius: "18px",
    border: "2px solid #00B4FF",
    boxShadow: "0 0 50px rgba(0,180,255,0.8)",
  },
  backBtn: {
    background: "rgba(0,180,255,0.2)",
    color: "#00B4FF",
    border: "1px solid #00B4FF",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "700",
    marginBottom: "20px",
    fontSize: "14px",
  },
  modalTitle: {
    fontSize: "42px",
    fontWeight: "900",
    color: "#00B4FF",
    marginBottom: "25px",
    textShadow: "0 0 18px rgba(0, 180, 255, 0.9)",
  },
  layer1Grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  layer1Card: {
    background: "rgba(0,0,0,0.6)",
    border: "2px solid #00B4FF",
    borderRadius: "14px",
    padding: "24px",
    textAlign: "center",
    cursor: "pointer",
    transition: "0.3s",
  },
  emoji: {
    fontSize: "42px",
    marginBottom: "10px",
  },
  layer1CardTitle: {
    fontSize: "18px",
    fontWeight: "800",
    color: "#00B4FF",
    marginBottom: "8px",
  },
  layer1CardDesc: {
    fontSize: "14px",
    opacity: 0.85,
    marginBottom: "15px",
  },
  exploreBtn: {
    background: "#00B4FF",
    color: "#000",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "13px",
  },
  layer2List: {
    display: "grid",
    gap: "15px",
  },
  layer2Item: {
    background: "rgba(0,180,255,0.1)",
    border: "1px solid rgba(0,180,255,0.3)",
    borderRadius: "12px",
    padding: "18px",
  },
  layer2ItemTitle: {
    fontSize: "16px",
    fontWeight: "800",
    color: "#00B4FF",
    marginBottom: "6px",
  },
  layer2ItemMeta: {
    fontSize: "13px",
    opacity: 0.8,
  },
};