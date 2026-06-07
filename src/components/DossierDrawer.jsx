import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNow } from '../hooks/useNow'
import {
  formatYMD,
  formatUTCClock,
  met,
  metAgo,
  LAB_LOCATION,
} from '../lib/studio'
import CoordinateBreadcrumb from './CoordinateBreadcrumb'
import DossierSchematic from './DossierSchematic'
import { PROJECT_TOTAL } from '../lib/projects'

const STATUS_COLOR = {
  DEPLOYED: 'text-phosphor border-phosphor',
  ACTIVE: 'text-filament border-filament',
  'IN-DEVELOPMENT': 'text-bone border-steel',
  CONCEPT: 'text-steel border-graphite',
  ARCHIVED: 'text-steel border-graphite opacity-70',
  DECOMMISSIONED: 'text-caution border-caution',
}

export default function DossierDrawer({ project, open, onClose }) {
  const now = useNow(1000)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          key="drawer-root"
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0.2, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label={`Dossier ${project.code} — ${project.title}`}
        >
          {/* Backdrop — parent at ~30% behind */}
          <div
            className="absolute inset-0 bg-ink/70 backdrop-blur-[1px]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.div
            className="absolute inset-y-0 right-0 flex h-full w-full max-w-[920px] flex-col border-l border-graphite bg-ink"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0.2, 1] }}
          >
            {/* L1 strip — studio identity, persistent */}
            <header className="shrink-0 border-b border-graphite px-6 py-4 md:px-10">
              <div className="mono-caps tabular flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[10px] text-slate">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span>INCEPTYON LABS</span>
                  <span aria-hidden="true" className="text-graphite">/</span>
                  <span className="time-element">{formatUTCClock(now)}</span>
                  <span aria-hidden="true" className="text-graphite">/</span>
                  <span>{LAB_LOCATION}</span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="mono-caps text-[11px] text-slate transition-colors duration-instrument ease-instrument hover:text-filament"
                  aria-label="Close dossier"
                >
                  CLOSE [ESC]
                </button>
              </div>
              <CoordinateBreadcrumb
                className="mt-3"
                segments={[
                  { label: 'INCEPTYON LABS' },
                  { label: 'DOSSIERS' },
                  { label: `${project.code} — ${project.title.toUpperCase()}` },
                ]}
              />
            </header>

            {/* Scrollable body */}
            <div className="min-h-0 flex-1 overflow-y-auto">
              <div className="px-6 py-10 md:px-10 md:py-14">
                {/* L2 — DOSSIER frame */}
                <section className="frame-l2 p-6 md:p-8">
                  <div className="mono-caps tabular flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-graphite pb-4 text-[10px] text-slate">
                    <span>DOSSIER {project.code} / {String(PROJECT_TOTAL).padStart(2, '0')}</span>
                    <span aria-hidden="true" className="text-graphite">/</span>
                    <span>DOMAIN: {project.domain}</span>
                    <span aria-hidden="true" className="text-graphite">/</span>
                    <span
                      className={`inline-flex items-center border px-2 py-0.5 text-[10px] tracking-[0.1em] ${STATUS_COLOR[project.status] ?? STATUS_COLOR.CONCEPT}`}
                    >
                      {project.status}
                    </span>
                    <span aria-hidden="true" className="text-graphite">/</span>
                    <span className="time-element text-bone">
                      {met(project.established_on, now, 0).replace('.0D', 'D')}
                    </span>
                  </div>

                  <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-start md:gap-12">
                    <div>
                      <h2 className="display text-[clamp(2.5rem,6vw,4rem)] leading-[0.95]" style={{ fontWeight: 900 }}>
                        {project.title}
                      </h2>
                      {project.subtitle && (
                        <p className="mono-caps mt-3 text-[12px] text-slate">
                          {project.subtitle}
                        </p>
                      )}
                      <p className="prose-body mt-6 max-w-[60ch] text-lg leading-[1.5] text-bone">
                        {project.classification}
                      </p>
                      {project.signal && (
                        <p className="mt-3 text-base italic text-slate">
                          “{project.signal}”
                        </p>
                      )}
                    </div>

                    {/* Logo plate */}
                    <div className="w-full max-w-[180px] md:w-[180px]">
                      <div className="mono-caps tabular mb-2 text-[10px] text-steel">
                        PLATE 01 / MARK
                      </div>
                      <div className="flex aspect-square items-center justify-center border border-graphite bg-carbon p-6">
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <p className="prose-body mt-10 max-w-[68ch] text-base leading-[1.7] text-slate">
                    {project.description}
                  </p>

                  {/* L3.1 — METADATA */}
                  <section className="frame-l3 mt-10 p-5 md:p-6">
                    <div className="mono-caps tabular flex items-center justify-between border-b border-graphite pb-3 text-[10px]">
                      <span className="text-slate">{project.code}.1 / METADATA</span>
                      <span className="text-steel">SOURCE: STUDIO RECORD</span>
                    </div>
                    <dl className="mono-caps tabular mt-4 grid gap-x-8 gap-y-3 text-[11px] sm:grid-cols-[140px_1fr]">
                      <dt className="text-steel">TYPE</dt>
                      <dd className="text-bone">{project.classification}</dd>

                      <dt className="text-steel">DOMAIN</dt>
                      <dd className="text-bone">{project.domain}</dd>

                      <dt className="text-steel">INSTANCES</dt>
                      <dd className="text-bone">{project.instances.join(' · ')}</dd>

                      <dt className="text-steel">STACK</dt>
                      <dd className="text-bone">{project.stack.join(' · ')}</dd>

                      <dt className="text-steel">ESTABLISHED</dt>
                      <dd className="text-bone time-element">
                        {formatYMD(project.established_on)}
                      </dd>

                      <dt className="text-steel">LATEST RELEASE</dt>
                      <dd className="text-bone time-element">
                        {formatYMD(project.latest_release)}
                        <span className="mx-2 text-graphite">/</span>
                        <span className="text-slate">{metAgo(project.latest_release, now)}</span>
                      </dd>

                      <dt className="text-steel">STATUS</dt>
                      <dd>
                        <span
                          className={`mono-caps inline-flex items-center border px-2 py-0.5 text-[10px] tracking-[0.1em] ${STATUS_COLOR[project.status] ?? STATUS_COLOR.CONCEPT}`}
                        >
                          {project.status}
                          <span className="mx-1.5 opacity-50">·</span>
                          <span className="time-element">
                            {met(project.established_on, now, 0).replace('.0D', 'D')}
                          </span>
                        </span>
                      </dd>
                    </dl>
                  </section>

                  {/* L3.2 — SCHEMATIC */}
                  <section className="frame-l3 mt-6 p-5 md:p-6">
                    <div className="mono-caps tabular flex items-center justify-between border-b border-graphite pb-3 text-[10px]">
                      <span className="text-slate">{project.code}.2 / SCHEMATIC</span>
                      <span className="text-steel">REGISTRATION</span>
                    </div>
                    <div className="mt-5">
                      <DossierSchematic slug={project.slug} />
                    </div>
                    <p className="mono-caps tabular mt-4 text-[10px] text-steel">
                      FIG. {project.code}.A / {project.domain}
                    </p>
                  </section>

                  {/* L3.3 — ACCESS */}
                  <section className="frame-l3 mt-6 p-5 md:p-6">
                    <div className="mono-caps tabular flex items-center justify-between border-b border-graphite pb-3 text-[10px]">
                      <span className="text-slate">{project.code}.3 / ACCESS</span>
                      <span className="text-steel">EXTERNAL</span>
                    </div>
                    {project.links.length === 0 ? (
                      <p className="mono-caps tabular mt-4 text-[11px] text-steel">
                        NO PUBLIC ACCESS · DEVELOPMENT IN PROGRESS
                      </p>
                    ) : (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-filament btn-bracket text-[11px]"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </section>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
