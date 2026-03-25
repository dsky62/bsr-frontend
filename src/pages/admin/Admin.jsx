import React, { useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [stats] = useState({
    players: 127,
    teams: 24,
    rankings: 5,
    videos: 342,
    events: 18,
  });

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.title}>🎛️ Admin Dashboard</h1>
        <p style={styles.subtitle}>Manage Brooks Scouting Report Content</p>
      </header>

      {/* STATS GRID */}
      <section style={styles.statsGrid}>
        <StatCard icon="👥" label="Players" value={stats.players} />
        <StatCard icon="🏀" label="Teams" value={stats.teams} />
        <StatCard icon="📊" label="Rankings" value={stats.rankings} />
        <StatCard icon="🎬" label="Videos" value={stats.videos} />
        <StatCard icon="🎪" label="Events" value={stats.events} />
      </section>

      {/* ACTION CARDS */}
      <section style={styles.actionsSection}>
        <h2 style={styles.sectionTitle}>Quick Actions</h2>
        <div style={styles.actionGrid}>
          <ActionCard 
            emoji="➕"
            title="Add New Player" 
            description="Upload a new prospect"
            link="/admin/add/player"
          />
          <ActionCard 
            emoji="📹"
            title="Upload Video" 
            description="Add highlight reel"
            link="/admin/add/media"
          />
          <ActionCard 
            emoji="⭐"
            title="Create Ranking" 
            description="Update player rankings"
            link="/admin/add/rankings"
          />
          <ActionCard 
            emoji="🏈"
            title="Add Team" 
            description="New program hub"
            link="/admin/add/team"
          />
        </div>
      </section>

      {/* MANAGEMENT SECTION */}
      <section style={styles.managementSection}>
        <h2 style={styles.sectionTitle}>Manage Content</h2>
        <div style={styles.managementGrid}>
          <ManageCard 
            icon="👥"
            title="Players" 
            description="View & Edit Players"
            link="/admin/players"
          />
          <ManageCard 
            icon="🏀"
            title="Teams" 
            description="Manage Teams"
            link="/admin/teams"
          />
          <ManageCard 
            icon="📊"
            title="Rankings" 
            description="Update Rankings"
            link="/admin/rankings"
          />
          <ManageCard 
            icon="🎬"
            title="Media" 
            description="Manage Videos"
            link="/admin/media"
          />
          <ManageCard 
            icon="🎪"
            title="Events" 
            description="Create Events"
            link="/admin/events"
          />
          <ManageCard 
            icon="📰"
            title="News" 
            description="Post Articles"
            link="/admin/news"
          />
        </div>
      </section>

      {/* RECENT ACTIVITY */}
      <section style={styles.activitySection}>
        <h2 style={styles.sectionTitle}>Recent Activity</h2>
        <div style={styles.activityList}>
          <ActivityItem time="2 hours ago" action="Jalen Brooks ranked #1" />
          <ActivityItem time="5 hours ago" action="New video uploaded: PNW Guards" />
          <ActivityItem time="1 day ago" action="Seattle Select added to teams" />
          <ActivityItem time="2 days ago" action="Rankings updated" />
        </div>
      </section>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div style={{...styles.statCard, animation: "slideIn 0.5s ease-out"}}>
    <div style={styles.statIcon}>{icon}</div>
    <div style={styles.statValue}>{value}</div>
    <div style={styles.statLabel}>{label}</div>
  </div>
);

const ActionCard = ({ emoji, title, description, link }) => (
  <Link to={link} style={{...styles.actionCard, animation: "slideIn 0.6s ease-out"}}>
    <div style={styles.actionEmoji}>{emoji}</div>
    <div style={styles.actionTitle}>{title}</div>
    <div style={styles.actionDescription}>{description}</div>
    <div style={styles.actionArrow}>→</div>
  </Link>
);

const ManageCard = ({ icon, title, description, link }) => (
  <Link to={link} style={{...styles.manageCard, animation: "slideIn 0.6s ease-out"}}>
    <div style={styles.manageIcon}>{icon}</div>
    <div style={styles.manageTitle}>{title}</div>
    <div style={styles.manageDescription}>{description}</div>
  </Link>
);

const ActivityItem = ({ time, action }) => (
  <div style={styles.activityItem}>
    <div style={styles.activityTime}>{time}</div>
    <div style={styles.activityAction}>{action}</div>
  </div>
);

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)",
    color: "#FFFFFF",
    padding: "40px",
  },

  header: {
    marginBottom: "40px",
    animation: "fadeIn 0.8s ease-out",
  },

  title: {
    fontSize: "42px",
    fontWeight: "900",
    marginBottom: "8px",
    background: "linear-gradient(90deg, #00B4FF, #0088CC)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    fontSize: "16px",
    opacity: 0.8,
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },

  statCard: {
    background: "linear-gradient(135deg, rgba(0,180,255,0.15), rgba(0,0,0,0.3))",
    border: "2px solid rgba(0,180,255,0.3)",
    borderRadius: "16px",
    padding: "20px",
    textAlign: "center",
    transition: "all 0.3s",
  },

  statIcon: {
    fontSize: "32px",
    marginBottom: "10px",
  },

  statValue: {
    fontSize: "28px",
    fontWeight: "900",
    color: "#00B4FF",
    marginBottom: "4px",
  },

  statLabel: {
    fontSize: "12px",
    opacity: 0.8,
    textTransform: "uppercase",
  },

  actionsSection: {
    marginBottom: "50px",
  },

  sectionTitle: {
    fontSize: "24px",
    fontWeight: "800",
    marginBottom: "24px",
    color: "#00B4FF",
  },

  actionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  actionCard: {
    background: "linear-gradient(135deg, rgba(0,180,255,0.1), rgba(0,0,0,0.2))",
    border: "2px solid rgba(0,180,255,0.2)",
    borderRadius: "16px",
    padding: "20px",
    cursor: "pointer",
    textDecoration: "none",
    color: "#FFFFFF",
    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
    position: "relative",
    overflow: "hidden",
  },

  actionEmoji: {
    fontSize: "40px",
    marginBottom: "12px",
  },

  actionTitle: {
    fontSize: "16px",
    fontWeight: "800",
    marginBottom: "8px",
  },

  actionDescription: {
    fontSize: "12px",
    opacity: 0.8,
  },

  actionArrow: {
    position: "absolute",
    right: "16px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "24px",
    opacity: 0.5,
    transition: "all 0.3s",
  },

  managementSection: {
    marginBottom: "50px",
  },

  managementGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },

  manageCard: {
    background: "linear-gradient(135deg, rgba(0,180,255,0.1), rgba(0,0,0,0.2))",
    border: "2px solid rgba(0,180,255,0.2)",
    borderRadius: "16px",
    padding: "20px",
    textDecoration: "none",
    color: "#FFFFFF",
    textAlign: "center",
    transition: "all 0.3s",
  },

  manageIcon: {
    fontSize: "36px",
    marginBottom: "12px",
  },

  manageTitle: {
    fontSize: "16px",
    fontWeight: "800",
    marginBottom: "6px",
  },

  manageDescription: {
    fontSize: "12px",
    opacity: 0.8,
  },

  activitySection: {
    marginBottom: "40px",
  },

  activityList: {
    background: "rgba(0,0,0,0.3)",
    border: "2px solid rgba(0,180,255,0.2)",
    borderRadius: "16px",
    padding: "20px",
  },

  activityItem: {
    padding: "12px 0",
    borderBottom: "1px solid rgba(0,180,255,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  activityTime: {
    fontSize: "12px",
    opacity: 0.6,
  },

  activityAction: {
    fontSize: "14px",
  },
};

export default Admin;