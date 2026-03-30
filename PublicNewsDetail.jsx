import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PublicNav from '../../../components/PublicNav';

const PublicNewsDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/news/${id}`);
        if (!response.ok) throw new Error('Failed to fetch article');
        const data = await response.json();
        setArticle(data);

        // Fetch related news
        const relatedRes = await fetch(`http://localhost:5000/api/news?limit=3`);
        const related = await relatedRes.json();
        setRelatedNews(related.filter((n) => n._id !== id).slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <div style={styles.loading}>Loading article...</div>;
  if (error) return <div style={styles.error}>Error: {error}</div>;
  if (!article) return <div style={styles.notFound}>Article not found</div>;

  return (
    <div style={styles.page}>
      <PublicNav />
      
      <section style={styles.articleHero}>
        <div style={styles.heroImage} />
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.articleTitle}>{article.title}</h1>
          <p style={styles.articleMeta}>By {article.author || 'BSR Staff'} • {new Date(article.date).toLocaleDateString()} • {article.readTime || '5 min read'}</p>
        </div>
      </section>

      <section style={styles.contentSection}>
        <div style={styles.articleContent}>
          <p style={styles.articleText}>{article.content || article.excerpt}</p>
          
          {article.tags && (
            <div style={styles.tagsSection}>
              <h3 style={styles.tagsTitle}>Tags</h3>
              <div style={styles.tagsList}>
                {article.tags.map((tag, idx) => (
                  <span key={idx} style={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside style={styles.sidebar}>
          <div style={styles.authorCard}>
            <div style={styles.authorAvatar} />
            <h4 style={styles.authorName}>{article.author || 'BSR Staff'}</h4>
            <p style={styles.authorBio}>Basketball Scouting Report</p>
          </div>

          <div style={styles.shareCard}>
            <h4 style={styles.shareTitle}>Share This</h4>
            <div style={styles.shareButtons}>
              <a href="#" style={styles.shareBtn}>📘 Facebook</a>
              <a href="#" style={styles.shareBtn}>𝕏 Twitter</a>
              <a href="#" style={styles.shareBtn}>📸 Instagram</a>
            </div>
          </div>
        </aside>
      </section>

      <section style={styles.relatedSection}>
        <h2 style={styles.sectionTitle}>Related Articles</h2>
        <div style={styles.relatedGrid}>
          {relatedNews.map((news, idx) => (
            <div key={idx} style={styles.relatedCard}>
              <div style={styles.relatedImage} />
              <div style={styles.relatedBody}>
                <p style={styles.relatedTag}>{news.category || 'News'}</p>
                <h3 style={styles.relatedTitle}>{news.title}</h3>
                <p style={styles.relatedDate}>{new Date(news.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: { minHeight: '100vh', background: 'radial-gradient(circle at top, #1F2933 0%, #050608 55%, #020203 100%)', color: '#FFFFFF', fontFamily: 'Arial, sans-serif' },
  loading: { fontSize: '18px', textAlign: 'center', padding: '40px', color: '#00B4FF' },
  error: { fontSize: '18px', textAlign: 'center', padding: '40px', color: '#FF6B6B' },
  notFound: { fontSize: '18px', textAlign: 'center', padding: '40px', color: '#FFD700' },
  articleHero: { position: 'relative', height: '400px', overflow: 'hidden' },
  heroImage: { position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
  heroOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,180,255,0.1))' },
  heroContent: { position: 'relative', maxWidth: '1300px', margin: '0 auto', padding: '80px 20px 20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' },
  articleTitle: { fontSize: '42px', fontWeight: '900', marginBottom: '12px', textShadow: '0 0 18px rgba(0, 180, 255, 0.9)' },
  articleMeta: { fontSize: '14px', opacity: 0.9 },
  contentSection: { maxWidth: '1300px', margin: '0 auto', padding: '40px 20px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '30px' },
  articleContent: { fontSize: '16px', lineHeight: '1.8', opacity: 0.95 },
  articleText: { marginBottom: '24px' },
  tagsSection: { marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.2)' },
  tagsTitle: { fontSize: '14px', fontWeight: '700', marginBottom: '10px', textTransform: 'uppercase' },
  tagsList: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
  tag: { display: 'inline-block', padding: '4px 12px', background: 'rgba(0,180,255,0.2)', border: '1px solid #00B4FF', borderRadius: '999px', fontSize: '12px' },
  sidebar: { display: 'flex', flexDirection: 'column', gap: '20px' },
  authorCard: { background: 'rgba(0,0,0,0.6)', border: '1px solid #00B4FF', borderRadius: '12px', padding: '16px', textAlign: 'center' },
  authorAvatar: { width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(0,180,255,0.2)', margin: '0 auto 12px' },
  authorName: { fontSize: '14px', fontWeight: '700', marginBottom: '4px' },
  authorBio: { fontSize: '12px', opacity: 0.8 },
  shareCard: { background: 'rgba(0,0,0,0.6)', border: '1px solid #00B4FF', borderRadius: '12px', padding: '16px' },
  shareTitle: { fontSize: '13px', fontWeight: '700', marginBottom: '12px', textTransform: 'uppercase' },
  shareButtons: { display: 'flex', flexDirection: 'column', gap: '8px' },
  shareBtn: { padding: '8px 12px', background: 'rgba(0,180,255,0.2)', border: '1px solid #00B4FF', borderRadius: '6px', fontSize: '12px', textDecoration: 'none', color: '#FFFFFF', textAlign: 'center', cursor: 'pointer' },
  relatedSection: { maxWidth: '1300px', margin: '0 auto 40px', padding: '0 20px' },
  sectionTitle: { fontSize: '24px', fontWeight: '800', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.12em' },
  relatedGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' },
  relatedCard: { borderRadius: '12px', border: '2px solid #FFFFFF', overflow: 'hidden', background: 'rgba(0,0,0,0.6)', cursor: 'pointer' },
  relatedImage: { height: '140px', backgroundImage: 'url(https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
  relatedBody: { padding: '12px' },
  relatedTag: { fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.8 },
  relatedTitle: { fontSize: '14px', fontWeight: '700', marginTop: '4px', marginBottom: '6px' },
  relatedDate: { fontSize: '12px', opacity: 0.7 },
};

export default PublicNewsDetail;