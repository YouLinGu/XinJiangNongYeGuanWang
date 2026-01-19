import { motion } from 'motion/react';
import { Award, Target, Users, TrendingUp, CheckCircle, Globe } from 'lucide-react';

export function About() {
  const milestones = [
    { year: '2015', event: '萌瑞农业成立，在铁门关建立首个生态种植基地' },
    { year: '2017', event: '获得ISO9001国际质量管理体系认证' },
    { year: '2019', event: '引进智能灌溉系统，开启农业科技化转型' },
    { year: '2021', event: '产品出口至东南亚多个国家，开拓国际市场' },
    { year: '2023', event: '与中国农业大学建立产学研合作基地' },
    { year: '2025', event: '成为新疆现代农业示范企业，服务200+合作伙伴' },
  ];

  const values = [
    {
      icon: <Target className="text-emerald-600" size={32} />,
      title: '品质至上',
      description: '严格把控每个环节，从种植到采收，确保每一份产品都达到最高标准'
    },
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: '客户第一',
      description: '以客户需求为导向，提供个性化解决方案和贴心服务'
    },
    {
      icon: <TrendingUp className="text-purple-600" size={32} />,
      title: '创新驱动',
      description: '持续引进先进技术，推动农业现代化和智能化发展'
    },
    {
      icon: <Globe className="text-orange-600" size={32} />,
      title: '可持续发展',
      description: '坚持绿色农业理念，保护生态环境，造福子孙后代'
    }
  ];

  const certificates = [
    'ISO 9001 质量管理体系认证',
    'ISO 14001 环境管理体系认证',
    '有机产品认证证书',
    'HACCP 食品安全管理体系认证',
    '出口食品生产企业备案',
    '绿色食品认证',
    '国家级农业产业化重点龙头企业',
    '新疆名牌产品'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njg4MDY4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Company Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            关于萌瑞农业
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            立足铁门关，以科技赋能农业，用品质铸就未来
          </motion.p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                公司简介
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                新疆萌瑞农业科技有限公司
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                成立于2015年，总部位于新疆铁门关市。公司依托铁门关得天独厚的自然资源和气候条件，专注于高品质农产品种植、加工与销售，以及现代农业技术服务。
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                我们拥有超过10,000亩的标准化种植基地，主营产品包括库尔勒香梨、优质红枣、新疆长绒棉等。通过引进国际先进的智能灌溉系统、无人机植保技术和农业大数据平台，实现了从传统农业向现代智慧农业的转型升级。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                公司秉承"科技兴农、品质为先"的理念，已获得ISO9001、有机产品认证等多项国际认证，产品远销国内外市场，与200多家企业建立了长期稳定的合作关系。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1764690690771-b4522d66b433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwdGVhbSUyMG1lZXRpbmclMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3Njg4MDgzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Meeting"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-emerald-500 rounded-3xl -z-10 opacity-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">我们的使命</h3>
              <p className="text-gray-600 leading-relaxed">
                以科技创新驱动农业现代化，为消费者提供安全、健康、高品质的农产品，为合作伙伴创造价值，为社会可持续发展贡献力量。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-10 text-white shadow-lg"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">我们的愿景</h3>
              <p className="text-white/90 leading-relaxed">
                成为中国西北地区最具影响力的现代农业科技企业，引领行业标准，打造国际知名的新疆农产品品牌。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4"
            >
              企业文化
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              核心价值观
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-emerald-50 group-hover:to-green-50 rounded-2xl flex items-center justify-center mb-6 transition-all">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4"
            >
              发展历程
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              十年砥砺前行
            </motion.h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-green-600 hidden lg:block"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 lg:mb-16 ${index % 2 === 0 ? 'lg:pr-1/2 lg:text-right' : 'lg:pl-1/2 lg:ml-auto'}`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                    <div className="text-2xl font-bold text-emerald-600 mb-2">{milestone.year}</div>
                    <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 w-4 h-4 bg-emerald-600 rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4"
            >
              荣誉资质
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              权威认证 品质保障
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                  <p className="text-gray-700 leading-relaxed">{cert}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1766722906733-609eebf3b63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzY4Nzg3NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Certificates"
              className="rounded-3xl shadow-2xl mx-auto max-w-4xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
