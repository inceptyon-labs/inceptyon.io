// Per-project 1px-line schematics. 320x200 viewBox.
// Stroke: graphite (#363B45). Accent: filament (#E1925A). Tick mark: bone (#EBE6D7).
// Each schematic is a small abstract diagram tied to the project's domain — not literal.

const STROKE = '#363B45'
const ACCENT = '#E1925A'
const TICK = '#EBE6D7'

const Frame = ({ children, label }) => (
  <svg viewBox="0 0 320 200" className="h-auto w-full" role="img" aria-label={label}>
    <rect x="0.5" y="0.5" width="319" height="199" fill="none" stroke={STROKE} strokeWidth="1" />
    {/* corner tick marks */}
    <line x1="6" y1="6" x2="14" y2="6" stroke={TICK} strokeWidth="1" />
    <line x1="6" y1="6" x2="6" y2="14" stroke={TICK} strokeWidth="1" />
    <line x1="306" y1="6" x2="314" y2="6" stroke={TICK} strokeWidth="1" />
    <line x1="314" y1="6" x2="314" y2="14" stroke={TICK} strokeWidth="1" />
    <line x1="6" y1="186" x2="6" y2="194" stroke={TICK} strokeWidth="1" />
    <line x1="6" y1="194" x2="14" y2="194" stroke={TICK} strokeWidth="1" />
    <line x1="314" y1="186" x2="314" y2="194" stroke={TICK} strokeWidth="1" />
    <line x1="306" y1="194" x2="314" y2="194" stroke={TICK} strokeWidth="1" />
    {children}
  </svg>
)

const Unwyned = () => (
  <Frame label="Unwyned — flavor topology">
    {/* polar coordinate grid centered at 160,100 */}
    {[1, 2, 3, 4].map((r) => (
      <circle key={r} cx="160" cy="100" r={r * 18} fill="none" stroke={STROKE} strokeWidth="0.6" />
    ))}
    {[0, 30, 60, 90, 120, 150].map((deg) => {
      const rad = (deg * Math.PI) / 180
      const x1 = 160 + 80 * Math.cos(rad)
      const y1 = 100 + 80 * Math.sin(rad)
      const x2 = 160 - 80 * Math.cos(rad)
      const y2 = 100 - 80 * Math.sin(rad)
      return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={STROKE} strokeWidth="0.6" />
    })}
    {/* sample points */}
    {[
      [180, 76], [124, 88], [196, 122], [148, 130], [212, 96],
      [136, 70], [172, 138], [108, 110],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="2" fill={STROKE} />
    ))}
    {/* primary specimen */}
    <circle cx="190" cy="84" r="3.5" fill={ACCENT} />
    <line x1="190" y1="84" x2="160" y2="100" stroke={ACCENT} strokeWidth="0.8" strokeDasharray="2 2" />
  </Frame>
)

const Sequentyol = () => (
  <Frame label="Sequentyol — sequence step plot">
    {/* horizontal axis */}
    <line x1="20" y1="160" x2="300" y2="160" stroke={STROKE} strokeWidth="1" />
    <line x1="20" y1="160" x2="20" y2="30" stroke={STROKE} strokeWidth="1" />
    {/* axis ticks */}
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
      <line key={`x${i}`} x1={20 + i * 28} y1="160" x2={20 + i * 28} y2="164" stroke={STROKE} strokeWidth="0.6" />
    ))}
    {/* step plot — Collatz-ish sequence */}
    {(() => {
      const seq = [80, 40, 60, 30, 50, 25, 40, 20, 30, 15, 24]
      const points = seq.map((v, i) => `${20 + i * 28},${160 - v}`).join(' ')
      return <polyline points={points} fill="none" stroke={STROKE} strokeWidth="1" />
    })()}
    {/* sample plotted points */}
    {[80, 40, 60, 30, 50, 25, 40, 20, 30, 15, 24].map((v, i) => (
      <circle key={i} cx={20 + i * 28} cy={160 - v} r="2" fill={i === 0 ? ACCENT : STROKE} />
    ))}
  </Frame>
)

const Inceptyon = () => (
  <Frame label="INCEPTYON — Jovian system orbits">
    {/* central planet (Jupiter) */}
    <circle cx="160" cy="100" r="14" fill="none" stroke={STROKE} strokeWidth="1" />
    <circle cx="160" cy="100" r="2" fill={ACCENT} />
    {/* orbital paths */}
    {[32, 50, 72, 94].map((r) => (
      <circle key={r} cx="160" cy="100" r={r} fill="none" stroke={STROKE} strokeWidth="0.6" strokeDasharray="3 3" />
    ))}
    {/* moons */}
    <circle cx="192" cy="100" r="2.5" fill={STROKE} />
    <circle cx="160" cy="50" r="2.5" fill={STROKE} />
    <circle cx="120" cy="116" r="2.5" fill={STROKE} />
    <circle cx="222" cy="76" r="3" fill={ACCENT} />
    {/* labels via tiny ticks */}
    <line x1="222" y1="76" x2="232" y2="62" stroke={ACCENT} strokeWidth="0.6" />
  </Frame>
)

const Gargantua = () => (
  <Frame label="Gargantua — accretion disk">
    {/* perspective ellipses */}
    {[
      { rx: 110, ry: 22 },
      { rx: 90, ry: 18 },
      { rx: 70, ry: 14 },
      { rx: 50, ry: 10 },
    ].map((e, i) => (
      <ellipse key={i} cx="160" cy="100" rx={e.rx} ry={e.ry} fill="none" stroke={STROKE} strokeWidth="0.8" />
    ))}
    {/* central singularity */}
    <circle cx="160" cy="100" r="10" fill="#0E1218" stroke={STROKE} strokeWidth="1" />
    <circle cx="160" cy="100" r="3" fill={ACCENT} />
    {/* glow markers */}
    {[
      [60, 100], [260, 100], [120, 95], [200, 105],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="1.5" fill={ACCENT} />
    ))}
  </Frame>
)

const Mise = () => (
  <Frame label="Mise — preparation grid">
    {/* board grid */}
    {[40, 80, 120, 160, 200, 240, 280].map((x) => (
      <line key={`v${x}`} x1={x} y1="40" x2={x} y2="160" stroke={STROKE} strokeWidth="0.6" />
    ))}
    {[40, 70, 100, 130, 160].map((y) => (
      <line key={`h${y}`} x1="40" y1={y} x2="280" y2={y} stroke={STROKE} strokeWidth="0.6" />
    ))}
    <rect x="40" y="40" width="240" height="120" fill="none" stroke={STROKE} strokeWidth="1" />
    {/* mise items */}
    <rect x="48" y="48" width="20" height="14" fill={STROKE} opacity="0.4" />
    <rect x="80" y="80" width="32" height="10" fill={STROKE} opacity="0.4" />
    <rect x="124" y="48" width="14" height="20" fill={STROKE} opacity="0.4" />
    <rect x="170" y="100" width="40" height="12" fill={STROKE} opacity="0.4" />
    {/* knife angle */}
    <line x1="220" y1="48" x2="270" y2="100" stroke={ACCENT} strokeWidth="1" />
    <circle cx="270" cy="100" r="2" fill={ACCENT} />
  </Frame>
)

const GigaBrain = () => (
  <Frame label="GigaBrain — dungeon graph">
    {/* node tree */}
    {(() => {
      const nodes = [
        { x: 160, y: 30, k: 'root' },
        { x: 90, y: 80 }, { x: 230, y: 80 },
        { x: 50, y: 130 }, { x: 130, y: 130 },
        { x: 195, y: 130 }, { x: 270, y: 130 },
        { x: 30, y: 175 }, { x: 95, y: 175 },
        { x: 165, y: 175 }, { x: 230, y: 175 }, { x: 290, y: 175 },
      ]
      const edges = [
        [0, 1], [0, 2],
        [1, 3], [1, 4], [2, 5], [2, 6],
        [3, 7], [3, 8], [4, 9], [5, 10], [6, 11],
      ]
      return (
        <>
          {edges.map(([a, b], i) => (
            <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke={STROKE} strokeWidth="0.7" />
          ))}
          {nodes.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r={i === 0 ? 4 : 2.5} fill={i === 0 ? ACCENT : STROKE} />
          ))}
        </>
      )
    })()}
  </Frame>
)

const Insomnia = () => (
  <Frame label="Insomnia — telemetry waveform">
    {/* baseline */}
    <line x1="20" y1="100" x2="300" y2="100" stroke={STROKE} strokeWidth="0.6" strokeDasharray="2 4" />
    {/* gridlines */}
    {[40, 80, 120, 160].map((y) => (
      <line key={y} x1="20" y1={y} x2="300" y2={y} stroke={STROKE} strokeWidth="0.4" opacity="0.5" />
    ))}
    {/* heartbeat-ish trace */}
    {(() => {
      const pts = []
      for (let x = 20; x <= 300; x += 4) {
        const t = (x - 20) / 280
        const noise = Math.sin(t * 24) * 4 + Math.sin(t * 7) * 6
        let spike = 0
        if (Math.abs(t * 4 - 1.4) < 0.05) spike = -34
        else if (Math.abs(t * 4 - 1.5) < 0.05) spike = 22
        else if (Math.abs(t * 4 - 2.4) < 0.05) spike = -34
        else if (Math.abs(t * 4 - 2.5) < 0.05) spike = 22
        const y = 100 + noise + spike
        pts.push(`${x},${y}`)
      }
      return <polyline points={pts.join(' ')} fill="none" stroke={ACCENT} strokeWidth="1" />
    })()}
    {/* sample marker */}
    <circle cx="20" cy="100" r="2" fill={ACCENT} />
  </Frame>
)

const Lensing = () => (
  <Frame label="Lensing — refraction prism">
    {/* prism triangle */}
    <polygon points="160,40 120,160 200,160" fill="none" stroke={STROKE} strokeWidth="1" />
    {/* incoming ray */}
    <line x1="20" y1="90" x2="140" y2="100" stroke={STROKE} strokeWidth="1" />
    {/* refracted rays — fanning out */}
    {[-18, -10, -2, 6, 14].map((dy, i) => (
      <line key={i} x1="180" y1="118" x2="300" y2={140 + dy} stroke={i === 2 ? ACCENT : STROKE} strokeWidth={i === 2 ? 1 : 0.7} />
    ))}
    {/* source dot */}
    <circle cx="20" cy="90" r="2" fill={ACCENT} />
    {/* spectrum endpoints */}
    {[122, 130, 138, 146, 154].map((y, i) => (
      <circle key={i} cx="300" cy={y} r="1.4" fill={STROKE} />
    ))}
  </Frame>
)

const Xenodex = () => (
  <Frame label="Xenodex — phylogenetic tree">
    {/* root → branches */}
    <line x1="20" y1="100" x2="80" y2="100" stroke={STROKE} strokeWidth="1" />
    <line x1="80" y1="60" x2="80" y2="140" stroke={STROKE} strokeWidth="1" />
    {/* upper branch */}
    <line x1="80" y1="60" x2="140" y2="60" stroke={STROKE} strokeWidth="1" />
    <line x1="140" y1="40" x2="140" y2="80" stroke={STROKE} strokeWidth="1" />
    <line x1="140" y1="40" x2="220" y2="40" stroke={STROKE} strokeWidth="1" />
    <line x1="140" y1="80" x2="220" y2="80" stroke={STROKE} strokeWidth="1" />
    {/* lower branch */}
    <line x1="80" y1="140" x2="140" y2="140" stroke={STROKE} strokeWidth="1" />
    <line x1="140" y1="120" x2="140" y2="170" stroke={STROKE} strokeWidth="1" />
    <line x1="140" y1="120" x2="220" y2="120" stroke={STROKE} strokeWidth="1" />
    <line x1="140" y1="170" x2="220" y2="170" stroke={STROKE} strokeWidth="1" />
    {/* species nodes (leaves) */}
    {[
      [220, 40], [220, 80], [220, 120], [220, 170],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="2.5" fill={STROKE} />
    ))}
    {/* terminal labels (filament dot) */}
    {[40, 80, 120, 170].map((y, i) => (
      <line key={i} x1="220" y1={y} x2="240" y2={y} stroke={STROKE} strokeWidth="0.6" />
    ))}
    {/* unique specimen */}
    <circle cx="20" cy="100" r="3" fill={ACCENT} />
    <circle cx="80" cy="60" r="2" fill={STROKE} />
    <circle cx="80" cy="140" r="2" fill={STROKE} />
    {/* candidate */}
    <circle cx="245" cy="40" r="2" fill={ACCENT} />
  </Frame>
)

const Tenet = () => (
  <Frame label="Tenet — audit checklist">
    {/* rows of audit bars */}
    {(() => {
      const rows = [
        { y: 36, w: 220, score: 0.92 },
        { y: 56, w: 220, score: 0.78 },
        { y: 76, w: 220, score: 0.66 },
        { y: 96, w: 220, score: 0.84 },
        { y: 116, w: 220, score: 0.51 },
        { y: 136, w: 220, score: 0.94 },
        { y: 156, w: 220, score: 0.72 },
      ]
      return rows.map((r, i) => (
        <g key={i}>
          {/* row indicator */}
          <rect x="40" y={r.y - 4} width="8" height="8" fill="none" stroke={STROKE} strokeWidth="0.8" />
          {/* track */}
          <rect x="56" y={r.y - 1} width={r.w} height="2" fill={STROKE} opacity="0.4" />
          {/* fill */}
          <rect x="56" y={r.y - 1} width={r.w * r.score} height="2" fill={r.score < 0.6 ? ACCENT : STROKE} />
          {/* score tick */}
          <line
            x1={56 + r.w * r.score}
            y1={r.y - 4}
            x2={56 + r.w * r.score}
            y2={r.y + 4}
            stroke={r.score < 0.6 ? ACCENT : STROKE}
            strokeWidth="1"
          />
        </g>
      ))
    })()}
    {/* legend tick */}
    <line x1="40" y1="180" x2="276" y2="180" stroke={STROKE} strokeWidth="0.6" />
  </Frame>
)

const PASIV = () => (
  <Frame label="PASIV — pipeline dataflow">
    {/* stages */}
    {(() => {
      const stages = [
        { x: 30, y: 90, label: 'IDEA' },
        { x: 100, y: 90 },
        { x: 170, y: 90 },
        { x: 240, y: 90 },
        { x: 295, y: 90, accent: true },
      ]
      return (
        <>
          {/* connecting baseline */}
          <line x1="30" y1="100" x2="295" y2="100" stroke={STROKE} strokeWidth="0.6" />
          {/* nodes */}
          {stages.map((s, i) => (
            <g key={i}>
              <rect x={s.x - 10} y={s.y} width="20" height="20" fill="none" stroke={STROKE} strokeWidth="1" />
              <circle cx={s.x} cy={s.y + 10} r="2.5" fill={s.accent ? ACCENT : STROKE} />
            </g>
          ))}
          {/* arrows between */}
          {[60, 130, 200, 268].map((x, i) => (
            <g key={i}>
              <line x1={x - 10} y1="100" x2={x + 10} y2="100" stroke={STROKE} strokeWidth="0.7" />
              <polygon points={`${x + 10},100 ${x + 5},96 ${x + 5},104`} fill={STROKE} />
            </g>
          ))}
          {/* sub-feedback loops */}
          <path d="M 240 100 Q 170 50 100 100" fill="none" stroke={ACCENT} strokeWidth="0.6" strokeDasharray="2 3" />
        </>
      )
    })()}
  </Frame>
)

const TARS = () => (
  <Frame label="TARS — profile matrix">
    {/* profile matrix grid */}
    {(() => {
      const cols = 7
      const rows = 4
      const cellW = 30
      const cellH = 22
      const x0 = 50
      const y0 = 50
      const cells = []
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          cells.push({
            x: x0 + c * cellW,
            y: y0 + r * cellH,
            on: (r + c) % 3 === 0,
            primary: r === 1 && c === 3,
          })
        }
      }
      return (
        <>
          {cells.map((c, i) => (
            <rect
              key={i}
              x={c.x}
              y={c.y}
              width={cellW - 2}
              height={cellH - 2}
              fill={c.primary ? ACCENT : c.on ? STROKE : 'none'}
              opacity={c.primary ? 1 : c.on ? 0.5 : 1}
              stroke={STROKE}
              strokeWidth="0.6"
            />
          ))}
          {/* row labels (ticks) */}
          {Array.from({ length: rows }).map((_, r) => (
            <line key={r} x1={x0 - 12} y1={y0 + r * cellH + cellH / 2 - 1} x2={x0 - 4} y2={y0 + r * cellH + cellH / 2 - 1} stroke={STROKE} strokeWidth="0.7" />
          ))}
          {/* col labels (ticks) */}
          {Array.from({ length: cols }).map((_, c) => (
            <line key={c} x1={x0 + c * cellW + cellW / 2 - 1} y1={y0 - 10} x2={x0 + c * cellW + cellW / 2 - 1} y2={y0 - 4} stroke={STROKE} strokeWidth="0.7" />
          ))}
        </>
      )
    })()}
  </Frame>
)

const GulfCoastHackers = () => (
  <Frame label="Gulf Coast Hackers — fairway plot">
    {/* fairway centerline */}
    <path d="M 30 170 Q 100 130 170 110 Q 240 90 290 50" fill="none" stroke={STROKE} strokeWidth="1" />
    {/* fairway boundaries (rough) */}
    <path d="M 20 178 Q 95 138 170 118 Q 245 98 295 60" fill="none" stroke={STROKE} strokeWidth="0.6" strokeDasharray="3 3" />
    <path d="M 40 162 Q 105 122 170 102 Q 235 82 285 42" fill="none" stroke={STROKE} strokeWidth="0.6" strokeDasharray="3 3" />
    {/* tee box */}
    <rect x="22" y="166" width="14" height="10" fill="none" stroke={STROKE} strokeWidth="1" />
    <line x1="29" y1="166" x2="29" y2="158" stroke={STROKE} strokeWidth="0.7" />
    {/* shot trajectories */}
    <path d="M 30 170 Q 90 80 168 120" fill="none" stroke={STROKE} strokeWidth="0.7" strokeDasharray="2 2" />
    <path d="M 168 120 Q 220 70 285 60" fill="none" stroke={STROKE} strokeWidth="0.7" strokeDasharray="2 2" />
    {/* landing markers */}
    <circle cx="168" cy="120" r="2" fill={STROKE} />
    {/* sand bunker */}
    <ellipse cx="200" cy="135" rx="14" ry="6" fill="none" stroke={STROKE} strokeWidth="0.6" />
    {/* green */}
    <ellipse cx="285" cy="55" rx="18" ry="9" fill="none" stroke={STROKE} strokeWidth="1" />
    {/* pin */}
    <line x1="285" y1="55" x2="285" y2="40" stroke={ACCENT} strokeWidth="1" />
    <polygon points="285,40 293,42 285,44" fill={ACCENT} />
    {/* hole */}
    <circle cx="285" cy="55" r="2" fill={ACCENT} />
  </Frame>
)

const FoodieMerge = () => (
  <Frame label="FoodieMerge — merge-2 board">
    {/* 5x4 board grid */}
    {(() => {
      const cols = 5
      const rows = 4
      const cellW = 36
      const cellH = 32
      const x0 = 70
      const y0 = 38
      return (
        <>
          <rect x={x0} y={y0} width={cols * cellW} height={rows * cellH} fill="none" stroke={STROKE} strokeWidth="1" />
          {Array.from({ length: cols - 1 }).map((_, c) => (
            <line key={`v${c}`} x1={x0 + (c + 1) * cellW} y1={y0} x2={x0 + (c + 1) * cellW} y2={y0 + rows * cellH} stroke={STROKE} strokeWidth="0.6" />
          ))}
          {Array.from({ length: rows - 1 }).map((_, r) => (
            <line key={`h${r}`} x1={x0} y1={y0 + (r + 1) * cellH} x2={x0 + cols * cellW} y2={y0 + (r + 1) * cellH} stroke={STROKE} strokeWidth="0.6" />
          ))}
          {/* board tokens — circles of varied tiers */}
          {[
            [0, 0, 4], [2, 0, 6], [4, 1, 5],
            [1, 2, 7], [3, 3, 5], [0, 3, 6],
          ].map(([c, r, rad], i) => (
            <circle
              key={i}
              cx={x0 + c * cellW + cellW / 2}
              cy={y0 + r * cellH + cellH / 2}
              r={rad}
              fill="none"
              stroke={STROKE}
              strokeWidth="0.8"
            />
          ))}
          {/* the merge — two equal tokens combining into one accent token */}
          {(() => {
            const ax = x0 + 1 * cellW + cellW / 2
            const ay = y0 + 1 * cellH + cellH / 2
            const bx = x0 + 2 * cellW + cellW / 2
            const by = ay
            return (
              <>
                <circle cx={ax} cy={ay} r="6" fill="none" stroke={ACCENT} strokeWidth="1" />
                <circle cx={bx} cy={by} r="6" fill="none" stroke={ACCENT} strokeWidth="1" />
                <line x1={ax + 7} y1={ay} x2={bx - 7} y2={by} stroke={ACCENT} strokeWidth="0.7" strokeDasharray="2 2" />
                <line x1={(ax + bx) / 2} y1={ay - 12} x2={(ax + bx) / 2} y2={y0 - 8} stroke={ACCENT} strokeWidth="0.7" strokeDasharray="2 2" />
                <circle cx={(ax + bx) / 2} cy={y0 - 12} r="4" fill={ACCENT} />
              </>
            )
          })()}
        </>
      )
    })()}
  </Frame>
)

const SCHEMATICS = {
  unwyned: Unwyned,
  sequentyol: Sequentyol,
  inceptyon: Inceptyon,
  gargantua: Gargantua,
  mise: Mise,
  gigabrain: GigaBrain,
  insomnia: Insomnia,
  lensing: Lensing,
  xenodex: Xenodex,
  gulfcoasthackers: GulfCoastHackers,
  tenet: Tenet,
  pasiv: PASIV,
  tars: TARS,
  foodymerge: FoodieMerge,
}

export default function DossierSchematic({ slug }) {
  const Component = SCHEMATICS[slug]
  if (!Component) return null
  return <Component />
}
