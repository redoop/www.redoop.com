export const offices = {
  zh: [
['北京（总部）','北京市西城区北三环中路29号院3号楼一层'],['上海','徐汇区虹桥路3号港汇中心2期11楼办伴联合办公1112室'],['南京','雨花台区南京南站站西片区绿地之窗商务广场B2幢1501室'],['广州','天河区天河北路30号东901室'],['深圳','南山区高新南一道6号TCL大厦B座9楼WeWork 10-109室'],['成都','高新区天府四街长虹科技大厦A栋（1座）22层03.04室'],['郑州','金水区花园路27号河南省科技信息大厦15层'],['西安','碑林区雁塔北路中铁第壹国际WeWork 3-122'],['乌鲁木齐','水磨沟区八道湾片区1栋2单元第13层1303'],['英国','92 Strathmore Ave, Coventry, West Midlands, England, UK, 2AF CV1']
  ],
  en: [
['Beijing (HQ)','1F, Building 3, Courtyard 29, North Third Ring Middle Road, Xicheng District, Beijing'],['Shanghai','Room 1112, MyPlace, 11F, Bund Center Tower 2, 3 Hongqiao Road, Xuhui District, Shanghai'],['Nanjing','Room 1501, Building B2, Greenland Window Business Plaza, Nanjing South Railway Station West Area, Yuhuatai District, Nanjing'],['Guangzhou','Room 901 East, 30 Tianhe North Road, Tianhe District, Guangzhou'],['Shenzhen','Room 10-109, WeWork, 9F, Tower B, TCL Building, 6 Gaoxin South 1st Road, Nanshan District, Shenzhen'],['Chengdu','Room 03.04, 22F, Tower A (Building 1), Changhong Technology Building, 4th Tianfu Street, High-tech Zone, Chengdu'],['Zhengzhou','15F, Henan Science and Technology Information Building, 27 Huayuan Road, Jinshui District, Zhengzhou'],["Xi'an",'WeWork 3-122, China Railway No.1 International, Yanta North Road, Beilin District, Xi’an'],['Urumqi','Room 1303, 13F, Unit 2, Building 1, Badawan Area, Shuimogou District, Urumqi'],['England','92 Strathmore Ave, Coventry, West Midlands, England, UK, CV1 2AF']
  ]
};
export const officeList = (lang: 'zh' | 'en') => offices[lang].map(([city, address]) => ({city, address}));
