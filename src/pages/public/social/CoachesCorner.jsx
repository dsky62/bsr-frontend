import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CoachesCorner = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Coach Smith', message: 'Hey Dom, what do you think about the 2026 class this year?', time: '2:15 PM', avatar: '👨‍🏫' },
    { id: 2, sender: 'Dom Brooks', message: 'Best class we\'ve seen in 5 years. Jalen Brooks is a generational talent.', time: '2:18 PM', avatar: '🏀' },
    { id: 3, sender: 'Coach Taylor', message: 'Any dark horse candidates I should be watching?', time: '2:22 PM', avatar: '👨‍🏫' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: 'You',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: '👤'
      }]);
      setNewMessage('');
    }
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      
      {/* HEADER */}
      <div style={{ padding: '20px 40px', borderBottom: '2px solid rgba(0,180,255,0.2)', background: 'rgba(0,180,255,0.05)' }}>
        <button onClick={() => navigate('/')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '15px' }}>← Back to Home</button>
        <h1 style={{ fontSize: '36px', fontWeight: '900', color: '#00B4FF', margin: '0' }}>🎯 Coaches Corner</h1>
        <p style={{ fontSize: '14px', opacity: 0.8, margin: '10px 0 0 0' }}>Live chat with Dom Brooks and fellow coaches • Real-time scouting discussion</p>
      </div>

      {/* CHAT CONTAINER */}
      <div style={{ flex: 1, overflow: 'auto', padding: '40px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        {messages.map(msg => (
          <div 
            key={msg.id}
            style={{
              marginBottom: '20px',
              display: 'flex',
              gap: '15px',
              animation: 'fadeIn 0.3s ease-in'
            }}
          >
            <div style={{ fontSize: '32px' }}>{msg.avatar}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
                <div style={{ fontWeight: '700', color: '#00B4FF' }}>{msg.sender}</div>
                <div style={{ opacity: 0.6, fontSize: '12px' }}>{msg.time}</div>
              </div>
              <div style={{ background: 'rgba(0,180,255,0.1)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(0,180,255,0.2)', lineHeight: '1.6' }}>
                {msg.message}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div style={{ padding: '20px 40px', borderTop: '2px solid rgba(0,180,255,0.2)', background: 'rgba(0,180,255,0.05)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '10px' }}>
          <input 
            type="text"
            placeholder="Ask a scouting question..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            style={{
              flex: 1,
              padding: '14px',
              borderRadius: '8px',
              border: '2px solid rgba(0,180,255,0.3)',
              background: 'rgba(0,0,0,0.5)',
              color: '#fff',
              fontSize: '14px'
            }}
          />
          <button 
            onClick={handleSendMessage}
            style={{
              background: 'linear-gradient(90deg, #00B4FF, #0088CC)',
              color: '#000',
              border: 'none',
              padding: '14px 30px',
              borderRadius: '8px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachesCorner;