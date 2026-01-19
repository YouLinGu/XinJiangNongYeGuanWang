import { motion } from 'motion/react';
import { Droplet, Plane, Database, Smartphone, Cpu, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Solutions() {
  const solutions = [
    {
      icon: <Droplet className="text-blue-600" size={40} />,
      title: '智能水肥一体化系统',
      subtitle: 'Smart Irrigation System',
      description: '基于物联网技术的精准灌溉解决方案，实时监测土壤墒情，智能控制灌溉，节水节肥，提高作物产量和品质。',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwc3lzdGVtJTIwZmFybXxlbnwxfHx8fDE3Njg3ODc1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        '土壤传感器实时监测',
        'AI智能决策算法',
        '远程手机APP控制',
        '节水率达40%以上',
        '提高肥料利用率35%',
        '降低人工成本60%'
      ],
      specs: [
        { label: '覆盖面积', value: '最大5000亩' },
        { label: '传感器精度', value: '±2%' },
        { label: '响应时间', value: '<5秒' },
        { label: '电池续航', value: '3-5年' }
      ]
    },
    {
      icon: <Plane className="text-emerald-600" size={40} />,
      title: '无人机植保服务',
      subtitle: 'Drone Plant Protection',
      description: '采用先进的农业无人机进行病虫害防治，效率高、覆盖广、雾化效果好，大幅提升植保效率和效果。',
      image: 'https://images.unsplash.com/photo-1714956093880-4d3560e0b731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwbWFjaGluZXJ5JTIwaGFydmVzdHxlbnwxfHx8fDE3Njg4MDc0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        '每小时作业60-80亩',
        'GPS精准导航',
        '雾化效果均匀',
        '节省农药30%',
        '减少水污染',
        '避免人工接触农药'
      ],
      specs: [
        { label: '作业效率', value: '60-80亩/小时' },
        { label: '药箱容量', value: '20L' },
        { label: '飞行高度', value: '2-5米' },
        { label: '续航时间', value: '15-20分钟' }
      ]
    },
    {
      icon: <Database className="text-purple-600" size={40} />,
      title: '农业大数据平台',
      subtitle: 'Agricultural Big Data',
      description: '整合农业生产全流程数据，通过大数据分析为生产决策提供科学依据，实现精准农业管理。',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDB8fHx8MTczNzU4NzI2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        '生产数据实时采集',
        '多维度数据分析',
        '病虫害预警系统',
        '产量预测模型',
        '质量追溯体系',
        '可视化数据大屏'
      ],
      specs: [
        { label: '数据采集点', value: '1000+个' },
        { label: '数据更新', value: '实时' },
        { label: '预测准确率', value: '>90%' },
        { label: '存储容量', value: '100TB+' }
      ]
    }
  ];

  const caseStudies = [
    {
      title: '某大型农场智能化改造',
      location: '新疆铁门关市',
      area: '5000亩',
      result: '节水45%，增产20%，年节省成本200万元',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwZmllbGQlMjBhZXJpYWx8ZW58MHx8fHwxNzM3NTg3MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: '香梨种植基地数字化管理',
      location: '新疆库尔勒市',
      area: '3000亩',
      result: '优果率提升至92%，实现全程质量追溯',
      image: 'https://images.unsplash.com/photo-1661858914901-da2a5ce42d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFyJTIwb3JjaGFyZCUyMGhhcnZlc3R8ZW58MXx8fHwxNzY4ODA2OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: '红枣种植基地无人机植保',
      location: '新疆阿克苏市',
      area: '4000亩',
      result: '植保效率提升300%，农药使用减少35%',
      image: 'https://images.unsplash.com/photo-1589877797619-f834a3734f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBkYXRlcyUyMGZydWl0fGVufDF8fHx8MTc2ODgwNjk1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjBkaWdpdGFsfGVufDF8fHx8MTc2ODgwNzQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Smart Agriculture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-green-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            智慧农业解决方案
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-200 mb-8"
          >
            科技赋能农业，让种植更智慧、更高效、更绿色
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-sm text-gray-200">节水率</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">300%</div>
              <div className="text-sm text-gray-200">效率提升</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-sm text-gray-200">成功案例</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Detail */}
      {solutions.map((solution, index) => (
        <section key={index} className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl flex items-center justify-center mb-6">
                  {solution.icon}
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">{solution.title}</h2>
                <p className="text-emerald-600 mb-6">{solution.subtitle}</p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{solution.description}</p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">核心功能</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {solution.specs.map((spec, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <div className="text-sm text-gray-500 mb-1">{spec.label}</div>
                      <div className="text-xl font-bold text-gray-900">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="rounded-3xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Technology Stack */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4"
            >
              技术架构
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              先进的技术体系
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Smartphone size={32} />, title: '移动应用', desc: 'iOS/Android APP，随时随地管理农田' },
              { icon: <Cpu size={32} />, title: '物联网', desc: '传感器网络，实时采集环境数据' },
              { icon: <Database size={32} />, title: '云计算', desc: '云端存储与计算，海量数据处理' },
              { icon: <BarChart size={32} />, title: 'AI算法', desc: '机器学习，智能决策支持' },
              { icon: <Droplet size={32} />, title: '自动控制', desc: '精准执行，无需人工干预' },
              { icon: <Plane size={32} />, title: '无人设备', desc: '无人机、机器人，自动化作业' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.title}</h3>
                <p className="text-gray-600">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4"
            >
              成功案例
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              真实案例见证实力
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">地点：</span>
                      <span>{study.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">规模：</span>
                      <span>{study.area}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500 mb-1">实施效果</div>
                    <div className="text-emerald-600 font-medium">{study.result}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-green-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              开启您的智慧农业之旅
            </h2>
            <p className="text-xl text-white/90 mb-8">
              我们提供从咨询、设计到实施、运维的全流程服务
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg"
              >
                免费咨询
              </Link>
              <a
                href="tel:400-123-4567"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all backdrop-blur-sm border border-white/30"
              >
                电话咨询：400-123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
