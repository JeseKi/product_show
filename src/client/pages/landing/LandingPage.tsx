import { Tag } from 'antd'
import { MessageCircle, Package, ShieldCheck, Sparkles, Utensils } from 'lucide-react'

const qrCodeUrl = 'https://fstc.kispace.cc/i/ec2458d7f65f16141b1c478aadc45da3.jpg'

const imageUrls = {
  hero: 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_475fd8626a9a4629921da974d5651158_%E8%8C%B6%E5%8C%85__452ae03f6db3b2cd327f7f6e4f03446f.jpg',
  teaPackage: 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_c8b999553edc43dd8e610e083b040844_%E4%BA%A7%E5%93%81%E5%9B%BE%E5%88%B6%E4%BD%9C__%E8%8C%B6%E5%8C%85__%E8%8C%B6%E5%8C%85.jpg',
  teaOuterPackage: 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_e8dde1d2490c4df29abbc8fbbd6b0820_%E4%BA%A7%E5%93%81%E5%9B%BE%E5%88%B6%E4%BD%9C__%E8%8C%B6%E5%8C%85__%E8%8C%B6%E5%8C%85%E5%A4%96%E5%8C%85%E8%A3%85.jpg',
  powderPackage: 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_d233e7da89174d0eaef6a5ef878d75d6_%E4%BA%A7%E5%93%81%E5%9B%BE%E5%88%B6%E4%BD%9C__%E6%89%8B%E5%B7%A5%E5%85%BB%E7%94%9F%E7%B2%89__%E5%85%BB%E7%94%9F%E7%B2%89%E5%8C%85%E8%A3%85.jpg',
  powderJar: 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_91758c0cf8dc4f9b813a46c19254bdba_%E4%BA%A7%E5%93%81%E5%9B%BE%E5%88%B6%E4%BD%9C__%E6%89%8B%E5%B7%A5%E5%85%BB%E7%94%9F%E7%B2%89__70f10249-0acb-4d89-aeb7-08be338ce853.jpg',
  slimKit: 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_6c8c0fc68b2747eb94d3cd9d440e7b0c_%E5%87%8F%E8%84%82%E5%A5%97%E9%A4%90__27cd03684e5e3102c88f071ad20aa25e.jpg',
  slimTea: 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_30cadc3bd751437a82e0758247dc4362_%E8%8C%B6%E5%8C%85__%E7%A7%81%E4%BA%BA%E5%AE%9A%E5%88%B6%E7%BA%A4%E7%BA%A4%E9%A5%AE.jpg',
  hairKit: 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_b73bbbb96d60491d8fbf9ae631425e0f_%E4%B9%8C%E5%8F%91%E7%94%9F%E5%8F%91%E5%A5%97%E9%A4%90__c8cd4bb20ee0764f95a0d3eeef3f2f9f.jpg',
  hairProduct: 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_a1ea1e3393dd407fbe72c8b75098391b_%E4%B9%8C%E5%8F%91%E7%94%9F%E5%8F%91%E5%A5%97%E9%A4%90__b9405f7758dcbd675a40f880526b8091.jpg',
  sleepKit: 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_86a296f9af9d453db978a098f61ea6b7_%E7%9D%A1%E7%9C%A0%E5%A5%97%E9%A4%90__5ffd99634adce7e768b635d8aca86703.jpg',
  sleepProduct: 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_166870b0de4342a194af6732ceb17533_%E7%9D%A1%E7%9C%A0%E5%A5%97%E9%A4%90__e74fcbe737a93d30edca82f0a22a8f5e.jpg',
  tonicPaste: 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_fdb10fdd03a64131a4f1ac773495ae13_%E5%85%BB%E7%94%9F%E7%B2%89%EF%BC%8C%E8%86%8F%E6%96%B9__b68cbdeff5e145f55812d0cd66a3da2d.jpg',
  powderBottle: 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_37f94d38594b4db5a5bf024e565773f9_%E5%85%BB%E7%94%9F%E7%B2%89%EF%BC%8C%E8%86%8F%E6%96%B9__53197417bc5a54f5bce8cfbf78f78f0c.jpg',
  powderDetail: 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_9967d56e2a6146e0b3598fbc59b71f69_%E5%85%BB%E7%94%9F%E7%B2%89%EF%BC%8C%E8%86%8F%E6%96%B9__0a6b77b46440d1de1f645ed93e74ca07.jpg',
  tea: {
    '元气是四宝茶': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_b56ba0491aa542a7b6af082aabcca553_%E8%8C%B6%E5%8C%85__%E5%85%83%E6%B0%94%E6%98%AF%E5%9B%9B%E5%AE%9D%E8%8C%B6.jpg',
    '胖大海润润饮': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_6214a4d8b5ce49d289826fd612716969_%E8%8C%B6%E5%8C%85__%E8%83%96%E5%A4%A7%E6%B5%B7%E6%B6%A6%E6%B6%A6%E9%A5%AE_.jpg',
    '苹果四神汤': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_7ef85f0ff6344b2c9cb71b5a20032e5c_%E8%8C%B6%E5%8C%85__%E8%8B%B9%E6%9E%9C%E5%9B%9B%E7%A5%9E%E6%B1%A4_.jpg',
    '雪梨玉竹百合茶': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_df1d8aa2f7ef461398821df833943be1_%E8%8C%B6%E5%8C%85__%E9%9B%AA%E6%A2%A8%E7%8E%89%E7%AB%B9%E7%99%BE%E5%90%88%E8%8C%B6.jpg',
    '苹果黄芪麦冬饮': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_3819c11c871d46efa5d6feff50667139_%E8%8C%B6%E5%8C%85__%E8%8B%B9%E6%9E%9C%E9%BB%84%E8%8A%AA%E9%BA%A6%E5%86%AC%E9%A5%AE.jpg',
    '石斛麦冬白茶饮': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_a22d056717aa447f8a3fc8c0a0b512af_%E8%8C%B6%E5%8C%85__%E7%9F%B3%E6%96%9B%E9%BA%A6%E5%86%AC%E7%99%BD%E8%8C%B6%E9%A5%AE.jpg',
    '姜枣暖暖茶': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_96eb3c6298cc40e3b7c10b16e692bd3b_%E8%8C%B6%E5%8C%85__%E5%A7%9C%E6%9E%A3%E6%9A%96%E6%9A%96%E8%8C%B6.jpg',
    '五指毛桃茯苓饮': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_7c0d8c1cdb784d6d8ce56d893b92e421_%E8%8C%B6%E5%8C%85__%E4%BA%94%E6%8C%87%E6%AF%9B%E6%A1%83%E8%8C%AF%E8%8B%93%E9%A5%AE.jpg',
    '金银花牛蒡饮': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_783af57f79ea44c9964c2b201545233c_%E8%8C%B6%E5%8C%85__%E9%87%91%E9%93%B6%E8%8A%B1%E7%89%9B%E8%92%A1%E9%A5%AE.jpg',
    '山楂桑葚玫瑰饮': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_19c455fb85384bb29828799d848a65b2_%E8%8C%B6%E5%8C%85__%E5%B1%B1%E6%A5%82%E6%A1%91%E8%91%9A%E7%8E%AB%E7%91%B0%E9%A5%AE.jpg',
    '百合茯苓玫瑰饮': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_1561175b483e4ea79cb09d0b359f5c73_%E8%8C%B6%E5%8C%85__%E7%99%BE%E5%90%88%E8%8C%AF%E8%8B%93%E7%8E%AB%E7%91%B0%E9%A5%AE.jpg',
    '乌梅甘草桂花饮': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_5c9ad6805d9344b78a1965f5f76842ae_%E8%8C%B6%E5%8C%85__%E4%B9%8C%E6%A2%85%E7%94%98%E8%8D%89%E6%A1%82%E8%8A%B1%E9%A5%AE.jpg',
    '私人定制纤纤饮': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_30cadc3bd751437a82e0758247dc4362_%E8%8C%B6%E5%8C%85__%E7%A7%81%E4%BA%BA%E5%AE%9A%E5%88%B6%E7%BA%A4%E7%BA%A4%E9%A5%AE.jpg',
  },
  soup: {
    '山药茯苓薏仁汤': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_74f4994a568642c2a3884b00096316fc_%E8%8D%AF%E8%86%B3__%E5%B1%B1%E8%8D%AF%E8%8C%AF%E8%8B%93%E8%96%8F%E4%BB%81%E6%B1%A4.jpg',
    '新四神汤': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_ff76d66f8e164144b9c1e26dee364443_%E8%8D%AF%E8%86%B3__%E6%96%B0%E5%9B%9B%E7%A5%9E%E6%B1%A4_.jpg',
    '玉竹百合清补汤': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_38d1e1691850478ab99a7cab1865beb1_%E8%8D%AF%E8%86%B3__%E7%8E%89%E7%AB%B9%E7%99%BE%E5%90%88%E6%B8%85%E8%A1%A5%E6%B1%A4_.jpg',
    '五指毛桃茯苓汤': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_19b9dc737ede474cb6c89628d6a366b2_%E8%8D%AF%E8%86%B3__%E4%BA%94%E6%8C%87%E6%AF%9B%E6%A1%83%E8%8C%AF%E8%8B%93%E6%B1%A4.jpg',
    '人参虫草花菌汤': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_72f8860972c643728205e26b7537c02e_%E8%8D%AF%E8%86%B3__%E4%BA%BA%E5%8F%82%E8%99%AB%E8%8D%89%E8%8A%B1%E8%8F%8C%E6%B1%A4.jpg',
    '猴头菇无花果汤': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_4b9e0db3c1b5484282f0b06aeaa848d6_%E8%8D%AF%E8%86%B3__%E7%8C%B4%E5%A4%B4%E8%8F%87%E6%97%A0%E8%8A%B1%E6%9E%9C%E6%B1%A4.jpg',
    '桑葚百合黄芪汤': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_e8aa37823b9e413cac55284cb9dc8d50_%E8%8D%AF%E8%86%B3__%E6%A1%91%E8%91%9A%E7%99%BE%E5%90%88%E9%BB%84%E8%8A%AA%E6%B1%A4.jpg',
    '西洋参麦冬黄芪汤': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_d18e28455754420393715b4be7f02397_%E8%8D%AF%E8%86%B3__%E8%A5%BF%E6%B4%8B%E5%8F%82%E9%BA%A6%E5%86%AC%E9%BB%84%E8%8A%AA%E6%B1%A4.jpg',
    '铁皮石斛麦冬汤': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_73d1f3191e1e42d893e07fdff575888b_%E8%8D%AF%E8%86%B3__%E9%93%81%E7%9A%AE%E7%9F%B3%E6%96%9B%E9%BA%A6%E5%86%AC%E6%B1%A4.jpg',
    '花胶虫草黄芪汤': 'https://yaoshitongyuanzishou-1317479375.cos.ap-guangzhou.myqcloud.com/yaoshitongyuanzishou-1317479375/1/object_ef497c1c656043348b6793007bb87566_%E8%8D%AF%E8%86%B3__%E8%8A%B1%E8%83%B6%E8%99%AB%E8%8D%89%E9%BB%84%E8%8A%AA%E6%B1%A4_.jpg',
  },
}

type Product = {
  name: string
  series: string
  type: string
  spec: string
  price: string
  benefit: string
  packageName: string
  note?: string
  image: string
  featured?: boolean
}

type PackageProduct = Product & {
  positioning: string
  content: string
  service: string
  audience: string
}

const packages: PackageProduct[] = [
  {
    name: '减脂套餐',
    series: '医学营养系列',
    type: '疗程套餐',
    spec: '1疗程',
    price: '799',
    benefit: '超重 / 腰腹脂肪偏高 / 代谢下降 / 久坐人群',
    packageName: '',
    note: '含四合一营养餐包 + 纤纤茶包 + 21天指导',
    image: imageUrls.slimKit,
    featured: true,
    positioning: '医学营养 + 中医体质调理',
    content: '四合一综合营养膳食餐包 1盒，私人定制纤纤茶包 3盒',
    service: '营养师21天全程跟踪指导',
    audience: '超重人群、腰腹脂肪偏高、代谢下降、久坐办公',
  },
  {
    name: '生发乌发套餐',
    series: '乌发生发系列',
    type: '疗程套餐',
    spec: '1疗程',
    price: '350',
    benefit: '脱发 / 发质干枯 / 熬夜 / 气血不足人群',
    packageName: '',
    note: '含洗发皂 + 黄精芝麻丸 + 九制悦发膏',
    image: imageUrls.hairKit,
    featured: true,
    positioning: '中医调理 + 生活方式指导',
    content: '中药手工洗发皂 1块，黄精芝麻丸 1罐，九制悦发膏 1瓶',
    service: '健康管理师生活方式指导',
    audience: '脱发困扰、发质干枯、熬夜人群、气血不足',
  },
  {
    name: '睡眠套餐',
    series: '膏方/养生粉',
    type: '疗程套餐',
    spec: '1疗程',
    price: '568',
    benefit: '入睡困难 / 易醒多梦 / 睡眠质量差 / 压力大',
    packageName: '',
    note: '含晚安膏 + 酸枣仁粉 + 健管师指导',
    image: imageUrls.sleepKit,
    featured: true,
    positioning: '中医调理 + 健康管理师指导',
    content: '晚安膏 2瓶，酸枣仁百合茯苓桂圆粉 2罐',
    service: '健康管理师生活方式指导',
    audience: '入睡困难、易醒多梦、睡眠质量差、压力较大',
  },
  {
    name: '医学营养干预套餐',
    series: '医学营养系列',
    type: '疗程套餐',
    spec: '1套',
    price: '2388',
    benefit: '体重管理 / 营养干预 / 代谢管理 / 专业跟踪',
    packageName: '',
    note: '含综合营养膳食餐包 4盒及配套工具',
    image: imageUrls.slimKit,
    featured: true,
    positioning: '营养师一对一专业干预',
    content: '综合营养膳食餐包 4盒，赠试纸、腰围尺、多维矿物质',
    service: '营养师一对一专业指导',
    audience: '体重管理、营养干预、代谢管理、专业跟踪',
  },
]

const coreProducts: Product[] = [
  {
    name: '四合一综合营养膳食餐包',
    series: '医学营养系列',
    type: '单品',
    spec: '盒',
    price: '597',
    benefit: '医学营养干预，全面代餐',
    packageName: '减脂套餐 / 医学营养干预套餐',
    note: '三甲医院同款',
    image: imageUrls.slimKit,
    featured: true,
  },
  {
    name: '私人定制纤纤茶包',
    series: '中医特色茶包系列',
    type: '单品',
    spec: '盒（7袋/份）',
    price: '58',
    benefit: '调节体重，促进代谢',
    packageName: '减脂套餐',
    image: imageUrls.slimTea,
    featured: true,
  },
  {
    name: '中药手工洗发皂',
    series: '乌发生发系列',
    type: '单品',
    spec: '块',
    price: '68',
    benefit: '中药养护头皮，乌发生发',
    packageName: '生发乌发套餐',
    image: imageUrls.hairProduct,
  },
  {
    name: '黄精芝麻丸',
    series: '乌发生发系列',
    type: '单品',
    spec: '罐',
    price: '128',
    benefit: '补肾益精，乌发润肤',
    packageName: '生发乌发套餐',
    image: imageUrls.hairKit,
  },
  {
    name: '九制悦发膏',
    series: '膏方系列',
    type: '单品',
    spec: '瓶',
    price: '158',
    benefit: '滋养头发，防脱生发',
    packageName: '生发乌发套餐',
    image: imageUrls.tonicPaste,
  },
  {
    name: '晚安膏',
    series: '睡眠调理系列',
    type: '单品',
    spec: '瓶',
    price: '158',
    benefit: '宁心安神，助眠改善',
    packageName: '睡眠套餐',
    image: imageUrls.sleepProduct,
  },
  {
    name: '酸枣仁百合茯苓桂圆粉',
    series: '养生粉系列',
    type: '单品',
    spec: '罐',
    price: '128',
    benefit: '安神宁心，健脾养血',
    packageName: '睡眠套餐',
    image: imageUrls.powderBottle,
  },
  {
    name: '益生菌益生元固体饮料',
    series: '医学营养系列',
    type: '单品',
    spec: '盒（15包×15g）',
    price: '198',
    benefit: '肠道健康，增强免疫',
    packageName: '单独销售',
    note: '至膳益生品牌',
    image: imageUrls.powderPackage,
  },
  {
    name: '营养棒（医学营养套装）',
    series: '医学营养系列',
    type: '单品',
    spec: '8盒套装',
    price: '2180',
    benefit: '全面营养补充，体重管理',
    packageName: '单独销售',
    note: '赠试纸、腰围尺、多维矿物质',
    image: imageUrls.powderDetail,
  },
]

const teaProducts: Product[] = [
  ['元气是四宝茶', '98', '综合调理，补气养血'],
  ['胖大海润润饮', '68', '润喉利咽，清热解毒'],
  ['苹果四神汤', '68', '健脾养胃，调理消化'],
  ['小吊梨汤', '68', '润肺止咳，生津解渴'],
  ['葛根枳椇子', '68', '解酒护肝，疏通经络'],
  ['黄精黑黑饮', '68', '补肾益精，乌发润肤'],
  ['雪梨玉竹百合茶', '68', '润肺养阴，清心安神'],
  ['苹果黄芪麦冬饮', '68', '益气生津，养阴润燥'],
  ['石斛麦冬白茶饮', '68', '滋阴清热，生津益胃'],
  ['姜枣暖暖茶', '68', '温中散寒，暖胃驱寒'],
  ['五指毛桃茯苓饮', '68', '健脾益气，祛湿化痰'],
  ['金银花牛蒡饮', '68', '清热解毒，疏散风热'],
  ['山楂桑葚玫瑰饮', '68', '消食化积，活血美颜'],
  ['百合茯苓玫瑰饮', '68', '安神宁心，健脾祛湿'],
  ['乌梅甘草桂花饮', '68', '生津止渴，健脾开胃'],
  ['私人定制纤纤饮', '68', '调节体重，促进代谢'],
].map(([name, price, benefit]) => ({
  name,
  series: '中医特色茶包系列',
  type: '茶包',
  spec: '7袋/份',
  price,
  benefit,
  packageName: name === '私人定制纤纤饮' ? '减脂套餐' : '单独销售',
  image: imageUrls.tea[name as keyof typeof imageUrls.tea] ?? imageUrls.teaPackage,
}))

const soupProducts: Product[] = [
  ['山药茯苓薏仁汤', '18', '健脾祛湿，调理脾胃'],
  ['新四神汤', '22', '健脾补肾，祛湿消肿'],
  ['玉竹百合清补汤', '22', '润肺养阴，清心安神'],
  ['五指毛桃茯苓汤', '25', '益气健脾，祛湿消肿'],
  ['人参虫草花菌汤', '25', '补气益肾，增强免疫'],
  ['猴头菇无花果汤', '28', '健胃消食，养护脾胃'],
  ['桑葚百合黄芪汤', '25', '补血养肝，益气安神'],
  ['西洋参麦冬黄芪汤', '32', '益气养阴，生津止渴'],
  ['铁皮石斛麦冬汤', '32', '滋阴清热，养胃生津'],
  ['花胶虫草黄芪汤', '38', '补气养血，滋润养颜'],
].map(([name, price, benefit]) => ({
  name,
  series: '中医药膳系列',
  type: '药膳',
  spec: '独立包装',
  price,
  benefit,
  packageName: '单独销售',
  image: imageUrls.soup[name as keyof typeof imageUrls.soup],
}))

const allProducts = [...packages, ...coreProducts, ...teaProducts, ...soupProducts]
const featuredProducts = [...packages.slice(0, 3), ...coreProducts.filter((product) => product.featured)]

const categoryStats = [
  { label: '疗程套餐', value: '4', desc: '350 ~ 2388 元/疗程' },
  { label: '核心单品', value: '9', desc: '58 ~ 2180 元' },
  { label: '中医茶包', value: '16', desc: '68 ~ 98 元/份' },
  { label: '中医药膳', value: '10', desc: '18 ~ 38 元/包' },
]

const navItems = [
  { href: '#packages', label: '套餐' },
  { href: '#products', label: '商品' },
  { href: '#quality', label: '说明' },
  { href: '#wechat', label: '购买' },
]

function formatPrice(price: string) {
  return `¥${Number(price).toLocaleString('zh-CN')}`
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#d9ded3] bg-white shadow-[0_12px_32px_rgba(35,47,39,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(35,47,39,0.14)]">
      <div className="aspect-[4/3] overflow-hidden bg-[#eef2e8]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex min-h-[242px] flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Tag color="green" className="mb-2">{product.type}</Tag>
            <h3 className="text-lg font-semibold leading-snug text-[#243126]">{product.name}</h3>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-xl font-bold text-[#b24d2b]">{formatPrice(product.price)}</div>
            <div className="text-xs text-[#72806f]">{product.spec}</div>
          </div>
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-[#5e695d]">{product.benefit}</p>
        <div className="mt-auto space-y-2 border-t border-[#edf0ea] pt-3 text-xs text-[#748071]">
          <div>{product.series}</div>
          <div>{product.packageName}</div>
          {product.note && <div>{product.note}</div>}
        </div>
      </div>
    </article>
  )
}

function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8a5c34]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#243126] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[#697568]">{desc}</p>
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f7f6ef] text-[#243126]">
      <header className="fixed top-0 z-50 w-full border-b border-white/30 bg-[#fbfaf4]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2f5c43] shadow-[0_8px_18px_rgba(47,92,67,0.22)]">
              <BrandMark />
            </span>
            <span>
              <span className="block text-lg font-semibold tracking-tight">禾沐健康</span>
              <span className="hidden text-xs text-[#738071] sm:block">药食同源产品展示</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[#556253] md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#b24d2b]">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#wechat"
              className="hidden h-9 items-center gap-2 rounded-full bg-[#b24d2b] px-4 text-sm font-medium text-white transition hover:bg-[#923e23] sm:flex"
            >
              <MessageCircle size={16} />
              扫码购买
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-[86vh] overflow-hidden pt-16">
          <img
            src={imageUrls.hero}
            alt="禾沐健康药食同源产品"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#13251a]/55" />
          <div className="relative mx-auto flex min-h-[calc(86vh-4rem)] max-w-7xl flex-col justify-end px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_320px]">
              <div className="max-w-3xl pb-4 text-white">
                <Tag color="gold" className="mb-5">39 款产品 · 套餐 / 茶包 / 药膳 / 膏方</Tag>
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  药食同源日常调理产品，一站式展示与咨询购买
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/86 sm:text-lg">
                  覆盖体重管理、睡眠调理、乌发生发、日常茶饮和家庭药膳。价格、规格和适用场景直接来自产品统计表。
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#packages"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#243126] transition hover:bg-[#eef2e8]"
                  >
                    <Package size={17} />
                    查看套餐
                  </a>
                  <a
                    href="#wechat"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-[#b24d2b] px-5 text-sm font-semibold text-white transition hover:bg-[#923e23]"
                  >
                    <MessageCircle size={17} />
                    加微信下单
                  </a>
                </div>
              </div>
              <div id="wechat" className="rounded-lg border border-white/25 bg-white/94 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <div className="grid grid-cols-[108px_1fr] items-center gap-4 sm:grid-cols-[132px_1fr] lg:block">
                  <img
                    src={qrCodeUrl}
                    alt="微信二维码"
                    className="aspect-square w-full rounded-md object-cover lg:mx-auto lg:w-44"
                  />
                  <div className="lg:mt-4 lg:text-center">
                    <div className="text-base font-semibold text-[#243126]">扫码添加微信购买</div>
                    <p className="mt-2 text-sm leading-6 text-[#697568]">
                      添加好友后确认商品、数量和收货信息，再通过微信转账完成购买。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#e3e1d5] bg-[#fbfaf4] px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categoryStats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between rounded-lg bg-white px-5 py-4 shadow-[0_8px_26px_rgba(35,47,39,0.06)]">
                <div>
                  <div className="text-sm text-[#697568]">{stat.label}</div>
                  <div className="mt-1 text-xs text-[#8a5c34]">{stat.desc}</div>
                </div>
                <div className="text-3xl font-semibold text-[#2f5c43]">{stat.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="packages" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="疗程套餐"
              title="按场景组合好的调理方案"
              desc="套餐内容、指导服务和适合人群来自产品统计表，方便用户快速找到对应需求。"
            />
            <div className="grid gap-6 lg:grid-cols-4">
              {packages.map((item) => (
                <article key={item.name} className="overflow-hidden rounded-lg bg-white shadow-[0_12px_32px_rgba(35,47,39,0.08)]">
                  <div className="aspect-[4/3] overflow-hidden bg-[#eef2e8]">
                    <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="space-y-4 p-5">
                    <div>
                      <div className="mb-2 text-sm font-medium text-[#8a5c34]">{item.positioning}</div>
                      <h3 className="text-xl font-semibold text-[#243126]">{item.name}</h3>
                    </div>
                    <div className="flex items-end justify-between gap-4">
                      <span className="text-3xl font-bold text-[#b24d2b]">{formatPrice(item.price)}</span>
                      <span className="text-sm text-[#697568]">{item.spec}</span>
                    </div>
                    <p className="text-sm leading-6 text-[#5e695d]">{item.content}</p>
                    <div className="space-y-2 border-t border-[#edf0ea] pt-4 text-xs leading-5 text-[#697568]">
                      <div>{item.service}</div>
                      <div>{item.audience}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eef2e8] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="推荐单品"
              title="高频咨询产品"
              desc="把套餐主品、体重管理和茶包等商品放在前面，便于用户快速扫价。"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="商品目录"
              title="39 款产品完整展示"
              desc="包含套餐、核心单品、中医特色茶包和中医药膳，所有价格与规格按现有表格录入。"
            />
            <ProductShelf title="核心单品" products={coreProducts} />
            <ProductShelf title="中医特色茶包系列" products={teaProducts} />
            <ProductShelf title="中医药膳系列" products={soupProducts} />
          </div>
        </section>

        <section id="quality" className="bg-[#fbfaf4] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8a5c34]">产品体系</p>
                <h2 className="text-3xl font-semibold tracking-tight text-[#243126] sm:text-4xl">按人群和日常场景组织商品</h2>
                <p className="mt-5 text-base leading-8 text-[#697568]">
                  当前素材未包含明确证书或资质文件，因此页面不展示证书编号。页面重点呈现真实商品图、价格、规格、适用场景和微信咨询下单路径。
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    ['产品总计', `${allProducts.length} 款`],
                    ['价格区间', '18 ~ 2388 元'],
                    ['茶包规格', '7袋/份'],
                    ['药膳规格', '独立包装'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-[#d9ded3] bg-white p-4">
                      <div className="text-sm text-[#697568]">{label}</div>
                      <div className="mt-2 text-xl font-semibold text-[#2f5c43]">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { icon: <ShieldCheck size={22} />, title: '信息透明', desc: '价格、规格、适用场景集中展示。' },
                  { icon: <Sparkles size={22} />, title: '场景清晰', desc: '按体重、睡眠、乌发、茶饮、药膳分类。' },
                  { icon: <Utensils size={22} />, title: '微信成交', desc: '加好友确认需求后再转账购买。' },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg bg-[#2f5c43] p-5 text-white">
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/14">{item.icon}</div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e3e1d5] bg-[#243126] px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/72 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-white">禾沐健康 · 药食同源产品展示</div>
            <div className="mt-1">扫码添加微信，沟通确认后转账购买。</div>
          </div>
          <a href="#wechat" className="inline-flex items-center gap-2 text-white transition hover:text-[#f0c27a]">
            <MessageCircle size={16} />
            微信咨询购买
          </a>
        </div>
      </footer>
    </div>
  )
}

function ProductShelf({ title, products }: { title: string; products: Product[] }) {
  return (
    <div className="mb-14 last:mb-0">
      <div className="mb-5 flex items-end justify-between gap-4 border-b border-[#d9ded3] pb-3">
        <h3 className="text-2xl font-semibold text-[#243126]">{title}</h3>
        <span className="text-sm text-[#697568]">{products.length} 款</span>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  )
}

function BrandMark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-8 w-8">
      <path d="M17 39c2.7 6.2 8.3 9.8 15 9.8s12.3-3.6 15-9.8H17Z" fill="#f8f1d8" />
      <path d="M20 35.2h24" fill="none" stroke="#f8f1d8" strokeLinecap="round" strokeWidth="4" />
      <path d="M32 34.2c-1.5-8 2.9-15 13.2-18.8 1.2 10.7-4 17.5-13.2 18.8Z" fill="#9fcf92" />
      <path d="M31.5 34.2c-7.7-1.2-12.2-6.7-12.1-15.8 8.7 2.2 13 8.1 12.1 15.8Z" fill="#d9b56d" />
      <path d="M32 18v25" fill="none" stroke="#f8f1d8" strokeLinecap="round" strokeWidth="3.6" />
      <path d="M25 27.5h14" fill="none" stroke="#f8f1d8" strokeLinecap="round" strokeWidth="3.2" />
      <circle cx="32" cy="32" r="27" fill="none" opacity=".42" stroke="#f8f1d8" strokeWidth="2" />
    </svg>
  )
}
