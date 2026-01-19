import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, MapPin, Calendar, Thermometer, Droplet, Award } from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams();

  const products = {
    'korla-pear': {
      name: '库尔勒香梨',
      subtitle: '新疆特产 · 天然果香',
      hero: 'https://images.unsplash.com/photo-1661858914901-da2a5ce42d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFyJTIwb3JjaGFyZCUyMGhhcnZlc3R8ZW58MXx8fHwxNzY4ODA2OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '库尔勒香梨是新疆的特产水果，以其独特的香味、皮薄肉嫩、汁多味甜而享誉全国。我们的香梨种植基地位于铁门关市核心产区，采用有机种植方式，确保每一颗香梨都达到最高品质标准。',
      features: [
        '果形端正，色泽金黄',
        '皮薄核小，肉质细腻',
        '香味浓郁，清脆爽口',
        '糖度≥13%，口感极佳',
        '富含维生素和微量元素',
        '有机种植，零农药残留'
      ],
      specs: [
        { label: '产地', value: '新疆铁门关市' },
        { label: '种植面积', value: '3,000亩' },
        { label: '年产量', value: '5,000吨' },
        { label: '采摘期', value: '每年9月-10月' },
        { label: '储存温度', value: '0-4°C' },
        { label: '保质期', value: '冷藏6个月' }
      ],
      advantages: [
        {
          icon: <MapPin className="text-emerald-600" size={24} />,
          title: '地理优势',
          content: '铁门关地处天山南麓，日照充足，昼夜温差大，为香梨提供了得天独厚的生长环境'
        },
        {
          icon: <Droplet className="text-blue-600" size={24} />,
          title: '灌溉技术',
          content: '采用智能滴灌系统，精准控制水肥供应，确保香梨品质稳定'
        },
        {
          icon: <Award className="text-purple-600" size={24} />,
          title: '品质认证',
          content: '获得有机产品认证、绿色食品认证等多项权威认证'
        }
      ],
      process: [
        { step: '01', title: '精选果园', desc: '选择最佳产区果园' },
        { step: '02', title: '科学种植', desc: '有机肥料，智能管理' },
        { step: '03', title: '人工采摘', desc: '成熟度把控严格' },
        { step: '04', title: '分级筛选', desc: '多道工序精选' },
        { step: '05', title: '冷链运输', desc: '全程温控保鲜' },
        { step: '06', title: '快速配送', desc: '48小时送达' }
      ]
    },
    'red-dates': {
      name: '新疆红枣',
      subtitle: '天然补品 · 营养丰富',
      hero: 'https://images.unsplash.com/photo-1589877797619-f834a3734f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBkYXRlcyUyMGZydWl0fGVufDF8fHx8MTc2ODgwNjk1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '新疆红枣以其个大、皮薄、肉厚、味甜著称。我们精选灰枣和骏枣两大优质品种，采用传统晾晒工艺结合现代化加工技术，完整保留红枣的营养成分和天然风味。',
      features: [
        '颗粒饱满，色泽红润',
        '肉质厚实，口感绵软',
        '甜度高，无添加糖',
        '富含铁、钙等矿物质',
        '天然晾晒，保留营养',
        '严格筛选，颗颗精品'
      ],
      specs: [
        { label: '产地', value: '新疆铁门关市' },
        { label: '种植面积', value: '4,000亩' },
        { label: '年产量', value: '3,000吨' },
        { label: '采摘期', value: '每年10月-11月' },
        { label: '水分含量', value: '≤20%' },
        { label: '保质期', value: '常温12个月' }
      ],
      advantages: [
        {
          icon: <Thermometer className="text-orange-600" size={24} />,
          title: '气候优势',
          content: '新疆独特的干旱气候和充足日照，使红枣糖分积累更充分，营养价值更高'
        },
        {
          icon: <Calendar className="text-emerald-600" size={24} />,
          title: '生长周期',
          content: '180天超长生长周期，让红枣充分吸收养分，品质更优'
        },
        {
          icon: <Award className="text-purple-600" size={24} />,
          title: '加工工艺',
          content: '传统晾晒+现代烘干技术，最大程度保留红枣的营养和风味'
        }
      ],
      process: [
        { step: '01', title: '基地种植', desc: '优质品种科学栽培' },
        { step: '02', title: '成熟采摘', desc: '适时采收确保品质' },
        { step: '03', title: '清洗分级', desc: '自动化清洗分选' },
        { step: '04', title: '晾晒烘干', desc: '传统工艺保留营养' },
        { step: '05', title: '质量检测', desc: '多项指标严格把关' },
        { step: '06', title: '包装入库', desc: '真空包装保鲜存储' }
      ]
    },
    'cotton': {
      name: '优质棉花',
      subtitle: '新疆长绒棉 · 纤维之王',
      hero: 'https://images.unsplash.com/photo-1583316176136-baa91309b8b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBmaWVsZCUyMGhhcnZlc3R8ZW58MXx8fHwxNzY4ODA2OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '新疆长绒棉是世界公认的优质棉花品种，纤维长度可达33-39mm，具有品质优良、纤维长、强度高等特点。我们的棉花种植基地采用机械化采收和智能化管理，确保棉花品质达到国际一流水平。',
      features: [
        '纤维超长，平均35mm+',
        '强度高，断裂强度≥30cN/tex',
        '色泽洁白，光泽度好',
        '杂质少，含杂率<4%',
        '机械化采收，效率高',
        '符合国际棉花标准'
      ],
      specs: [
        { label: '产地', value: '新疆铁门关市' },
        { label: '种植面积', value: '3,000亩' },
        { label: '年产量', value: '1,500吨' },
        { label: '采收期', value: '每年9月-10月' },
        { label: '纤维长度', value: '33-39mm' },
        { label: '品质等级', value: '一级以上' }
      ],
      advantages: [
        {
          icon: <MapPin className="text-emerald-600" size={24} />,
          title: '产区优势',
          content: '铁门关是中国优质棉花主产区，光热资源丰富，适合棉花生长'
        },
        {
          icon: <Thermometer className="text-blue-600" size={24} />,
          title: '科技种植',
          content: '采用精量播种、水肥一体化等现代种植技术，提高棉花品质'
        },
        {
          icon: <Award className="text-purple-600" size={24} />,
          title: '机械采收',
          content: '全程机械化作业，减少人工污染，保证棉花洁净度'
        }
      ],
      process: [
        { step: '01', title: '土地整理', desc: '深耕细作培肥地力' },
        { step: '02', title: '精量播种', desc: 'GPS导航精准播种' },
        { step: '03', title: '智能管理', desc: '水肥一体化精准灌溉' },
        { step: '04', title: '病虫防治', desc: '生物防治绿色环保' },
        { step: '05', title: '机械采收', desc: '大型采棉机高效作业' },
        { step: '06', title: '加工入库', desc: '轧花分级质量检测' }
      ]
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">产品未找到</h2>
        <Link to="/" className="text-emerald-600 hover:text-emerald-700">返回首页</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={product.hero}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            返回首页
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              {product.subtitle}
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              {product.name}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              {product.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">产品特点</h2>
            <p className="text-lg text-gray-600">严格把控每个环节，确保最优品质</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors group"
              >
                <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-700 leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Specs */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">产品参数</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="text-sm text-gray-500 mb-2">{spec.label}</div>
                <div className="text-2xl font-bold text-gray-900">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心优势</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">生产流程</h2>
            <p className="text-lg text-gray-600">标准化流程，品质可追溯</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                  <div className="text-5xl font-bold text-emerald-100 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                
                {index < product.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-green-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              想要了解更多？
            </h2>
            <p className="text-xl text-white/90 mb-8">
              欢迎联系我们，获取产品样品和详细报价
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg"
              >
                立即咨询
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all backdrop-blur-sm border border-white/30"
              >
                查看更多产品
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
