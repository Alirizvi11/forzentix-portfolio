import { useEffect, useState } from "react";

interface MeteorProps {
  id: number;
  delay: number;
}

interface FloatingElementProps {
  id: number;
  delay: number;
  size: number;
  color: string;
}

const Meteor = ({ id, delay }: MeteorProps) => {
  return (
    <div
      className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
      style={{
        left: `${Math.random() * 100}%`,
        top: `-5px`,
        animationDelay: `${delay}s`,
        animation: 'meteor 4s linear infinite',
        boxShadow: '0 0 10px #8B5DFF, 0 0 20px #8B5DFF, 0 0 30px #8B5DFF',
      }}
    />
  );
};

const FloatingElement = ({ delay, size, color }: FloatingElementProps) => {
  return (
    <div
      className="absolute rounded-full opacity-20 blur-sm"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        animationDelay: `${delay}s`,
        animation: 'floatRandom 15s ease-in-out infinite',
      }}
    />
  );
};

const EnhancedVisualEffects = () => {
  const [meteors, setMeteors] = useState<MeteorProps[]>([]);
  const [floatingElements, setFloatingElements] = useState<FloatingElementProps[]>([]);

  useEffect(() => {
    // Generate meteors
    const meteorArray: MeteorProps[] = [];
    for (let i = 0; i < 8; i++) {
      meteorArray.push({
        id: i,
        delay: Math.random() * 4,
      });
    }
    setMeteors(meteorArray);

    // Generate floating elements
    const floatingArray: FloatingElementProps[] = [];
    for (let i = 0; i < 12; i++) {
      floatingArray.push({
        id: i,
        delay: Math.random() * 10,
        size: Math.random() * 20 + 10,
        color: ['#8B5DFF', '#00D4FF', '#FF6EC7'][Math.floor(Math.random() * 3)],
      });
    }
    setFloatingElements(floatingArray);
  }, []);

  return (
    <>
      {/* Enhanced Particle Field */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
        {/* Meteors */}
        {meteors.map((meteor) => (
          <Meteor key={meteor.id} {...meteor} />
        ))}

        {/* Floating Elements */}
        {floatingElements.map((element) => (
          <FloatingElement key={element.id} {...element} />
        ))}

        {/* Cosmic Dust */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Aurora Effect */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(ellipse at 25% 25%, #8B5DFF 0%, transparent 50%),
              radial-gradient(ellipse at 75% 25%, #00D4FF 0%, transparent 50%),
              radial-gradient(ellipse at 25% 75%, #FF6EC7 0%, transparent 50%),
              radial-gradient(ellipse at 75% 75%, #8B5DFF 0%, transparent 50%)
            `,
            animation: 'aurora 20s ease-in-out infinite',
          }}
        />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 93, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 93, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            animation: 'gridMove 30s linear infinite',
          }}
        />
      </div>

      {/* Additional CSS for animations */}
      <div className="hidden">
        {/* Meteor animation */}
        <div className="animate-[meteor_4s_linear_infinite]" />
        {/* Float random animation */}
        <div className="animate-[floatRandom_15s_ease-in-out_infinite]" />
        {/* Aurora animation */}
        <div className="animate-[aurora_20s_ease-in-out_infinite]" />
        {/* Grid move animation */}
        <div className="animate-[gridMove_30s_linear_infinite]" />
      </div>
    </>
  );
};

export default EnhancedVisualEffects;