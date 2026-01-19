import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: '张经理',
      company: '某大型连锁超市采购部',
      avatar: 'https://ui-avatars.com/api/?name=Zhang&background=10b981&color=fff&size=128',
      rating: 5,
      content: '萌瑞农业的库尔勒香梨品质稳定，供货及时，完善的可追溯系统让我们对产品质量非常放心。合作三年来，客户反馈一直很好。',
      highlight: '品质稳定'
    },
    {
      id: 2,
      name: '李总',
      company: '新疆某农业合作社',
      avatar: 'https://ui-avatars.com/api/?name=Li&background=3b82f6&color=fff&size=128',
      rating: 5,
      content: '他们的智能灌溉解决方案帮我们节省了40%的用水成本，技术团队专业且响应迅速，真正实现了降本增效。',
      highlight: '节水40%'
    },
    {
      id: 3,
      name: '王女士',
      company: '某食品加工企业',
      avatar: 'https://ui-avatars.com/api/?name=Wang&background=f59e0b&color=fff&size=128',
      rating: 5,
      content: '红枣的品质超出预期，甜度高、颗粒饱满。萌瑞农业的产品让我们的加工食品更有竞争力，期待长期合作。',
      highlight: '品质超预期'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4"
          >
            客户评价
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            客户的信任是我们前进的动力
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            来自全国各地合作伙伴的真实反馈
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 relative group hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-emerald-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-full mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                {testimonial.highlight}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">200+</div>
            <div className="text-sm text-gray-600">合作伙伴</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">满意度</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">5年</div>
            <div className="text-sm text-gray-600">平均合作周期</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">复购率</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
