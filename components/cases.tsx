import Link from 'next/link';
import {studiesFor, detailsFor} from '@/lib/cases';
import {lp, type Lang} from '@/lib/i18n';
import {Arrow} from './site';
export function CaseCards({lang,featured=false}:{lang:Lang;featured?:boolean}){const all=studiesFor(lang);const data=featured?[all[0],all[4],all[2]]:all;return <div className="case-grid">{data.map(c=><Link className="case-card" href={lp(lang,`/cases/${c.slug}`)} key={c.slug}><img src={`https://www.redoop.com/images/${c.image}`} alt={c.tag} loading="lazy"/><div><span className="eyebrow">{c.tag}</span><h3>{c.title}</h3><p>{c.description}</p><span className="case-read">{lang==='zh'?'查看案例':'Read the story'} <Arrow/></span></div></Link>)}</div>}
export function DetailedCaseCards({lang}:{lang:Lang}){return <div className="case-grid">{detailsFor(lang).map(c=><Link className="case-card" href={lp(lang,`/cases/${c.slug}`)} key={c.slug}><img src={`https://www.redoop.com/images/${c.image}`} alt={c.title} loading="lazy"/><div><span className="eyebrow">{c.tag}</span><h3>{c.title}</h3><p>{c.description}</p><span className="case-read">{lang==='zh'?'查看方案':'View the solution'} <Arrow/></span></div></Link>)}</div>}
