import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

const CA = 'aXEkwkjPbqYFhV9aaBQbLXE8RphdnTdbGn2iUg8pump';
const PUMP_URL = `https://pump.fun/coin/${CA}`;
const DEX_URL = `https://dexscreener.com/solana/${CA}`;
const X_URL = 'https://x.com/gurygunsler';

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
      background: 'rgba(0,0,0,0.18)',
      border: '2px solid rgba(0,0,0,0.2)',
      borderRadius: 10, padding: '12px 18px',
      maxWidth: '100%',
    }}>
      <span style={{
        fontFamily: 'monospace', fontSize: 13, color: '#1a1008',
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        maxWidth: 320,
      }}>
        {CA}
      </span>
      <button
        onClick={copy}
        style={{
          background: '#1a1008', color: '#C8925A',
          border: 'none', borderRadius: 6,
          padding: '6px 14px', fontWeight: 700, fontSize: 12,
          cursor: 'pointer', whiteSpace: 'nowrap',
          letterSpacing: 0.5, transition: 'opacity 0.15s',
          flexShrink: 0,
        }}
      >
        {copied ? '✓ Copied!' : 'Copy CA'}
      </button>
    </div>
  );
}

const MEMES = ['/meme1.jpeg', '/meme2.jpeg', '/meme3.jpeg', '/meme4.jpeg'];

type FloaterProps = { src: string; seed: number };

function Floater({ src, seed }: FloaterProps) {
  const size = 120 + (seed % 5) * 28;
  const startX = 5 + (seed * 23) % 85;
  const startY = 5 + (seed * 37) % 85;
  const duration = 14 + (seed % 7) * 2;
  const delay = -(seed * 3.1);
  const rotate = (seed % 3 === 0 ? 1 : -1) * (8 + (seed % 12));

  return (
    <div style={{
      position: 'absolute',
      left: `${startX}%`,
      top: `${startY}%`,
      width: size,
      height: size,
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
      border: '3px solid rgba(0,0,0,0.15)',
      animation: `float${seed % 4} ${duration}s ease-in-out ${delay}s infinite`,
      transform: `rotate(${rotate}deg)`,
      pointerEvents: 'none',
      zIndex: 0,
    }}>
      <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
}

function FloatingMemes() {
  const items = MEMES.flatMap((src, i) =>
    Array.from({ length: 3 }, (_, j) => ({ src, seed: i * 3 + j + 1 }))
  );

  return (
    <section style={{ position: 'relative', height: 520, overflow: 'hidden', background: '#C8925A' }}>
      <style>{`
        @keyframes float0 {
          0%, 100% { transform: translateY(0px) rotate(8deg); }
          50% { transform: translateY(-32px) rotate(8deg); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(-10deg); }
          50% { transform: translateY(-24px) rotate(-10deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(5deg); }
          33% { transform: translateY(-18px) rotate(5deg); }
          66% { transform: translateY(-36px) rotate(5deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-28px) rotate(-6deg); }
        }
      `}</style>
      {items.map(({ src, seed }) => (
        <Floater key={seed} src={src} seed={seed} />
      ))}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(200, 146, 90, 0.45)',
        backdropFilter: 'blur(2px)',
      }}>
        <h2 style={{
          fontFamily: "'Permanent Marker', cursive",
          fontSize: 'clamp(48px, 7vw, 80px)',
          color: '#1a1008',
          textAlign: 'center',
          lineHeight: 1.1,
          textShadow: '3px 3px 0 rgba(255,255,255,0.25)',
          userSelect: 'none',
        }}>
          The Memes<br />Are Real
        </h2>
      </div>
    </section>
  );
}

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#C8925A', fontFamily: "'Inter', sans-serif" }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 48px',
        background: 'rgba(180, 120, 65, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '2px solid rgba(0,0,0,0.15)',
      }}>
        <span style={{ fontFamily: "'Permanent Marker', cursive", fontSize: 22, color: '#1a1008', letterSpacing: 1 }}>
          $GARY
        </span>
        <div style={{ display: 'flex', gap: 32 }}>
          {['About', 'Tokenomics', 'Community'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              color: '#1a1008', textDecoration: 'none', fontWeight: 600,
              fontSize: 14, letterSpacing: 0.5, opacity: 0.8,
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
            >{l}</a>
          ))}
        </div>
        <a
          href={PUMP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#1a1008', color: '#C8925A',
            padding: '10px 22px', borderRadius: 8,
            fontWeight: 700, fontSize: 14, textDecoration: 'none',
            letterSpacing: 0.5,
          }}
        >
          Buy $GARY
        </a>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: 100,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', width: 600, height: 600, borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)', top: '10%', left: '-15%',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%',
          background: 'rgba(0,0,0,0.06)', bottom: '5%', right: '-10%',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, padding: '0 24px' }}>
          <div style={{
            display: 'inline-block',
            background: '#1a1008', color: '#C8925A',
            fontSize: 12, fontWeight: 700, letterSpacing: 3,
            padding: '6px 16px', borderRadius: 4, marginBottom: 24,
            textTransform: 'uppercase',
          }}>
            The People's Regulator
          </div>

          <img
            src="/hero.jpg"
            alt="Gury Gunsler"
            style={{
              display: 'block', margin: '0 auto 40px',
              maxWidth: 680, width: '100%',
              borderRadius: 16,
              boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
              border: '3px solid rgba(0,0,0,0.15)',
            }}
          />

          <h1 style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: 'clamp(64px, 10vw, 110px)',
            lineHeight: 1.0,
            color: '#1a1008',
            marginBottom: 24,
            textShadow: '4px 4px 0px rgba(255,255,255,0.2)',
          }}>
            Gury<br />Gunsler
          </h1>

          <p style={{
            fontSize: 20, fontWeight: 400, color: '#3d200a',
            maxWidth: 520, margin: '0 auto 32px',
            lineHeight: 1.6,
          }}>
            He didn't understand crypto.<br />
            So we made him the mascot.
          </p>

          {/* CA BOX */}
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: '#3d200a', opacity: 0.6, marginBottom: 10, textTransform: 'uppercase' }}>
              Contract Address
            </p>
            <CopyCA />
          </div>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={PUMP_URL} target="_blank" rel="noopener noreferrer" style={{
              background: '#1a1008', color: '#C8925A',
              padding: '16px 40px', borderRadius: 10,
              fontWeight: 800, fontSize: 16, textDecoration: 'none',
              letterSpacing: 0.5,
              boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.35)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
              }}
            >
              Buy on Pump.fun
            </a>
            <a href={X_URL} target="_blank" rel="noopener noreferrer" style={{
              background: 'transparent',
              border: '2px solid #1a1008',
              color: '#1a1008',
              padding: '16px 40px', borderRadius: 10,
              fontWeight: 700, fontSize: 16, textDecoration: 'none',
              letterSpacing: 0.5,
              transition: 'background 0.15s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.08)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
            >
              Follow on X
            </a>
          </div>
        </div>
      </section>

      {/* TICKER STRIP */}
      <div style={{
        background: '#1a1008', color: '#C8925A',
        padding: '14px 0', overflow: 'hidden',
        whiteSpace: 'nowrap',
        borderTop: '2px solid rgba(0,0,0,0.3)',
        borderBottom: '2px solid rgba(0,0,0,0.3)',
      }}>
        {[...Array(3)].map((_, i) => (
          <span key={i} style={{ display: 'inline-block', animation: 'ticker 20s linear infinite', animationDelay: `${i * -6.6}s` }}>
            {'$GARY ✦ NOT SECURITIES ✦ PROBABLY ✦ ENFORCEMENT ACTION ✦ REGULATED ✦ '.repeat(4)}
          </span>
        ))}
        <style>{`
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </div>

      <FloatingMemes />

      {/* ABOUT */}
      <section id="about" style={{ padding: '120px 24px', background: '#BA7F45' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: '#1a1008', color: '#C8925A',
            fontSize: 11, fontWeight: 700, letterSpacing: 3,
            padding: '6px 14px', borderRadius: 4, marginBottom: 20,
            textTransform: 'uppercase',
          }}>About</div>
          <h2 style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: 'clamp(42px, 6vw, 72px)',
            color: '#1a1008', marginBottom: 48, lineHeight: 1.1,
          }}>
            Who is Gury<br />Gunsler?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { emoji: '🔫', title: 'Trigger Happy', body: "Gury Gunsler's trigger finger has never met a crypto project it didn't want to regulate. Especially yours." },
              { emoji: '📋', title: 'Enforcement First', body: "Why provide clarity when you can just send a subpoena? Gury's rulebook has one rule: figure it out yourself." },
              { emoji: '👀', title: 'Always Watching', body: "Decentralized? Gury knows. Anonymous? Gury knows. On-chain? Gury definitely knows." },
            ].map(card => (
              <div key={card.title} style={{
                background: 'rgba(255,255,255,0.12)',
                border: '2px solid rgba(0,0,0,0.12)',
                borderRadius: 16, padding: '36px 28px',
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{card.emoji}</div>
                <h3 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: 22, color: '#1a1008', marginBottom: 12 }}>{card.title}</h3>
                <p style={{ color: '#3d200a', lineHeight: 1.7, fontSize: 15 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" style={{ padding: '120px 24px', background: '#C8925A' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            background: '#1a1008', color: '#C8925A',
            fontSize: 11, fontWeight: 700, letterSpacing: 3,
            padding: '6px 14px', borderRadius: 4, marginBottom: 20,
            textTransform: 'uppercase',
          }}>Tokenomics</div>
          <h2 style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: 'clamp(42px, 6vw, 72px)',
            color: '#1a1008', marginBottom: 16, lineHeight: 1.1,
          }}>The Numbers</h2>
          <p style={{ color: '#3d200a', fontSize: 18, margin: '0 auto 64px', maxWidth: 480 }}>
            Simple. Transparent. Gary-proof.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20, maxWidth: 800, margin: '0 auto 48px' }}>
            {[
              { label: 'Total Supply', value: '1B', sub: '$GARY' },
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

          {/* CA IN TOKENOMICS */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: '#3d200a', opacity: 0.6, textTransform: 'uppercase' }}>Contract Address</p>
            <CopyCA />
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" style={{ padding: '120px 24px', background: '#BA7F45', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: 'clamp(48px, 7vw, 80px)',
            color: '#1a1008', marginBottom: 24, lineHeight: 1.1,
          }}>
            Join the<br />Movement
          </h2>
          <p style={{ color: '#3d200a', fontSize: 18, marginBottom: 56, lineHeight: 1.6 }}>
            Gary can't stop us. He can try.<br />He will try.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'Twitter / X', href: X_URL },
              { label: 'Dexscreener', href: DEX_URL },
              { label: 'Pump.fun', href: PUMP_URL },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{
                background: '#1a1008', color: '#C8925A',
                padding: '14px 32px', borderRadius: 10,
                fontWeight: 700, fontSize: 15, textDecoration: 'none',
                letterSpacing: 0.5,
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                transition: 'transform 0.15s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = ''}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: '#1a1008', color: '#C8925A',
        padding: '40px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
      }}>
        <span style={{ fontFamily: "'Permanent Marker', cursive", fontSize: 20 }}>$GARY</span>
        <p style={{ opacity: 0.4, fontSize: 12, maxWidth: 500, textAlign: 'center', lineHeight: 1.5 }}>
          $GARY is a meme coin with no intrinsic value or expectation of financial return.
          This is satire. Gury Gunsler is a fictional character. Not financial advice.
        </p>
        <span style={{ opacity: 0.4, fontSize: 12 }}>© 2025 $GARY</span>
      </footer>

    </div>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
