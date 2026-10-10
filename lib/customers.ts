import type {Lang} from './i18n';
export const customers = [
{image:'guest-hsbc.png',zh:'汇丰银行',en:'HSBC'},
{image:'guest-kunlunrisk.png',zh:'昆仑保险经济',en:'Kunlun Insurance Broker'},
{image:'guest-oil.png',zh:'大港油田',en:'Dagang Oilfield'},
{image:'guest-chinaaquatic.png',zh:'烟台惠通',en:'Yantai Huitong'},
{image:'guest-h3c.png',zh:'紫光华山',en:'Unis H3C'},
{image:'guest-xjtu.png',zh:'西安交通大学',en:"Xi'an Jiaotong University"},
{image:'guest-wuzhou.png',zh:'五舟科技',en:'Wuzhou Technology'},
{image:'guest-msup.png',zh:'麦思博软件',en:'MSUP'},
{image:'guest-keda.png',zh:'科达数码',en:'Keda Digital'},
{image:'guest-beiming.png',zh:'北明软件',en:'Beiming Software'},
{image:'guest-bjwrhx.png',zh:'网润恒信',en:'Wangrun Hengxin'},
{image:'guest-lenovo.png',zh:'联想',en:'Lenovo'},
{image:'guest-yangguangnet.png',zh:'阳光耐特',en:'Yangguang Net'},
{image:'guest-fiberhome.png',zh:'烽火通信',en:'FiberHome'},
{image:'guest-leavay.png',zh:'利为软件',en:'Leaway Software'},
{image:'guest-zoomserver.png',zh:'中太服务器',en:'ZoomServer'},
{image:'guest-Department.png',zh:'辽宁交通厅',en:'Liaoning Transport Department'},
{image:'guest-uec.png',zh:'荣之联',en:'UEC'},
{image:'guest-tcloud.png',zh:'云途腾',en:'TCloud'},
{image:'guest-anrong.png',zh:'安荣科技',en:'Anrong Technology'},
{image:'guest-analysys.png',zh:'易观智库',en:'Analysys'},
{image:'guest-cstarcloud.png',zh:'瑞德云',en:'CStarCloud'},
{image:'guest-kylin.png',zh:'银河麒麟',en:'Kylin'},
{image:'guest-railway.png',zh:'青藏铁路',en:'Qinghai–Tibet Railway'},
{image:'guest-bonatone.png',zh:'博纳通',en:'Bonatone'},
{image:'guest-sinosoft.png',zh:'中科软科技',en:'Sinosoft'},
{image:'guest-gotop.png',zh:'国通科技',en:'Gotop'},
{image:'guest-cresda.png',zh:'中国资源卫星应用中心',en:'China Centre for Resources Satellite Data and Application'},
{image:'guest-aerospace.png',zh:'中国运载火箭技术研究院',en:'China Academy of Launch Vehicle Technology'},
{image:'guest-baicmotor.png',zh:'北京汽车',en:'BAIC Motor'},
{image:'guest-golaxy.png',zh:'中科天玑',en:'Golaxy'},
{image:'guest-maadaa.png',zh:'玛达科技',en:'Maadaa'},
{image:'guest-ciss.png',zh:'国家体育总局',en:'General Administration of Sport of China'},
{image:'guest-nuc.png',zh:'中北大学',en:'North University of China'},
{image:'guest-jfj.jpg',zh:'中国人民解放军大学',en:'PLA University'}
];
export const customerList = (lang: Lang) => customers.map((c) => ({image: c.image, name: lang === 'zh' ? c.zh : c.en}));
export const partners = [
{image:'partener-enmotech.jpg',zh:'云和恩墨',en:'Enmotech'},
{image:'partener-csii.jpg',zh:'科蓝',en:'CSII'},
{image:'partener-gbase.jpg',zh:'南大通用',en:'GBase'},
{image:'partener-datamining.jpg',zh:'数海时代',en:'DataMining'},
{image:'partener-mysoft.png',zh:'明月软件',en:'Mysoft'},
{image:'partener-hhzn.png',zh:'黄河智能',en:'Huanghe Intelligence'}
];
export const partnerList = (lang: Lang) => partners.map((p) => ({image: p.image, name: lang === 'zh' ? p.zh : p.en}));
