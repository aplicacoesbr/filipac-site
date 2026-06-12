import { useEffect, useRef } from 'react'

// Orthographic globe wireframe — latitude and longitude lines
// Center (100,100), radius 85, viewBox 0 0 200 200
const LINES = [
  // ── Outer circle ──
  { tag: 'circle', props: { cx: 100, cy: 100, r: 85 } },

  // ── Latitude lines (horizontal ellipses) ──
  { tag: 'ellipse', props: { cx: 100, cy: 100, rx: 85, ry: 22 } }, // equator
  { tag: 'ellipse', props: { cx: 100, cy:  57, rx: 74, ry: 19 } }, // 30°N
  { tag: 'ellipse', props: { cx: 100, cy: 143, rx: 74, ry: 19 } }, // 30°S
  { tag: 'ellipse', props: { cx: 100, cy:  26, rx: 43, ry: 11 } }, // 60°N
  { tag: 'ellipse', props: { cx: 100, cy: 174, rx: 43, ry: 11 } }, // 60°S

  // ── Longitude lines (vertical ellipses) ──
  { tag: 'ellipse', props: { cx: 100, cy: 100, rx: 22, ry: 85 } }, // 15°
  { tag: 'ellipse', props: { cx: 100, cy: 100, rx: 43, ry: 85 } }, // 30°
  { tag: 'ellipse', props: { cx: 100, cy: 100, rx: 63, ry: 85 } }, // 48°
]

export default function GlobeBackground() {
  const svgRef = useRef(null)

  useEffect(() => {
    const els = svgRef.current.querySelectorAll('[data-draw]')
    els.forEach((el, i) => {
      const len = el.getTotalLength()
      el.style.strokeDasharray = len
      el.style.strokeDashoffset = len

      el.animate(
        [
          { strokeDashoffset: len  },  // invisible
          { strokeDashoffset: 0    },  // fully drawn
          { strokeDashoffset: 0    },  // hold
          { strokeDashoffset: -len },  // erase from tail
        ],
        {
          duration: 7000,
          delay: i * 350,
          easing: 'ease-in-out',
          iterations: Infinity,
        }
      )
    })
  }, [])

  return (
    <svg
      ref={svgRef}
      className="globe-bg"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="globe-clip">
          <circle cx="100" cy="100" r="85" />
        </clipPath>
      </defs>

      {/* Clipped inner lines */}
      <g clipPath="url(#globe-clip)" fill="none" stroke="currentColor" strokeWidth="0.7">
        {LINES.slice(1).map((l, i) => {
          const Tag = l.tag
          return <Tag key={i} data-draw {...l.props} />
        })}
      </g>

      {/* Outer circle — no clip needed */}
      <circle data-draw cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
