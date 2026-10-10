export type Lang = 'zh' | 'en';
export const langOfPath = (p: string): Lang => (p === '/en' || p.startsWith('/en/') ? 'en' : 'zh');
export const lp = (lang: Lang, path: string) => (lang === 'en' ? (path === '/' ? '/en' : `/en${path}`) : path);
export const switchPath = (lang: Lang, path: string) => (lang === 'zh' ? path.replace(/^\/en/, '') || '/' : lp('en', path.replace(/^\/en/, '') || '/'));
export const ui = {
  zh: {
    langLabel: 'EN',
    nav: [['/', '首页'], ['/products', '产品介绍'], ['/cases', '客户案例'], ['/about', '关于我们'], ['/contact', '联系我们']] as [string, string][],
    navCta: '开启合作',
    menuLabel: '展开导航',
    footerTagline: '以技术连接可能，以数据驱动未来。',
    footerSource: '公开资料来源：www.redoop.com ↗',
    copyright: (y: number) => `© ${y} 红象云腾 · 版权所有`,
    footerEn: 'DATA DRIVES THE FUTURE.',
    cta: { eyebrow: 'LET’S BUILD WHAT’S NEXT', title: '下一种可能，从这里开始。', text: '与我们一起，探索适合您的 Redoop 大数据平台方案。', button: '与我们聊聊' },
    form: {
      title: '告诉我们您的想法', sub: '留下需求，让合作从一次对话开始。留言仅保存于本站，不自动发送邮件。',
      name: '您的姓名', namePh: '如何称呼您', company: '公司名称', companyPh: '您所在的公司',
      email: '电子邮箱', emailPh: 'name@company.com', phone: '联系电话', phonePh: '您的联系电话（选填）',
      interest: '感兴趣的方向', message: '您的需求', messagePh: '简单介绍您的业务场景与需求…',
      consent: '我同意将上述信息用于本次咨询联系。', submit: '提交咨询', sending: '正在提交…',
      ok: '咨询已保存，感谢您的信任。网站管理员可在数据库中查看您的留言。', fail: '暂时无法提交，请稍后重试。'
    }
  },
  en: {
    langLabel: '中文',
    nav: [['/', 'Home'], ['/products', 'Products'], ['/cases', 'Customer Stories'], ['/about', 'About Us'], ['/contact', 'Contact']] as [string, string][],
    navCta: 'Start a conversation',
    menuLabel: 'Toggle navigation',
    footerTagline: 'Connecting technology with what is possible.',
    footerSource: 'Public source: www.redoop.com ↗',
    copyright: (y: number) => `© ${y} Redoop. All rights reserved.`,
    footerEn: 'DATA DRIVES THE FUTURE.',
    cta: { eyebrow: 'LET’S BUILD WHAT’S NEXT', title: 'The next possibility starts here.', text: 'Talk to us about the Redoop big data platform that fits your business.', button: 'Talk to us' },
    form: {
      title: 'Tell us what you have in mind', sub: 'Share your requirements and let the conversation begin. Messages are stored on this site only and are not emailed automatically.',
      name: 'Your name', namePh: 'How should we address you?', company: 'Company', companyPh: 'Where do you work?',
      email: 'Email', emailPh: 'name@company.com', phone: 'Phone', phonePh: 'Your phone number (optional)',
      interest: 'Area of interest', message: 'Your requirements', messagePh: 'Briefly describe your business scenario and requirements…',
      consent: 'I agree that the information above may be used to contact me about this enquiry.', submit: 'Send enquiry', sending: 'Sending…',
      ok: 'Thank you — your enquiry has been saved. The site administrator can review it in the database.', fail: 'Unable to submit right now. Please try again later.'
    }
  }
} as const;
