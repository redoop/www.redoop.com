import {CaseDetailPage} from '@/components/pages';
import {studiesFor, detailsFor, findCase} from '@/lib/cases';
export function generateStaticParams(){return [...studiesFor('en'),...detailsFor('en')].map(c=>({slug:c.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:findCase('en',slug)?.title??'Customer story'}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <CaseDetailPage lang="en" slug={slug}/>}
