type LaserFieldProps = {
  color?: string
  opacity?: number
  blur?: number
  speed?: number
}

// Bar vertikal dengan tinggi & posisi bervariasi (deterministik, tidak pakai Math.random
// supaya tidak berubah-ubah tiap render)
const BAR_COUNT = 32
const laserBars = Array.from({ length: BAR_COUNT }).map((_, i) => {
  const seed = (i * 47) % 100
  return {
    left: `${(i / BAR_COUNT) * 100 + (seed % 3) - 1}%`,
    height: `${18 + (seed % 70)}%`,
    delay: `-${(seed % 40) / 10}s`,
    duration: 2.2 + (seed % 26) / 10,
    width: seed % 3 === 0 ? '2px' : '1.5px',
  }
})

const laserSpots = [
  { top: '10%', left: '8%', size: '4px', delay: '0s' },
  { top: '6%', left: '22%', size: '3px', delay: '-2s' },
  { top: '14%', left: '35%', size: '5px', delay: '-4s' },
  { top: '4%', left: '48%', size: '3px', delay: '-1s' },
  { top: '18%', left: '58%', size: '6px', delay: '-3s' },
  { top: '8%', left: '68%', size: '4px', delay: '-5s' },
  { top: '20%', left: '78%', size: '5px', delay: '-2.5s' },
  { top: '12%', left: '90%', size: '3px', delay: '-1.5s' },
  { top: '28%', left: '15%', size: '3px', delay: '-3.5s' },
  { top: '32%', left: '62%', size: '4px', delay: '-0.5s' },
]

function LaserField({
  color = '#FFE174',
  opacity = 0.4,
  blur = 6,
  speed = 1,
}: LaserFieldProps) {
  const safeOpacity = Math.max(0, Math.min(1, opacity))

  return (
    <div
      className="laser-field"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow di dasar */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '55%',
          background: `radial-gradient(ellipse 70% 100% at 50% 100%, rgba(255,225,116,${safeOpacity * 0.55}) 0%, transparent 70%)`,
          filter: `blur(${blur * 2}px)`,
        }}
      />

      {/* Bar vertikal (equalizer style) */}
      {laserBars.map((bar, index) => (
        <span
          key={index}
          style={{
            position: 'absolute',
            bottom: 0,
            left: bar.left,
            width: bar.width,
            height: bar.height,
            background: `linear-gradient(to top, ${color} 0%, rgba(255,225,116,${safeOpacity * 0.6}) 45%, transparent 100%)`,
            opacity: safeOpacity,
            filter: `blur(${blur}px)`,
            borderRadius: '9999px',
            transformOrigin: 'bottom',
            animation: `laser-beam-pulse ${bar.duration / speed}s ease-in-out infinite`,
            animationDelay: bar.delay,
          }}
        />
      ))}

      {/* Partikel titik melayang */}
      {laserSpots.map((spot, index) => (
        <span
          key={index}
          style={{
            position: 'absolute',
            top: spot.top,
            left: spot.left,
            width: spot.size,
            height: spot.size,
            backgroundColor: color,
            opacity: safeOpacity,
            filter: `blur(${Math.round(blur / 3)}px)`,
            boxShadow: `0 0 ${blur * 2}px ${color}`,
            borderRadius: '9999px',
            animation: `laser-field-glow ${14 / speed}s ease-in-out ${spot.delay} infinite alternate`,
          }}
        />
      ))}
    </div>
  )
}

export default LaserField