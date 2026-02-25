import { cn } from '@/lib/utils';

export interface CarouselSlideData {
  slide_number: number;
  title: string;
  subtitle?: string;
  bullets?: string[];
  type: 'hook' | 'inputs' | 'engine' | 'results' | 'cta';
  icon?: string;
  visual_notes?: string;
  backgroundImage?: string;
  imagePosition?: 'background' | 'center' | 'bottom';
  imageOpacity?: number;
}

interface CarouselSlideProps {
  slide: CarouselSlideData;
  className?: string;
}

const slideTypeStyles: Record<string, { bg: string; accent: string; accentHsl: string }> = {
  hook: {
    bg: 'from-slate-900 via-blue-900 to-indigo-900',
    accent: 'text-blue-400',
    accentHsl: '217 91% 60%'
  },
  inputs: {
    bg: 'from-slate-900 via-blue-900 to-blue-800',
    accent: 'text-sky-400',
    accentHsl: '198 93% 60%'
  },
  engine: {
    bg: 'from-slate-900 via-indigo-900 to-purple-900',
    accent: 'text-purple-400',
    accentHsl: '270 95% 75%'
  },
  results: {
    bg: 'from-slate-900 via-blue-900 to-emerald-900',
    accent: 'text-emerald-400',
    accentHsl: '160 84% 39%'
  },
  cta: {
    bg: 'from-orange-600 via-orange-500 to-amber-500',
    accent: 'text-white',
    accentHsl: '0 0% 100%'
  },
};

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ slide, className }) => {
  const styles = slideTypeStyles[slide.type] || slideTypeStyles.hook;
  const totalSlides = 5;

  return (
    <div
      className={cn(
        'w-[1080px] h-[1350px] bg-gradient-to-br flex flex-col relative overflow-hidden',
        styles.bg,
        className
      )}
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {slide.backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              opacity: slide.imageOpacity || 0.3
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-indigo-900/80" />
        </>
      )}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl" />
        {slide.type === 'cta' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl" />
        )}
      </div>

      <div className="relative z-10 flex flex-col h-full p-16">
        <div className="flex justify-between items-center mb-8">
          <div className={cn('text-lg font-semibold tracking-wide uppercase', styles.accent)}>
            {slide.type === 'hook' && '🚀 SEO Automation'}
            {slide.type === 'inputs' && '🔌 Connections'}
            {slide.type === 'engine' && '⚙️ The Engine'}
            {slide.type === 'results' && '📈 Results'}
            {slide.type === 'cta' && '💬 Get Started'}
          </div>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'w-3 h-3 rounded-full transition-all',
                  i + 1 === slide.slide_number
                    ? 'bg-white scale-110'
                    : 'bg-white/30'
                )}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {slide.icon && (
            <div className="text-[120px] mb-8 drop-shadow-lg">{slide.icon}</div>
          )}

          <h2 className={cn(
            'font-bold text-white mb-6 leading-tight tracking-tight',
            slide.type === 'cta' ? 'text-6xl' : 'text-7xl'
          )}>
            {slide.title}
          </h2>

          {slide.subtitle && (
            <p className={cn(
              'text-3xl font-medium mb-12 max-w-3xl',
              styles.accent
            )}>
              {slide.subtitle}
            </p>
          )}

          {slide.bullets && slide.bullets.length > 0 && (
            <ul className="space-y-5 text-left w-full max-w-2xl mx-auto">
              {slide.bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="flex items-start gap-5 text-2xl text-white/90"
                >
                  <span className={cn(
                    'flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-xl font-bold border border-white/20',
                    styles.accent
                  )}>
                    {index + 1}
                  </span>
                  <span className="pt-1.5 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <span className="text-2xl">📊</span>
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-xl">pSEO Agency</div>
              <div className="text-white/60 text-sm">Programmatic SEO Solutions</div>
            </div>
          </div>
          <div className="text-white/40 text-lg font-medium">
            programmaticseo.agency
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
