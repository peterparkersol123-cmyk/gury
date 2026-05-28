import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const CA = 'aXEkwkjPbqYFhV9aaBQbLXE8RphdnTdbGn2iUg8pump';
const PUMP_URL = `https://pump.fun/coin/${CA}`;
const DEX_URL = `https://dexscreener.com/solana/${CA}`;
const X_URL = 'https://x.com/gurygunsler';

const ALL_MEMES = ['/meme1.jpeg', '/meme2.jpeg', '/meme3.jpeg', '/meme4.jpeg'];
const PER_PAGE = 4;

function CopyCA() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 12,
      background: 'rgba(255,255,255,0.08)',
      border: '2px solid rgba(255,255,255,0.15)',
      borderRadius: 10, padding: '12px 18px', maxWidth: '100%',
    }}>
      <span style={{
        fontFamily: 'monospace', fontSize: 13, color: '#e8d5bc',
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 320,
      }}>{CA}</span>
      <button onClick={copy} style={{
        background: '#C8925A', color: '#1a1008',
        border: 'none', borderRadius: 6,
        padding: '6px 14px', fontWeight: 700, fontSize: 12,
        cursor: 'pointer', whiteSpace: 'nowrap', letterSpacing: 0.5, flexShrink: 0,
      }}>
        {copied ? '✓ Copied!' : 'Copy CA'}
      </button>
    </div>
  );
}

function MemeGallery() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(ALL_MEMES.length / PER_PAGE);
  const memes = ALL_MEMES.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="memes" style={{ padding: '100px 24px', background: '#1a1008' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{
          display: 'inline-block',
          background: '#C8925A', color: '#1a1008',
          fontSize: 11, fontWeight: 700, letterSpacing: 3,
          padding: '6px 14px', borderRadius: 4, marginBottom: 20,
          textTransform: 'uppercase',
        }}>Memes</div>
        <h2 style={{
          fontFamily: "'Permanent Marker', cursive",
          fontSize: 'clamp(40px, 5vw, 64px)',
          color: '#C8925A', marginBottom: 48, lineHeight: 1.1,
        }}>The Memes Are Real</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16, marginBottom: 36,
        }}>
          {memes.map((src, i) => (
            <div key={page * PER_PAGE + i} style={{
              aspectRatio: '1', borderRadius: 14, overflow: 'hidden',
              border: '3px solid rgba(200,146,90,0.25)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}>
              <img src={src} alt={`meme ${page * PER_PAGE + i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              style={{
                background: page === 0 ? 'rgba(200,146,90,0.2)' : '#C8925A',
                color: '#1a1008', border: 'none', borderRadius: 8,
                padding: '10px 24px', fontWeight: 700, fontSize: 14,
                cursor: page === 0 ? 'default' : 'pointer', letterSpacing: 0.5,
              }}
            >← Prev</button>
            <span style={{ color: '#C8925A', opacity: 0.6, fontSize: 13 }}>
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              style={{
                background: page === totalPages - 1 ? 'rgba(200,146,90,0.2)' : '#C8925A',
                color: '#1a1008', border: 'none', borderRadius: 8,
                padding: '10px 24px', fontWeight: 700, fontSize: 14,
                cursor: page === totalPages - 1 ? 'default' : 'pointer', letterSpacing: 0.5,
              }}
            >Next →</button>
          </div>
        )}
      </div>
    </section>
  );
}

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#1a1008', fontFamily: "'Inter', sans-serif" }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 48px',
        background: 'rgba(20, 12, 4, 0.88)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(200,146,90,0.2)',
      }}>
        <span style={{ fontFamily: "'Permanent Marker', cursive", fontSize: 22, color: '#C8925A', letterSpacing: 1 }}>
          $GURY
        </span>
        <div style={{ display: 'flex', gap: 32 }}>
          {['About', 'Memes', 'Tokenomics', 'Community'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              color: '#C8925A', textDecoration: 'none', fontWeight: 600,
              fontSize: 14, letterSpacing: 0.5, opacity: 0.7, transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
            >{l}</a>
          ))}
        </div>
        <a href={PUMP_URL} target="_blank" rel="noopener noreferrer" style={{
          background: '#C8925A', color: '#1a1008',
          padding: '10px 22px', borderRadius: 8,
          fontWeight: 700, fontSize: 14, textDecoration: 'none', letterSpacing: 0.5,
        }}>
          Buy $GURY
        </a>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', paddingTop: 100,
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <video autoPlay muted loop playsInline style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover', zIndex: 0,
        }}>
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(15, 8, 2, 0.68)', zIndex: 1,
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 900, padding: '0 24px' }}>
          <div style={{
            display: 'inline-block',
            background: '#C8925A', color: '#1a1008',
            fontSize: 12, fontWeight: 700, letterSpacing: 3,
            padding: '6px 16px', borderRadius: 4, marginBottom: 24,
            textTransform: 'uppercase',
          }}>The People's Regulator</div>

          <h1 style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: 'clamp(64px, 10vw, 110px)',
            lineHeight: 1.0, color: '#C8925A', marginBottom: 24,
            textShadow: '4px 4px 0px rgba(0,0,0,0.4)',
          }}>
            Gury<br />Gunsler
          </h1>

          <p style={{
            fontSize: 20, fontWeight: 400, color: '#e8d5bc',
            maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.6,
          }}>
            He didn't understand crypto.<br />
            So we made him the mascot.
          </p>

          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: '#C8925A', opacity: 0.6, marginBottom: 10, textTransform: 'uppercase' }}>
              Contract Address
            </p>
            <CopyCA />
          </div>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={PUMP_URL} target="_blank" rel="noopener noreferrer" style={{
              background: '#C8925A', color: '#1a1008',
              padding: '16px 40px', borderRadius: 10,
              fontWeight: 800, fontSize: 16, textDecoration: 'none', letterSpacing: 0.5,
              boxShadow: '0 4px 20px rgba(200,146,90,0.35)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(200,146,90,0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(200,146,90,0.35)';
              }}
            >Buy on Pump.fun</a>
            <a href={X_URL} target="_blank" rel="noopener noreferrer" style={{
              background: 'transparent', border: '2px solid #C8925A', color: '#C8925A',
              padding: '16px 40px', borderRadius: 10,
              fontWeight: 700, fontSize: 16, textDecoration: 'none', letterSpacing: 0.5,
              transition: 'background 0.15s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(200,146,90,0.12)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
            >Follow on X</a>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{
        background: '#C8925A', color: '#1a1008',
        padding: '14px 0', overflow: 'hidden', whiteSpace: 'nowrap',
      }}>
        {[...Array(3)].map((_, i) => (
          <span key={i} style={{ display: 'inline-block', animation: 'ticker 20s linear infinite', animationDelay: `${i * -6.6}s`, fontWeight: 700 }}>
            {'$GURY — NOT SECURITIES — PROBABLY — ENFORCEMENT ACTION — REGULATED — '.repeat(4)}
          </span>
        ))}
        <style>{`@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }`}</style>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding: '120px 24px', background: '#C8925A' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{
            display: 'inline-block', background: '#1a1008', color: '#C8925A',
            fontSize: 11, fontWeight: 700, letterSpacing: 3,
            padding: '6px 14px', borderRadius: 4, marginBottom: 20, textTransform: 'uppercase',
          }}>About</div>
          <h2 style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: 'clamp(42px, 6vw, 72px)',
            color: '#1a1008', marginBottom: 40, lineHeight: 1.1,
          }}>Who is Gury<br />Gunsler?</h2>

          <img src="/hero.jpg" alt="Gury Gunsler" style={{
            display: 'block', width: '100%', maxWidth: 700,
            borderRadius: 16, marginBottom: 56,
            boxShadow: '0 16px 56px rgba(0,0,0,0.3)',
            border: '3px solid rgba(0,0,0,0.15)',
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { title: 'Trigger Happy', body: "Gury Gunsler's trigger finger has never met a crypto project it didn't want to regulate. Especially yours." },
              { title: 'Enforcement First', body: "Why provide clarity when you can just send a subpoena? Gury's rulebook has one rule: figure it out yourself." },
              { title: 'Always Watching', body: "Decentralized? Gury knows. Anonymous? Gury knows. On-chain? Gury definitely knows." },
            ].map(card => (
              <div key={card.title} style={{
                background: 'rgba(0,0,0,0.12)', border: '2px solid rgba(0,0,0,0.15)',
                borderRadius: 16, padding: '36px 28px',
              }}>
                <h3 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: 22, color: '#1a1008', marginBottom: 12 }}>{card.title}</h3>
                <p style={{ color: '#3d200a', lineHeight: 1.7, fontSize: 15 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEME GALLERY */}
      <MemeGallery />

      {/* TOKENOMICS */}
      <section id="tokenomics" style={{ padding: '120px 24px', background: '#C8925A' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block', background: '#1a1008', color: '#C8925A',
            fontSize: 11, fontWeight: 700, letterSpacing: 3,
            padding: '6px 14px', borderRadius: 4, marginBottom: 20, textTransform: 'uppercase',
          }}>Tokenomics</div>
          <h2 style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: 'clamp(42px, 6vw, 72px)',
            color: '#1a1008', marginBottom: 16, lineHeight: 1.1,
          }}>The Numbers</h2>
          <p style={{ color: '#3d200a', fontSize: 18, margin: '0 auto 64px', maxWidth: 480 }}>
            Simple. Transparent. Gury-proof.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20, maxWidth: 800, margin: '0 auto 48px' }}>
            {[
              { label: 'Total Supply', value: '1B', sub: '$GURY' },
              { label: 'Tax', value: '0%', sub: 'buy / sell' },
              { label: 'LP Burned', value: '100%', sub: 'locked forever' },
              { label: 'Ownership', value: '0%', sub: 'renounced' },
            ].map(stat => (
              <div key={stat.label} style={{ background: '#1a1008', borderRadius: 16, padding: '40px 20px' }}>
                <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: 48, color: '#C8925A', lineHeight: 1 }}>{stat.value}</div>
                <div style={{ color: '#C8925A', opacity: 0.6, fontSize: 13, marginTop: 6 }}>{stat.sub}</div>
                <div style={{ color: '#C8925A', fontWeight: 600, fontSize: 13, marginTop: 10, letterSpacing: 1, textTransform: 'uppercase' }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: '#1a1008', opacity: 0.5, textTransform: 'uppercase' }}>Contract Address</p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              background: 'rgba(0,0,0,0.15)', border: '2px solid rgba(0,0,0,0.2)',
              borderRadius: 10, padding: '12px 18px', maxWidth: '100%',
            }}>
              <span style={{ fontFamily: 'monospace', fontSize: 13, color: '#1a1008', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 320 }}>{CA}</span>
              <CopyCADark />
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" style={{ padding: '120px 24px', background: '#1a1008', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: 'clamp(48px, 7vw, 80px)',
            color: '#C8925A', marginBottom: 24, lineHeight: 1.1,
          }}>Join the<br />Movement</h2>
          <p style={{ color: '#e8d5bc', fontSize: 18, marginBottom: 56, lineHeight: 1.6, opacity: 0.8 }}>
            Gury can't stop us. He can try.<br />He will try.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'Twitter / X', href: X_URL },
              { label: 'Dexscreener', href: DEX_URL },
              { label: 'Pump.fun', href: PUMP_URL },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{
                background: '#C8925A', color: '#1a1008',
                padding: '14px 32px', borderRadius: 10,
                fontWeight: 700, fontSize: 15, textDecoration: 'none', letterSpacing: 0.5,
                boxShadow: '0 4px 16px rgba(200,146,90,0.25)',
                transition: 'transform 0.15s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = ''}
              >{link.label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: '#0d0702', color: '#C8925A',
        padding: '40px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
        borderTop: '1px solid rgba(200,146,90,0.15)',
      }}>
        <span style={{ fontFamily: "'Permanent Marker', cursive", fontSize: 20 }}>$GURY</span>
        <p style={{ opacity: 0.35, fontSize: 12, maxWidth: 500, textAlign: 'center', lineHeight: 1.5 }}>
          $GURY is a meme coin with no intrinsic value or expectation of financial return.
          This is satire. Gury Gunsler is a fictional character. Not financial advice.
        </p>
        <span style={{ opacity: 0.35, fontSize: 12 }}>© 2025 $GURY</span>
      </footer>

    </div>
  );
}

function CopyCADark() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} style={{
      background: '#1a1008', color: '#C8925A',
      border: 'none', borderRadius: 6,
      padding: '6px 14px', fontWeight: 700, fontSize: 12,
      cursor: 'pointer', whiteSpace: 'nowrap', letterSpacing: 0.5, flexShrink: 0,
    }}>
      {copied ? '✓ Copied!' : 'Copy CA'}
    </button>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
