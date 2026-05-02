'use client'

/**
 * Shared decorative layer — film roll strips, floating palette swatches,
 * timeline scrubber, and tool icons. Drop inside any section as a sibling
 * to the content (position: absolute, pointer-events: none).
 *
 * Usage:
 *   <section className="relative overflow-hidden">
 *     <GraphicsDecorations variant="filmroll" />
 *     ...content...
 *   </section>
 */

interface Props {
  /** Which decorations to show */
  variant?: 'filmroll' | 'palette' | 'timeline' | 'tools' | 'all'
  /** Opacity multiplier 0–1 */
  opacity?: number
}

const SWATCHES = [
  '#FACC15','#FDE047','#F97316','#EF4444',
  '#EC4899','#8B5CF6','#3B82F6','#22C55E',
  '#FFFFFF','#94A3B8',
]

const FILM_ICONS = ['🎨','🎬','✂️','🖌️','📽️','🎞️','🖼️','⚡','🎭','💡']

// 20 frames × 2 tracks = seamless loop
const FRAMES = Array.from({ length: 20 }, (_, i) => i)

export default function GraphicsDecorations({ variant = 'all', opacity = 1 }: Props) {
  const show = (v: string) => variant === 'all' || variant === v

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true"
      style={{ opacity, zIndex: 0 }}
    >

      {/* ── Film roll — top ── */}
      {show('filmroll') && (
        <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
          <div className="flex gfx-film-march" style={{ width: 'max-content' }}>
            {[...FRAMES, ...FRAMES].map((i, idx) => (
              <div key={idx}
                className="relative shrink-0 flex items-center justify-center"
                style={{
                  width: 48, height: 48,
                  background: idx % 3 === 0 ? 'rgba(250,204,21,0.07)' : 'rgba(255,255,255,0.02)',
                  borderRight: '1px solid rgba(250,204,21,0.07)',
                }}
              >
                {/* Sprocket holes */}
                <div className="absolute left-0.5 top-0.5 w-1.5 h-1.5 rounded-sm" style={{ background: 'rgba(250,204,21,0.18)' }} />
                <div className="absolute left-0.5 bottom-0.5 w-1.5 h-1.5 rounded-sm" style={{ background: 'rgba(250,204,21,0.18)' }} />
                <div className="absolute right-0.5 top-0.5 w-1.5 h-1.5 rounded-sm" style={{ background: 'rgba(250,204,21,0.18)' }} />
                <div className="absolute right-0.5 bottom-0.5 w-1.5 h-1.5 rounded-sm" style={{ background: 'rgba(250,204,21,0.18)' }} />
                {/* Frame emoji */}
                <span className="text-[11px] select-none" style={{ opacity: 0.35 }}>
                  {FILM_ICONS[i % FILM_ICONS.length]}
                </span>
              </div>
            ))}
          </div>
          {/* Scan line */}
          <div className="gfx-scan absolute left-0 right-0 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(250,204,21,0.5), transparent)' }} />
        </div>
      )}

      {/* ── Film roll — bottom ── */}
      {show('filmroll') && (
        <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
          <div className="flex" style={{ width: 'max-content', animation: 'gfx-film-march 20s linear infinite reverse' }}>
            {[...FRAMES, ...FRAMES].map((i, idx) => (
              <div key={idx}
                className="relative shrink-0 flex items-center justify-center"
                style={{
                  width: 48, height: 48,
                  background: idx % 2 === 0 ? 'rgba(250,204,21,0.04)' : 'rgba(255,255,255,0.015)',
                  borderRight: '1px solid rgba(250,204,21,0.05)',
                }}
              >
                <div className="absolute left-0.5 top-0.5 w-1.5 h-1.5 rounded-sm" style={{ background: 'rgba(250,204,21,0.12)' }} />
                <div className="absolute left-0.5 bottom-0.5 w-1.5 h-1.5 rounded-sm" style={{ background: 'rgba(250,204,21,0.12)' }} />
                <div className="absolute right-0.5 top-0.5 w-1.5 h-1.5 rounded-sm" style={{ background: 'rgba(250,204,21,0.12)' }} />
                <div className="absolute right-0.5 bottom-0.5 w-1.5 h-1.5 rounded-sm" style={{ background: 'rgba(250,204,21,0.12)' }} />
                <span className="text-[11px] select-none" style={{ opacity: 0.25 }}>
                  {FILM_ICONS[(i + 5) % FILM_ICONS.length]}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Colour palette — left edge ── */}
      {show('palette') && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1.5">
          <span className="text-[7px] font-mono uppercase tracking-widest mb-1 rotate-180"
            style={{ writingMode: 'vertical-rl', color: 'rgba(250,204,21,0.3)' }}>Palette</span>
          {SWATCHES.map((color, i) => (
            <div key={color}
              className="w-4 h-4 rounded-md border gfx-float-c"
              style={{
                background: color,
                borderColor: 'rgba(255,255,255,0.12)',
                animationDelay: `${i * 0.18}s`,
                boxShadow: `0 0 5px ${color}44`,
              }}
            />
          ))}
        </div>
      )}

      {/* ── Timeline scrubber — right edge ── */}
      {show('timeline') && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1">
          <span className="text-[7px] font-mono uppercase tracking-widest mb-1"
            style={{ color: 'rgba(250,204,21,0.3)' }}>Timeline</span>
          {/* Track */}
          <div className="relative w-1.5 rounded-full overflow-visible"
            style={{ height: 180, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(250,204,21,0.1)' }}
          >
            {/* Tick marks */}
            {[0, 25, 50, 75, 100].map((pct) => (
              <div key={pct} className="absolute left-0 right-0 h-px"
                style={{ top: `${pct}%`, background: 'rgba(250,204,21,0.25)' }} />
            ))}
            {/* Animated playhead */}
            <div className="gfx-playhead absolute left-0 right-0 h-5 rounded-full"
              style={{ top: '30%', background: 'linear-gradient(to bottom, #FACC15, #F97316)', boxShadow: '0 0 8px rgba(250,204,21,0.7)' }} />
          </div>
          {/* Time labels */}
          {['00:00','00:15','00:30','00:45','01:00'].map((t) => (
            <span key={t} className="text-[7px] font-mono tabular-nums" style={{ color: 'rgba(250,204,21,0.2)' }}>{t}</span>
          ))}
        </div>
      )}

      {/* ── Floating tool icons — scattered ── */}
      {show('tools') && (
        <>
          {[
            { emoji: '🎨', x: '6%',  y: '20%', cls: 'gfx-float-a', delay: '0s' },
            { emoji: '✂️', x: '91%', y: '15%', cls: 'gfx-float-b', delay: '1s' },
            { emoji: '🎬', x: '4%',  y: '75%', cls: 'gfx-float-c', delay: '0.5s' },
            { emoji: '🖌️', x: '93%', y: '70%', cls: 'gfx-float-a', delay: '1.5s' },
            { emoji: '📽️', x: '48%', y: '5%',  cls: 'gfx-float-b', delay: '2s' },
          ].map((t) => (
            <div key={t.emoji + t.x}
              className={`absolute hidden xl:block text-2xl select-none ${t.cls}`}
              style={{ left: t.x, top: t.y, animationDelay: t.delay, opacity: 0.18 }}
            >
              {t.emoji}
            </div>
          ))}
        </>
      )}

    </div>
  )
}
