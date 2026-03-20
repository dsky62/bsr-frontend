import React from "react";
import { Link } from "react-router-dom";

export default function PublicHome() {
  const neon="#00B4FF";
  const pill={padding:"8px 14px",borderRadius:20,border:`1px solid ${neon}`,color:neon,textDecoration:"none",fontSize:12,marginRight:8,background:"rgba(0,0,0,0.4)"};

  return (
    <div style={{background:"#020203",color:"#fff",fontFamily:"Arial",paddingBottom:40}}>
      
      {/* HERO */}
      <section style={{maxWidth:1200,margin:"0 auto",padding:"40px 20px",display:"flex",flexWrap:"wrap",gap:30}}>
        <div style={{flex:"1 1 360px"}}>
          <h1 style={{fontSize:42,fontWeight:900,letterSpacing:"0.08em",textTransform:"uppercase",textShadow:`0 0 18px ${neon}`}}>
            PNW Hoops. Documented.
          </h1>
          <p style={{opacity:.9,marginTop:10}}>Film • Rankings • Stories • Culture</p>
          <div style={{marginTop:16,display:"flex",gap:10,flexWrap:"wrap"}}>
            <span style={{padding:"6px 12px",border:"1px solid #fff",borderRadius:20,fontSize:11,letterSpacing:"0.1em"}}>Rankings</span>
            <span style={{padding:"6px 12px",border:"1px solid #fff",borderRadius:20,fontSize:11,letterSpacing:"0.1em"}}>Highlights</span>
            <span style={{padding:"6px 12px",border:"1px solid #fff",borderRadius:20,fontSize:11,letterSpacing:"0.1em"}}>Players</span>
          </div>
        </div>

        <div style={{flex:"1 1 300px",border:`2px solid #fff`,borderRadius:18,overflow:"hidden",background:"url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80') center/cover",minHeight:220,position:"relative"}}>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(0,0,0,.7),rgba(0,180,255,.2),rgba(0,0,0,.8))"}}/>
          <div style={{position:"absolute",bottom:16,left:16}}>
            <div style={{fontSize:11,opacity:.8,letterSpacing:"0.16em"}}>Featured Mix</div>
            <div style={{fontWeight:800,fontSize:16}}>PNW Guards • Vol. 1</div>
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section style={{maxWidth:1200,margin:"0 auto 30px",padding:"8px 16px",borderRadius:30,border:"1px solid rgba(255,255,255,.2)",background:"rgba(0,0,0,.5)",display:"flex",gap:12,overflowX:"auto"}}>
        <span style={{color:neon,fontSize:11,letterSpacing:"0.16em"}}>Trending</span>
        <span>Top Guards</span><span style={{opacity:.6}}>•</span>
        <span>Showcase Standouts</span><span style={{opacity:.6}}>•</span>
        <span>Class Rankings</span><span style={{opacity:.6}}>•</span>
        <span>Freshmen to Watch</span>
      </section>

      {/* HIGHLIGHT REELS */}
      <section style={{maxWidth:1200,margin:"0 auto 40px",padding:"0 20px"}}>
        <h2 style={{fontSize:20,fontWeight:800,letterSpacing:"0.12em",marginBottom:12}}>Highlight Reels</h2>
        <div style={{display:"flex",gap:16,overflowX:"auto"}}>
          {[
            {t:"Top Guards • Vol.1",img:"photo-1517649763962-0c623066013b"},
            {t:"Showcase Standouts",img:"photo-1521412644187-c49fa049e84d"},
            {t:"Freshmen to Watch",img:"photo-1509021436665-8f07dbf5bf1d"}
          ].map((v,i)=>(
            <div key={i} style={{minWidth:240,border:"2px solid #fff",borderRadius:16,overflow:"hidden",background:"rgba(0,0,0,.7)"}}>
              <div style={{height:120,background:`url(https://images.unsplash.com/${v.img}?auto=format&fit=crop&w=800&q=80) center/cover`}}/>
              <div style={{padding:"10px 12px"}}>
                <div style={{fontSize:11,opacity:.8}}>Feature</div>
                <div style={{fontWeight:700,fontSize:15}}>{v.t}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPOTLIGHT */}
      <section style={{maxWidth:1200,margin:"0 auto 40px",padding:"0 20px"}}>
        <h2 style={{fontSize:20,fontWeight:800,letterSpacing:"0.12em",marginBottom:12}}>Team Spotlight</h2>
        <div style={{border:"2px solid #fff",borderRadius:18,padding:18,background:"rgba(0,0,0,.7)"}}>
          <h3 style={{fontSize:18,fontWeight:800}}>PNW Elite • 17U</h3>
          <p style={{opacity:.9,marginTop:6}}>Guard‑heavy, pace‑and‑space, pressure defense, transition threes.</p>
          <div style={{display:"flex",gap:12,marginTop:12}}>
            <div>24‑3 • Record</div>
            <div>4 • D1 Prospects</div>
            <div>PNW • Region</div>
          </div>
        </div>
      </section>

      {/* UP & COMING */}
      <section style={{maxWidth:1200,margin:"0 auto 40px",padding:"0 20px"}}>
        <h2 style={{fontSize:20,fontWeight:800,letterSpacing:"0.12em",marginBottom:12}}>Up & Coming</h2>
        <div style={{display:"flex",gap:16,overflowX:"auto"}}>
          {["J. Brooks • 2026","T. Carter • 2025","M. Davis • 2027"].map((p,i)=>(
            <div key={i} style={{minWidth:200,border:"1px solid rgba(255,255,255,.3)",borderRadius:14,padding:12,background:"rgba(0,0,0,.6)"}}>
              <div style={{fontWeight:700}}>{p}</div>
              <div style={{fontSize:13,opacity:.8}}>Rising prospect • Trending up</div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPLORE BSR */}
      <section style={{maxWidth:1200,margin:"0 auto 40px",padding:"0 20px"}}>
        <h2 style={{fontSize:20,fontWeight:800,letterSpacing:"0.12em",marginBottom:12}}>Explore BSR</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>
          {[
            {t:"News",d:"Stories • Features • Coverage",l:"/public/news"},
            {t:"Rankings",d:"Player & Team Boards",l:"/public/rankings"},
            {t:"Players",d:"Prospect Profiles",l:"/public/players"},
            {t:"Media",d:"Highlights & Visuals",l:"/public/media"}
          ].map((c,i)=>(
            <Link key={i} to={c.l} style={{border:"2px solid #fff",borderRadius:16,padding:16,textDecoration:"none",color:"#fff",background:"rgba(10,10,10,.9)"}}>
              <div style={{fontSize:11,opacity:.7,letterSpacing:"0.14em"}}>{c.t}</div>
              <div style={{fontSize:18,fontWeight:800,color:neon}}>{c.d}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* DOM BROOKS */}
      <section style={{maxWidth:1200,margin:"0 auto 40px",padding:"0 20px"}}>
        <h2 style={{fontSize:20,fontWeight:800,letterSpacing:"0.12em",marginBottom:12}}>Dom Brooks</h2>
        <p style={{opacity:.9}}>Founder • Brooks Scouting Report • PNW</p>
        <div style={{marginTop:10}}>
          <a href="https://instagram.com/reportbrooks" style={pill}>📸 IG</a>
          <a href="https://facebook.com/reportbrooks" style={pill}>📘 FB</a>
          <a href="https://x.com/ReportBrooks" style={pill}>🐦 X</a>
          <a href="https://youtube.com/channel/UCHu8hsEzZeNEfWK2sFVginA" style={pill}>▶️ YT</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{textAlign:"center",opacity:.6,marginTop:20}}>
        Built by DLW Solutions LLC • Brooks Scouting Report
      </footer>
    </div>
  );
}

