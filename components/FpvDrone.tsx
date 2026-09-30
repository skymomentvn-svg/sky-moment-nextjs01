import type { CSSProperties } from "react";

// Top-down cinewhoop FPV (ducted props, copper motors, blue LED strips, camera
// pod at the front, battery on top, rear antennas). Forward = +x, drawn in a
// 40x40 box centered on 0,0.
export function FpvDroneShape({ spin = false }: { spin?: boolean }) {
  const blade = spin ? "prop-spin" : undefined;
  return (
    <g>
<g strokeLinecap="round"><line x1="0" y1="0" x2="10" y2="-10" stroke="#F3F2EE" strokeWidth="2.6"/><line x1="0" y1="0" x2="10" y2="-10" stroke="#0A0A0B" strokeWidth="1"/><line x1="0" y1="0" x2="10" y2="10" stroke="#F3F2EE" strokeWidth="2.6"/><line x1="0" y1="0" x2="10" y2="10" stroke="#0A0A0B" strokeWidth="1"/><line x1="0" y1="0" x2="-10" y2="-10" stroke="#F3F2EE" strokeWidth="2.6"/><line x1="0" y1="0" x2="-10" y2="-10" stroke="#0A0A0B" strokeWidth="1"/><line x1="0" y1="0" x2="-10" y2="10" stroke="#F3F2EE" strokeWidth="2.6"/><line x1="0" y1="0" x2="-10" y2="10" stroke="#0A0A0B" strokeWidth="1"/></g><g transform="translate(10 -10)"><circle r="8" fill="rgba(243,242,238,.04)" stroke="#F3F2EE" strokeOpacity=".7" strokeWidth="1.6"/><circle r="6.4" fill="none" stroke="#F3F2EE" strokeOpacity=".18" strokeWidth=".5"/><circle r="8.3" fill="none" stroke="#5CC8FF" strokeOpacity=".3" strokeWidth="2.6"/><circle r="8.3" fill="none" stroke="#5CC8FF" strokeOpacity=".9" strokeWidth=".8"/><g fill="rgba(243,242,238,.5)"><g transform="rotate(35)"><ellipse rx="6" ry=".9" className={blade}/></g><g transform="rotate(125)"><ellipse rx="6" ry=".9" className={blade}/></g></g><circle r="2.3" fill="#C8823F" stroke="#F3F2EE" strokeWidth=".8"/><circle r=".7" fill="#0A0A0B"/></g><g transform="translate(10 10)"><circle r="8" fill="rgba(243,242,238,.04)" stroke="#F3F2EE" strokeOpacity=".7" strokeWidth="1.6"/><circle r="6.4" fill="none" stroke="#F3F2EE" strokeOpacity=".18" strokeWidth=".5"/><circle r="8.3" fill="none" stroke="#5CC8FF" strokeOpacity=".3" strokeWidth="2.6"/><circle r="8.3" fill="none" stroke="#5CC8FF" strokeOpacity=".9" strokeWidth=".8"/><g fill="rgba(243,242,238,.5)"><g transform="rotate(-35)"><ellipse rx="6" ry=".9" className={blade}/></g><g transform="rotate(55)"><ellipse rx="6" ry=".9" className={blade}/></g></g><circle r="2.3" fill="#C8823F" stroke="#F3F2EE" strokeWidth=".8"/><circle r=".7" fill="#0A0A0B"/></g><g transform="translate(-10 -10)"><circle r="8" fill="rgba(243,242,238,.04)" stroke="#F3F2EE" strokeOpacity=".7" strokeWidth="1.6"/><circle r="6.4" fill="none" stroke="#F3F2EE" strokeOpacity=".18" strokeWidth=".5"/><circle r="8.3" fill="none" stroke="#5CC8FF" strokeOpacity=".3" strokeWidth="2.6"/><circle r="8.3" fill="none" stroke="#5CC8FF" strokeOpacity=".9" strokeWidth=".8"/><g fill="rgba(243,242,238,.5)"><g transform="rotate(35)"><ellipse rx="6" ry=".9" className={blade}/></g><g transform="rotate(125)"><ellipse rx="6" ry=".9" className={blade}/></g></g><circle r="2.3" fill="#C8823F" stroke="#F3F2EE" strokeWidth=".8"/><circle r=".7" fill="#0A0A0B"/></g><g transform="translate(-10 10)"><circle r="8" fill="rgba(243,242,238,.04)" stroke="#F3F2EE" strokeOpacity=".7" strokeWidth="1.6"/><circle r="6.4" fill="none" stroke="#F3F2EE" strokeOpacity=".18" strokeWidth=".5"/><circle r="8.3" fill="none" stroke="#5CC8FF" strokeOpacity=".3" strokeWidth="2.6"/><circle r="8.3" fill="none" stroke="#5CC8FF" strokeOpacity=".9" strokeWidth=".8"/><g fill="rgba(243,242,238,.5)"><g transform="rotate(-35)"><ellipse rx="6" ry=".9" className={blade}/></g><g transform="rotate(55)"><ellipse rx="6" ry=".9" className={blade}/></g></g><circle r="2.3" fill="#C8823F" stroke="#F3F2EE" strokeWidth=".8"/><circle r=".7" fill="#0A0A0B"/></g><g strokeLinecap="round"><line x1="-5" y1="-2.5" x2="-10.5" y2="-7" stroke="#F3F2EE" strokeWidth="2.2"/><line x1="-5" y1="-2.5" x2="-10.5" y2="-7" stroke="#0A0A0B" strokeWidth=".9"/></g><g strokeLinecap="round"><line x1="-5" y1="2.5" x2="-10.5" y2="7" stroke="#F3F2EE" strokeWidth="2.2"/><line x1="-5" y1="2.5" x2="-10.5" y2="7" stroke="#0A0A0B" strokeWidth=".9"/></g><rect x="-7" y="-4.4" width="14" height="8.8" rx="2.8" fill="#0A0A0B" stroke="#F3F2EE" strokeWidth="1"/><rect x="-5.6" y="-3" width="8" height="6" rx="1" fill="#1A1A1D" stroke="rgba(243,242,238,.45)" strokeWidth=".5"/><line x1="-5.6" y1="0" x2="-8" y2="0" stroke="#E5484D" strokeWidth=".9" strokeLinecap="round"/><rect x="4.8" y="-3" width="4.4" height="6" rx="1.2" fill="#131315" stroke="#F3F2EE" strokeWidth=".9"/><circle cx="9.2" cy="0" r="1.7" fill="#0A0A0B" stroke="#F3F2EE" strokeWidth=".7"/><circle cx="9.5" cy="-.4" r=".5" fill="#F3F2EE"/>
    </g>
  );
}

export default function FpvDrone({
  size = 24,
  spin = false,
  style,
  className,
}: {
  size?: number;
  spin?: boolean;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="-19 -19 38 38" style={style} className={className} aria-hidden>
      <FpvDroneShape spin={spin} />
    </svg>
  );
}
