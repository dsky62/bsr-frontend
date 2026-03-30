import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PublicNav from '../../../components/PublicNav';

const News = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const newsData = {
    features: [
      {
        id: 101,
        title: 'Inside the PNW Guard Factory',
        author: 'Dom Brooks',
        date: '03/24/2026',
        excerpt: 'Why the region keeps producing elite backcourt talent.',
        content: 'The Pacific Northwest has become a breeding ground for elite basketball talent, particularly at the guard position. We explore the training systems, coaching philosophies, and competitive environment that\'s making this region a powerhouse. From Seattle to Portland, talent development is at an all-time high.'
      },
      {
        id: 102,
        title: 'Elite Guard Development Systems',
        author: 'Scouting Staff',
        date: '03/22/2026',
        excerpt: 'How programs develop elite-level ball handlers.',
        content: 'Breaking down the most effective training methodologies used by top programs to develop elite guards. From skill development to game management, we analyze what separates good guards from great ones. Ball handling drills, shooting mechanics, and decision-making are key.'
      },
      {
        id: 103,
        title: 'The Culture of Winning Basketball',
        author: 'Dom Brooks',
        date: '03/20/2026',
        excerpt: 'Building championship culture from the ground up.',
        content: 'What makes certain programs consistently win at the highest level? We dive deep into the culture, leadership, and systems that create sustainable success. Winning is about more than talent - it\'s about mentality and commitment.'
      }
    ],
    recaps: [
      {
        id: 201,
        title: 'Elite 32 Showcase Recap',
        author: 'BSR Scout',
        date: '03/18/2026',
        excerpt: 'Who popped at the showcase.',
        content: 'The Elite 32 Showcase brought together the top 32 teams from across the West Coast. Here are our standout performers and biggest surprises from the event. Multiple players made statements with their performances.'
      },
      {
        id: 202,
        title: 'Standout Performances Analysis',
        author: 'Scouting Staff',
        date: '03/16/2026',
        excerpt: 'Analyzing the best performances.',
        content: 'Detailed breakdowns of the top individual and team performances from this week\'s events. Key takeaways and what it means for the rankings. Film breakdown included.'
      },
      {
        id: 203,
        title: 'Tournament Winners & Trending',
        author: 'Dom Brooks',
        date: '03/14/2026',
        excerpt: 'This weekend\'s biggest surprises.',
        content: 'Complete coverage of all regional tournaments this weekend. Which teams won, who stepped up, and who\'s trending in the rankings.'
      }
    ],
    rankings: [
      {
        id: 301,
        title: 'Class of 2026 Top 10 Updates',
        author: 'Rankings Team',
        date: '03/15/2026',
        excerpt: 'Movement in the top 10.',
        content: 'Weekly updates to the Class of 2026 rankings. See who\'s moving up, who\'s holding steady, and who\'s trending down. Fresh data from recent showcases.'
      },
      {
        id: 302,
        title: 'Rising Stars Breaking Through',
        author: 'Dom Brooks',
        date: '03/13/2026',
        excerpt: 'New names entering the conversation.',
        content: 'A deep dive into the emerging talents that are breaking into the national conversation and what their trajectory looks like. These players are making noise.'
      },
      {
        id: 303,
        title: 'Class of 2027 Watchlist',
        author: 'Scouting Staff',
        date: '03/11/2026',
        excerpt: 'Early names you need to know.',
        content: 'Looking ahead to the class of 2027. Which players are already showing elite-level potential? Here\'s our early watchlist.'
      }
    ]
  };

  const styles = {
    page: {
      minHeight: '100vh',
      background: 'radial-gradient(circle at top, #1F2933 0%, #050608 55%, #020203 100%)',
      color: '#FFFFFF',
      fontFamily: 'Arial, sans-serif',
      paddingBottom: '50px',
    },
    container: {
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '40px',
    },
    backBtn: {
      background: 'rgba(0,180,255,0.2)',
      color: '#00B4FF',
      border: '1px solid #00B4FF',
      padding: '10px 20px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '700',
      fontSize: '14px',
      transition: '0.3s',
    },
    title: {
      fontSize: '48px',
      fontWeight: '900',
      textShadow: '0 0 18px rgba(0, 180, 255, 0.9)',
      margin: 0,
    },
    tabs: {
      display: 'flex',
      gap: '15px',
      marginBottom: '40px',
      borderBottom: '1px solid rgba(255,255,255,0.2)',
      paddingBottom: '15px',
    },
    tab: (active) => ({
      padding: '10px 20px',
      border: 'none',
      background: active ? '#00B4FF' : 'transparent',
      color: active ? '#000' : '#FFFFFF',
      borderBottom: active ? '3px solid #00B4FF' : 'none',
      cursor: 'pointer',
      fontWeight: '700',
      fontSize: '14px',
      transition: '0.3s',
    }),
    articlesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
    },
    articleCard: {
      background: 'rgba(0,0,0,0.7)',
      border: '2px solid #FFFFFF',
      borderRadius: '14px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: '0.3s',
    },
    articleImage: {
      width: '100%',
      height: '200px',
      background: 'linear-gradient(135deg, #1F2933, #050608)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '60px',
    },
    articleBody: {
      padding: '20px',
    },
    articleTitle: {
      fontSize: '18px',
      fontWeight: '800',
      color: '#00B4FF',
      marginBottom: '10px',
    },
    articleMeta: {
      fontSize: '12px',
      opacity: 0.7,
      marginBottom: '10px',
    },
    articleExcerpt: {
      fontSize: '14px',
      opacity: 0.85,
      lineHeight: '1.5',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    },
    modalContent: {
      maxWidth: '900px',
      width: '90%',
      maxHeight: '90vh',
      overflowY: 'auto',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)',
      borderRadius: '18px',
      border: '2px solid #00B4FF',
      padding: '40px',
      boxShadow: '0 0 50px rgba(0,180,255,0.8)',
    },
    modalTitle: {
      fontSize: '32px',
      fontWeight: '900',
      color: '#00B4FF',
      marginBottom: '10px',
    },
    modalMeta: {
      fontSize: '13px',
      opacity: 0.7,
      marginBottom: '20px',
    },
    modalContent_text: {
      fontSize: '15px',
      opacity: 0.9,
      lineHeight: '1.8',
    },
    footer: {
      textAlign: 'center',
      padding: '40px',
      opacity: 0.7,
      fontSize: '14px',
    },
  };

  if (selectedArticle) {
    return (
      <div style={styles.page}>
        <PublicNav />
        <div style={styles.modal} onClick={() => setSelectedArticle(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedArticle(null)} style={styles.backBtn}>← Back</button>
            <h1 style={styles.modalTitle}>{selectedArticle.title}</h1>
            <p style={styles.modalMeta}>By {selectedArticle.author} • {selectedArticle.date}</p>
            <p style={styles.modalContent_text}>{selectedArticle.content}</p>
          </div>
        </div>
      </div>
    );
  }

  const currentArticles = selectedCategory ? newsData[selectedCategory] : [];

  return (
    <div style={styles.page}>
      <PublicNav />
      <div style={styles.container}>
        <div style={styles.header}>
          <button onClick={() => navigate('/')} style={styles.backBtn}>← Back to Home</button>
          <h1 style={styles.title}>📰 News</h1>
        </div>

        {!selectedCategory ? (
          <>
            <p style={{fontSize: '16px', opacity: 0.7, marginBottom: '20px'}}>Select a category to view articles.</p>
            <div style={styles.tabs}>
              <button style={styles.tab(false)} onClick={() => setSelectedCategory('features')}>Features</button>
              <button style={styles.tab(false)} onClick={() => setSelectedCategory('recaps')}>Recaps</button>
              <button style={styles.tab(false)} onClick={() => setSelectedCategory('rankings')}>Rankings</button>
            </div>
          </>
        ) : (
          <>
            <div style={styles.tabs}>
              <button style={styles.tab(selectedCategory === 'features')} onClick={() => setSelectedCategory('features')}>Features</button>
              <button style={styles.tab(selectedCategory === 'recaps')} onClick={() => setSelectedCategory('recaps')}>Recaps</button>
              <button style={styles.tab(selectedCategory === 'rankings')} onClick={() => setSelectedCategory('rankings')}>Rankings</button>
            </div>
            <div style={styles.articlesGrid}>
              {currentArticles.map(article => (
                <div key={article.id} style={styles.articleCard} onClick={() => setSelectedArticle(article)} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 0 22px rgba(0, 180, 255, 0.9)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{...styles.articleImage, fontSize: '50px'}}>📰</div>
                  <div style={styles.articleBody}>
                    <h3 style={styles.articleTitle}>{article.title}</h3>
                    <p style={styles.articleMeta}>By {article.author} • {article.date}</p>
                    <p style={styles.articleExcerpt}>{article.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <footer style={styles.footer}>
        <p>Built by DLW Solutions LLC • brooksports.com</p>
      </footer>
    </div>
  );
};

export default News;