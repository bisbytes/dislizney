import Svg, { Circle, Ellipse, G, Path, Polygon, Rect } from 'react-native-svg';

/**
 * A simple silhouette skyline for each land, drawn behind the chapter title
 * like the illustration at the top of a storybook page.
 * viewBox is 400 x 120; everything sits on the bottom edge.
 */
export function LandScene({
  landId,
  color = '#FFFFFF',
  opacity = 0.22,
}: {
  landId: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 400 120" preserveAspectRatio="xMidYMax slice">
      <G fill={color} opacity={opacity}>
        {SCENES[landId] ?? <Sparkles />}
      </G>
    </Svg>
  );
}

function Sparkles() {
  return (
    <>
      {[30, 90, 160, 240, 310, 370].map((x, i) => (
        <Star key={x} x={x} y={20 + (i % 3) * 22} r={5 + (i % 2) * 3} />
      ))}
    </>
  );
}

function Star({ x, y, r }: { x: number; y: number; r: number }) {
  const p = r * 0.35;
  return (
    <Path
      d={`M${x} ${y - r} L${x + p} ${y - p} L${x + r} ${y} L${x + p} ${y + p} L${x} ${y + r} L${x - p} ${y + p} L${x - r} ${y} L${x - p} ${y - p} Z`}
    />
  );
}

function Palm({ x, h }: { x: number; h: number }) {
  const top = 120 - h;
  return (
    <>
      <Path
        d={`M${x - 3} 120 Q ${x + 6} ${top + h / 2} ${x + 2} ${top} L ${x + 6} ${top} Q ${x + 12} ${top + h / 2} ${x + 3} 120 Z`}
      />
      <Path d={`M${x + 4} ${top} q -20 -4 -32 10 q 16 -14 32 -6 Z`} />
      <Path d={`M${x + 4} ${top} q 20 -4 32 10 q -16 -14 -32 -6 Z`} />
      <Path d={`M${x + 4} ${top} q -10 -16 -26 -14 q 18 -2 26 10 Z`} />
      <Path d={`M${x + 4} ${top} q 10 -16 26 -14 q -18 -2 -26 10 Z`} />
    </>
  );
}

function Tower({ x, w, h, flag }: { x: number; w: number; h: number; flag?: boolean }) {
  const top = 120 - h;
  return (
    <>
      <Rect x={x} y={top} width={w} height={h} />
      <Polygon points={`${x - 3},${top} ${x + w / 2},${top - w * 1.4} ${x + w + 3},${top}`} />
      {flag && <Path d={`M${x + w / 2} ${top - w * 1.4} v -10 l 9 3 l -9 3 Z`} />}
    </>
  );
}

function Rocket({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <Path
      d={`M${x} ${y} q ${8 * s} ${10 * s} ${8 * s} ${28 * s} l ${6 * s} ${8 * s} h ${-28 * s} l ${6 * s} ${-8 * s} q 0 ${-18 * s} ${8 * s} ${-28 * s} Z`}
    />
  );
}

const SCENES: Record<string, React.ReactNode> = {
  'main-street': (
    <>
      {/* Storefronts with peaked roofs */}
      {[0, 46, 92, 268, 314, 360].map((x, i) => (
        <G key={x}>
          <Rect x={x} y={70 + (i % 2) * 8} width={40} height={50} />
          <Polygon
            points={`${x - 2},${70 + (i % 2) * 8} ${x + 20},${56 + (i % 2) * 8} ${x + 42},${70 + (i % 2) * 8}`}
          />
        </G>
      ))}
      {/* The castle at the end of the street */}
      <Tower x={150} w={16} h={60} flag />
      <Tower x={234} w={16} h={60} flag />
      <Tower x={176} w={14} h={78} />
      <Tower x={210} w={14} h={78} />
      <Tower x={191} w={18} h={100} flag />
      <Rect x={150} y={84} width={100} height={36} />
    </>
  ),
  adventureland: (
    <>
      <Palm x={20} h={90} />
      <Palm x={80} h={70} />
      <Palm x={300} h={95} />
      <Palm x={360} h={72} />
      {/* Tiki head */}
      <Rect x={180} y={60} width={40} height={60} rx={6} />
      <Rect x={174} y={52} width={52} height={12} rx={4} />
      {/* Mountains */}
      <Polygon points="110,120 150,70 190,120" />
      <Polygon points="220,120 260,80 300,120" />
    </>
  ),
  frontierland: (
    <>
      {/* Red rock spires */}
      <Polygon points="0,120 20,60 40,58 55,120" />
      <Polygon points="60,120 75,30 88,28 100,74 112,72 125,120" />
      <Polygon points="270,120 290,50 302,48 318,90 330,88 345,120" />
      <Polygon points="340,120 360,68 378,66 400,120" />
      {/* Cactus */}
      <Path d="M190 120 v -46 q 0 -8 8 -8 q 8 0 8 8 v 46 Z M190 92 h -10 q -6 0 -6 -6 v -14 q 0 -4 4 -4 q 4 0 4 4 v 12 h 8 Z M206 86 h 10 v -12 q 0 -4 4 -4 q 4 0 4 4 v 14 q 0 6 -6 6 h -12 Z" />
      {/* Little train on the track */}
      <Rect x={140} y={104} width={30} height={14} rx={3} />
      <Rect x={226} y={104} width={26} height={14} rx={3} />
    </>
  ),
  'liberty-square': (
    <>
      {/* Colonial row houses */}
      {[0, 50, 100, 260, 310].map((x) => (
        <G key={x}>
          <Rect x={x} y={68} width={46} height={52} />
          <Polygon points={`${x},68 ${x + 23},50 ${x + 46},68`} />
          <Rect x={x + 18} y={40} width={8} height={14} />
        </G>
      ))}
      {/* The mansion on the hill */}
      <Ellipse cx={200} cy={130} rx={70} ry={30} />
      <Rect x={170} y={58} width={60} height={50} />
      <Polygon points="165,58 200,30 235,58" />
      <Rect x={196} y={14} width={8} height={18} />
      {/* Liberty Bell */}
      <Path d="M370 120 v -6 h -4 q 0 -24 18 -26 q 18 2 18 26 h -4 v 6 Z" />
    </>
  ),
  fantasyland: (
    <>
      {/* Circus tents */}
      <Polygon points="10,120 45,62 80,120" />
      <Path d="M45 62 v -12 l 10 4 l -10 4 Z" />
      <Polygon points="320,120 360,56 400,120" />
      <Path d="M360 56 v -12 l 10 4 l -10 4 Z" />
      {/* Castle towers */}
      <Tower x={110} w={14} h={70} flag />
      <Tower x={140} w={18} h={90} flag />
      <Tower x={172} w={22} h={110} flag />
      <Tower x={208} w={18} h={90} flag />
      <Tower x={240} w={14} h={70} flag />
      <Rect x={110} y={88} width={144} height={32} />
      <Star x={290} y={26} r={7} />
      <Star x={90} y={20} r={5} />
    </>
  ),
  tomorrowland: (
    <>
      {/* Planet with a ring */}
      <Circle cx={320} cy={40} r={20} />
      <Ellipse cx={320} cy={40} rx={34} ry={7} fill="none" stroke="#FFFFFF" strokeWidth={3} />
      {/* Space Mountain cone */}
      <Path d="M120 120 Q 170 30 200 28 Q 230 30 280 120 Z" />
      {/* Rockets */}
      <Rocket x={60} y={52} />
      <Rocket x={360} y={70} s={0.8} />
      <Star x={30} y={26} r={5} />
      <Star x={250} y={18} r={6} />
      <Star x={390} y={22} r={4} />
      <Rect x={0} y={112} width={400} height={8} />
    </>
  ),
};
