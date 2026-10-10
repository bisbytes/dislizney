import { getAttraction } from '@/data/parks';
import { type Keepsake } from '@/lib/journey';
import { daySummaryChips, summaryChips } from '@/lib/play-summary';
import { colors } from '@/theme';

const W = 320;
const H = 400;
const FONT = '-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const HEADLINES: Record<string, string> = {
  '🤩': 'Pure magic!',
  '😄': 'So much fun!',
  '😱': 'I survived!',
  '😴': 'Checked it off!',
};

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new globalThis.Image();
    const t = setTimeout(() => resolve(null), 5000);
    img.onload = () => {
      clearTimeout(t);
      resolve(img);
    };
    img.onerror = () => {
      clearTimeout(t);
      resolve(null);
    };
    img.src = src;
  });
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function text(ctx: CanvasRenderingContext2D, s: string, y: number, size: number, color: string, weight = 700) {
  ctx.font = `${weight} ${size}px ${FONT}`;
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(s, W / 2, y, W - 32);
}

/**
 * Draws the share picture straight onto a canvas (web only). Quick and reliable on phones, where
 * taking a snapshot of the on-screen card can stall.
 */
/** Lemon badges, centered and wrapped onto more rows when they don't fit. Returns the y below the last row. */
function drawChips(ctx: CanvasRenderingContext2D, chips: string[], top: number, size: number) {
  ctx.font = `700 ${size}px ${FONT}`;
  const widths = chips.map((t) => ctx.measureText(t).width + 24);
  const rows: number[][] = [[]];
  let used = 0;
  widths.forEach((w, i) => {
    if (used && used + 6 + w > W - 32) {
      rows.push([]);
      used = 0;
    }
    rows.at(-1)!.push(i);
    used += (used ? 6 : 0) + w;
  });
  let y = top;
  for (const row of rows) {
    const total = row.reduce((n, i) => n + widths[i], 0) + 6 * (row.length - 1);
    let x = (W - total) / 2;
    for (const i of row) {
      ctx.fillStyle = colors.lemon;
      roundRect(ctx, x, y, widths[i], 26, 13);
      ctx.fill();
      ctx.fillStyle = colors.ink;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `700 ${size}px ${FONT}`;
      ctx.fillText(chips[i], x + widths[i] / 2, y + 14);
      x += widths[i] + 6;
    }
    y += 32;
  }
  return y;
}

export async function drawShareImage(k: Keepsake, pixelWidth = 1080): Promise<string> {
  const r = getAttraction(k.attractionId);
  if (!r) throw new Error('no ride');
  const canvas = document.createElement('canvas');
  const scale = pixelWidth / W;
  canvas.width = Math.round(W * scale);
  canvas.height = Math.round(H * scale);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('no canvas');
  ctx.scale(scale, scale);

  const c = r.land.colors;
  const team = k.team && k.team.length > 1 ? k.team : undefined;
  const date = new Date(k.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' });
  const headline = (k.rating && HEADLINES[k.rating]) || (team ? 'We rode it!' : 'I rode it!');
  const photo = k.photos?.[0] ? await loadImage(k.photos[0]) : null;

  ctx.fillStyle = c.ground;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = 'rgba(255,255,255,0.08)';
  ctx.beginPath();
  ctx.ellipse(W / 2, H + 40, W * 0.85, 130, 0, 0, Math.PI * 2);
  ctx.fill();

  text(ctx, headline, 40, 28, colors.lemon);
  let y = 66;

  if (photo) {
    const pw = Math.round(W * 0.62);
    const side = pw - 16;
    const ph = side + 8 + 22 + 10;
    ctx.save();
    ctx.translate(W / 2, y + ph / 2);
    ctx.rotate((-2 * Math.PI) / 180);
    ctx.shadowColor = 'rgba(0,0,0,0.25)';
    ctx.shadowBlur = 8;
    ctx.fillStyle = colors.white;
    roundRect(ctx, -pw / 2, -ph / 2, pw, ph, 6);
    ctx.fill();
    ctx.shadowColor = 'transparent';
    const s = Math.min(photo.width, photo.height);
    ctx.save();
    roundRect(ctx, -side / 2, -ph / 2 + 8, side, side, 3);
    ctx.clip();
    ctx.drawImage(photo, (photo.width - s) / 2, (photo.height - s) / 2, s, s, -side / 2, -ph / 2 + 8, side, side);
    ctx.restore();
    ctx.font = `700 15px ${FONT}`;
    ctx.fillStyle = colors.ink;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${r.attraction.emoji} ${r.attraction.name}`, 0, ph / 2 - 18, pw - 16);
    ctx.restore();
    y += ph + 14;
  } else {
    text(ctx, r.attraction.emoji, y + 52, 92, colors.white, 400);
    text(ctx, r.attraction.name, y + 126, 26, colors.white);
    y += 156;
  }

  const chips = summaryChips(k);
  if (k.rating) chips.push(k.rating);
  y = drawChips(ctx, chips, y, 15) + 16;

  if (team) {
    text(
      ctx,
      team[0].score > team[1].score
        ? `👑 ${team[0].emoji} ${team[0].name} won our line trivia!`
        : '🤝 Our line trivia ended in a tie!',
      y,
      16,
      colors.white,
    );
  }

  text(ctx, `${r.park.name} · ${date}`, H - 40, 13, colors.paper, 500);
  ctx.globalAlpha = 0.8;
  text(ctx, 'Once Upon a Line · by Bis Bytes', H - 20, 11, colors.paper, 400);
  ctx.globalAlpha = 1;

  return canvas.toDataURL('image/png');
}

/** Draws the whole-day picture (see DayCard) straight onto a canvas on the web. */
export async function drawDayImage(list: Keepsake[], includePhotos: boolean, pixelWidth = 1080): Promise<string> {
  const rides = list.map((k) => ({ k, r: getAttraction(k.attractionId) })).filter((x) => x.r);
  if (!rides.length) throw new Error('no rides');
  const canvas = document.createElement('canvas');
  const scale = pixelWidth / W;
  canvas.width = Math.round(W * scale);
  canvas.height = Math.round(H * scale);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('no canvas');
  ctx.scale(scale, scale);

  const uris = includePhotos ? list.flatMap((k) => k.photos ?? []).slice(0, 4) : [];
  const photos = (await Promise.all(uris.map(loadImage))).filter((p): p is HTMLImageElement => !!p);
  const parks = [...new Set(rides.map((x) => x.r!.park.name))].join(' and ');
  const date = new Date(list[0].date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' });

  ctx.fillStyle = '#4b38d6';
  ctx.fillRect(0, 0, W, H);

  text(ctx, 'What a day!', 40, 28, colors.lemon);
  text(ctx, `${parks || 'Walt Disney World'} · ${date}`, 64, 13, colors.paper, 500);

  let y = 82;
  if (photos.length) {
    const size = photos.length <= 3 ? 90 : 66;
    const gap = 6;
    let x = (W - (photos.length * size + (photos.length - 1) * gap)) / 2;
    for (const p of photos) {
      ctx.save();
      roundRect(ctx, x, y, size, size, 6);
      ctx.clip();
      const s = Math.min(p.width, p.height);
      ctx.drawImage(p, (p.width - s) / 2, (p.height - s) / 2, s, s, x, y, size, size);
      ctx.restore();
      ctx.lineWidth = 3;
      ctx.strokeStyle = colors.white;
      roundRect(ctx, x, y, size, size, 6);
      ctx.stroke();
      x += size + gap;
    }
    y += size + 22;
  } else {
    const row = rides.slice(0, 4).map((x) => x.r!.attraction.emoji);
    ctx.font = `400 40px ${FONT}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    row.forEach((e, i) => ctx.fillText(e, W / 2 + (i - (row.length - 1) / 2) * 56, y + 30));
    y += 74;
  }

  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  rides.slice(0, 5).forEach(({ k, r }, i) => {
    ctx.font = `500 14px ${FONT}`;
    ctx.fillStyle = colors.white;
    ctx.fillText(`${r!.attraction.emoji} ${r!.attraction.name}${k.stars > 0 ? ` · ⭐ ${k.stars}` : ''}`, 16, y + i * 20, W - 32);
  });
  y += Math.min(5, rides.length) * 20;
  if (rides.length > 5) {
    ctx.fillStyle = colors.paper;
    ctx.fillText(`+ ${rides.length - 5} more`, 16, y);
    y += 20;
  }
  y += 14;

  drawChips(ctx, daySummaryChips(list), y, 14);

  ctx.globalAlpha = 0.8;
  text(ctx, 'Once Upon a Line · by Bis Bytes', H - 20, 11, colors.paper, 400);
  ctx.globalAlpha = 1;
  return canvas.toDataURL('image/png');
}
