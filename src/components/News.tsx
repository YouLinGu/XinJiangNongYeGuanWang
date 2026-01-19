import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function News() {
  const newsItems = [
    {
      id: '1',
      category: '科技创新',
      categoryColor: 'bg-blue-500',
      title: '萌瑞农业引进最新智能灌溉系统，节水率达40%',
      excerpt: '我们最新部署的智能水肥一体化系统已在铁门关基地全面投入使用，通过物联网传感器和AI算法，实现精准灌溉...',
      image: 'https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjBkaWdpdGFsfGVufDF8fHx8MTc2ODgwNzQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2026-01-15',
      readTime: '5 分钟',
      featured: true
    },
    {
      id: '2',
      category: '产品资讯',
      categoryColor: 'bg-emerald-500',
      title: '2025年度库尔勒香梨丰收，品质创历史新高',
      excerpt: '今年香梨产量较去年增长25%，糖度平均达到13.5%，获得多家国际采购商青睐...',
      image: 'https://images.unsplash.com/photo-1661858914901-da2a5ce42d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFyJTIwb3JjaGFyZCUyMGhhcnZlc3R8ZW58MXx8fHwxNzY4ODA2OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2026-01-12',
      readTime: '4 分钟',
      featured: false
    },
    {
      id: '3',
      category: '行业动态',
      categoryColor: 'bg-purple-500',
      title: '新疆农业现代化进程加速，铁门关成为示范区',
      excerpt: '铁门关市被评为国家级现代农业示范区，萌瑞农业作为代表企业参与标准制定...',
      image: 'https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGlubm92YXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODgwNzQ3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2026-01-10',
      readTime: '6 分钟',
      featured: false
    },
    {
      id: '4',
      category: '企业新闻',
      categoryColor: 'bg-orange-500',
      title: '萌瑞农业与多所高校建立产学研合作基地',
      excerpt: '我们与中国农业大学、新疆农业大学签署战略合作协议，共同推进农业科技创新...',
      image: 'https://images.unsplash.com/photo-1687473774629-b160f5012e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjByZXNlYXJjaCUyMHNjaWVudGlzdHxlbnwxfHx8fDE3Njg4MDc0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2026-01-08',
      readTime: '5 分钟',
      featured: false
    },
    {
      id: '5',
      category: '技术分享',
      categoryColor: 'bg-teal-500',
      title: '无人机植保技术应用实践：效率提升300%',
      excerpt: '分享我们在大规模农田中应用无人机植保的经验，包括航线规划、药剂配比等核心技术...',
      image: 'https://images.unsplash.com/photo-1714956093880-4d3560e0b731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwbWFjaGluZXJ5JTIwaGFydmVzdHxlbnwxfHx8fDE3Njg4MDc0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2026-01-05',
      readTime: '8 分钟',
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="news" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            资讯动态
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            最新资讯
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            了解农业科技前沿动态，把握行业发展趋势
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Featured Article */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <img
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 ${newsItems[0].categoryColor} text-white text-sm font-medium rounded-full`}>
                    <TrendingUp size={16} />
                    热门资讯
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className={`inline-block w-fit px-3 py-1 ${newsItems[0].categoryColor} bg-opacity-10 text-sm font-medium rounded-full mb-4`}>
                  {newsItems[0].category}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-emerald-600 transition-colors">
                  {newsItems[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {newsItems[0].excerpt}
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{newsItems[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{newsItems[0].readTime}</span>
                  </div>
                </div>
                <Link
                  to={`/news/${newsItems[0].id}`}
                  className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:gap-4 transition-all"
                >
                  阅读全文
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.slice(1).map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 ${item.categoryColor} text-white text-xs font-medium rounded-full`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 mb-3 leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <Link
                    to={`/news/${item.id}`}
                    className="inline-flex items-center gap-2 text-sm text-emerald-600 font-medium hover:gap-3 transition-all"
                  >
                    了解更多
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-emerald-600 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105">
              查看更多资讯
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}