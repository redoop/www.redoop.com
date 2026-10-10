import {CaseDetailPage} from '@/components/pages';
import {studiesFor, detailsFor, findCase} from '@/lib/cases';
export function generateStaticParams(){return [...studiesFor('zh'),...detailsFor('zh')].map(c=>({slug:c.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:findCase('zh',slug)?.title??'客户案例'}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <CaseDetailPage lang="zh" slug={slug}/>}
