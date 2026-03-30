import React, { useState } from "react";
import PublicLayout from "../../../components/PublicLayout";

export default function Contact() {
  const [activeModal, setActiveModal] = useState(null);
  const [modalLayer, setModalLayer] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const contactContent = {
    inquiries: {
      name: "General Inquiries",
      layer1: [
        { id: 1, label: "Platform Questions", desc: "How to use BSR", emoji: "❓" },
        { id: 2, label: "Media Request", desc: "Press & partnerships", emoji: "📸" },
        { id: 3, label: "Feedback", desc: "Your suggestions matter", emoji: "💬" },
      ],
      layer2: {
        1: [
          { id: 101, title: "How do I access rankings?", answer: "Visit the Rankings section in main navigation to view player and team rankings." },
          { id: 102, title: "How do I submit videos?", answer: "Navigate to Media section to upload highlight reels and game footage." },
        ],
        2: [
          { id: 201, title: "Media Partnerships", answer: "Contact our media team at media@brooksports.com for collaboration inquiries." },
          { id: 202, title: "Press Inquiries", answer: "Email press@brooksports.com for official statements and interviews." },
        ],
        3: [
          { id: 301, title: "Feature Requests", answer: "We'd love to hear feature ideas! Send suggestions to feedback@brooksports.com" },
        ],
      },
    },
    evaluation: {
      name: "Evaluations & Scouting",
      layer1: [
        { id: 1, label: "Player Evaluation", desc: "How we rank players", emoji: "🏀" },
        { id: 2, label: "Team Analysis", desc: "Program evaluations", emoji: "👥" },
        { id: 3, label: "Submission Process", desc: "Get your team evaluated", emoji: "📝" },
      ],
      layer2: {
        1: [
          { id: 101, title: "Player Rating Criteria", answer: "We evaluate on film, measurables, IQ, athleticism, and college trajectory." },
          { id: 102, title: "How often are rankings updated?", answer: "Rankings are updated monthly during evaluation season (Sept-July)." },
        ],
        2: [
          { id: 201, title: "Team Program Analysis", answer: "We analyze team culture, system, and prospect development." },
          { id: 202, title: "Program Partnerships", answer: "Interested programs can contact partnerships@brooksports.com" },
        ],
        3: [
          { id: 301, title: "Submit Your Team", answer: "Complete the submission form at submissions@brooksports.com with team roster and schedule." },
        ],
      },
    },
    support: {
      name: "Support & Technical",
      layer1: [
        { id: 1, label: "Account Issues", desc: "Login & profile help", emoji: "🔐" },
        { id: 2, label: "Technical Support", desc: "Website & app issues", emoji: "🛠️" },
        { id: 3, label: "Report a Problem", desc: "Bug reports & errors", emoji: "🐛" },
      ],
      layer2: {
        1: [
          { id: 101, title: "Reset My Password", answer: "Click 'Forgot Password' on login page or email support@brooksports.com" },
          { id: 102, title: "Update Profile Info", answer: "Log in and navigate to Profile settings to update your information." },
        ],
        2: [
          { id: 201, title: "Website Issues", answer: "Clear your browser cache or try a different browser. Contact support if issue persists." },
          { id: 202, title: "Video Upload Failure", answer: "Ensure file is under 500MB and in supported format (MP4, MOV, WebM)." },
        ],
        3: [
          { id: 301, title: "Report a Bug", answer: "Email support@brooksports.com with screenshots and description of issue." },
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

    const content = contactContent[activeModal];
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
                  <button style={styles.exploreBtn}>View →</button>
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
                <p style={styles.layer2ItemMeta}>{item.answer}</p>
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
      <h1 style={{ fontSize: 26, marginBottom: 20 }}>Contact & Support</h1>
      <p style={{ opacity: 0.85, maxWidth: 700, lineHeight: 1.6, marginBottom: 30 }}>
        Questions? We're here to help. Find answers or reach out directly.
      </p>

      <div style={styles.grid}>
        <div style={styles.card} onClick={() => openModal('inquiries')}>
          <div style={styles.cardEmoji}>💬</div>
          <h3 style={styles.cardTitle}>General Inquiries</h3>
          <p style={styles.cardDesc}>Platform questions & feedback</p>
        </div>

        <div style={styles.card} onClick={() => openModal('evaluation')}>
          <div style={styles.cardEmoji}>🏀</div>
          <h3 style={styles.cardTitle}>Evaluations</h3>
          <p style={styles.cardDesc}>Scouting & rating process</p>
        </div>

        <div style={styles.card} onClick={() => openModal('support')}>
          <div style={styles.cardEmoji}>🛠️</div>
          <h3 style={styles.cardTitle}>Technical Support</h3>
          <p style={styles.cardDesc}>Account & technical help</p>
        </div>
      </div>

      <div style={styles.emailSection}>
        <h3>Direct Contact</h3>
        <p>Email: <a href="mailto:support@brooksports.com" style={styles.link}>support@brooksports.com</a></p>
      </div>
    </PublicLayout>
  );
}

const styles = {
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
  emailSection: {
    marginTop: "40px",
    padding: "20px",
    background: "rgba(0,180,255,0.1)",
    border: "1px solid #00B4FF",
    borderRadius: "14px",
  },
  link: {
    color: "#00B4FF",
    textDecoration: "none",
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