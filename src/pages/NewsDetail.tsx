import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Tag } from 'lucide-react';

export function NewsDetail() {
  const { id } = useParams();

  const newsArticles = {
    '1': {
      category: '科技创新',
      categoryColor: 'bg-blue-500',
      title: '萌瑞农业引进最新智能灌溉系统，节水率达40%',
      image: 'https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjBkaWdpdGFsfGVufDF8fHx8MTc2ODgwNzQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2026-01-15',
      author: '技术部 - 李明',
      readTime: '5 分钟',
      tags: ['智能灌溉', '节水技术', '科技创新'],
      content: `
        <p class="lead">随着农业现代化的不断推进，萌瑞农业始终走在科技创新的前沿。近日，我们成功引进并部署了最新一代智能水肥一体化灌溉系统，该系统已在铁门关基地全面投入使用，实现了令人瞩目的节水节肥效果。</p>

        <h2>系统核心技术</h2>
        <p>此次引进的智能灌溉系统采用了物联网（IoT）技术、人工智能算法和精准农业理念，主要包含以下核心功能：</p>
        <ul>
          <li><strong>土壤墒情实时监测：</strong>通过部署在农田中的多个传感器节点，系统可以24小时监测土壤湿度、温度、EC值等关键参数。</li>
          <li><strong>气象数据融合：</strong>结合本地气象站数据，系统能够预测未来3-7天的天气变化，提前调整灌溉计划。</li>
          <li><strong>AI智能决策：</strong>基于作物生长模型和历史数据，AI算法自动计算最优灌溉量和施肥配方。</li>
          <li><strong>远程智能控制：</strong>管理人员可通过手机APP随时随地查看农田状况，并进行远程控制。</li>
        </ul>

        <h2>显著成效</h2>
        <p>系统投入使用三个月以来，取得了显著的经济效益和社会效益：</p>
        <ul>
          <li>节水率达到40%以上，年节约用水约50万立方米</li>
          <li>肥料利用率提高35%，减少化肥使用量约100吨/年</li>
          <li>作物产量提升15-20%，品质明显改善</li>
          <li>人工成本降低60%，实现少人化、智能化管理</li>
        </ul>

        <h2>未来展望</h2>
        <p>萌瑞农业技术总监表示："这套智能灌溉系统不仅帮助我们大幅降低了生产成本，更重要的是通过精准管理实现了水资源的高效利用，这对于新疆这样水资源相对紧缺的地区具有重要意义。"</p>
        <p>接下来，公司计划将该系统推广到所有种植基地，并结合无人机植保、智能气象站等技术，构建完整的智慧农业生态系统。同时，我们也将向周边农户开放技术服务，带动区域农业整体升级。</p>

        <blockquote>
          "科技是第一生产力。我们相信，通过持续的技术创新，中国农业一定能够走向更加高效、绿色、可持续的未来。" —— 萌瑞农业CEO
        </blockquote>
      `
    },
    '2': {
      category: '产品资讯',
      categoryColor: 'bg-emerald-500',
      title: '2025年度库尔勒香梨丰收，品质创历史新高',
      image: 'https://images.unsplash.com/photo-1661858914901-da2a5ce42d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFyJTIwb3JjaGFyZCUyMGhhcnZlc3R8ZW58MXx8fHwxNzY4ODA2OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2026-01-12',
      author: '市场部 - 王芳',
      readTime: '4 分钟',
      tags: ['库尔勒香梨', '丰收', '品质'],
      content: `
        <p class="lead">金秋十月，硕果飘香。萌瑞农业的3000亩库尔勒香梨种植基地迎来了大丰收，今年的产量和品质均创历史新高，为公司和果农都带来了丰厚的收益。</p>

        <h2>丰收数据</h2>
        <p>经过统计，2025年度香梨收获情况如下：</p>
        <ul>
          <li>总产量：5200吨，较去年增长25%</li>
          <li>优果率：达到92%，创历史最高</li>
          <li>平均糖度：13.5%，超过国家特级标准</li>
          <li>单果重：平均260克，果形端正率98%</li>
        </ul>

        <h2>品质提升的秘诀</h2>
        <p>今年香梨品质的显著提升，得益于多方面因素的综合作用：</p>
        
        <h3>1. 科学管理</h3>
        <p>全面应用智能灌溉系统，根据香梨不同生长阶段的需水规律，实施精准灌溉，确保果树在最佳水分状态下生长。</p>

        <h3>2. 有机种植</h3>
        <p>坚持使用有机肥料，采用生物防治技术防控病虫害，杜绝化学农药使用，确保香梨绿色、安全、健康。</p>

        <h3>3. 人工疏果</h3>
        <p>在果实生长期，组织专业团队进行三次人工疏果，控制每棵树的挂果量，保证单果获得充足营养，提升果实品质。</p>

        <h3>4. 适时采收</h3>
        <p>采用糖度测定、硬度检测等科学手段，精准判断最佳采摘时机，确保香梨在最佳成熟度时采摘。</p>

        <h2>市场反响</h2>
        <p>今年的库尔勒香梨一上市就受到市场热捧，多家大型连锁超市、生鲜电商平台纷纷下单采购。我们的香梨还首次出口到东南亚市场，获得了国际客户的高度评价。</p>
        <p>某大型超市采购经理表示："萌瑞农业的香梨品质稳定，口感极佳，我们的顾客反馈非常好，回购率很高。"</p>

        <h2>展望未来</h2>
        <p>面对良好的市场前景，萌瑞农业计划进一步扩大香梨种植规模，同时加强品牌建设，打造"铁门关香梨"区域公用品牌，让更多消费者品尝到来自新疆的优质香梨。</p>
      `
    },
    '3': {
      category: '行业动态',
      categoryColor: 'bg-purple-500',
      title: '新疆农业现代化进程加速，铁门关成为示范区',
      image: 'https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGlubm92YXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODgwNzQ3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: '2026-01-10',
      author: '编辑部',
      readTime: '6 分钟',
      tags: ['行业动态', '现代农业', '政策'],
      content: `
        <p class="lead">近日，国家农业农村部正式批准铁门关市为"国家级现代农业示范区"，这标志着铁门关市在推动农业现代化、智能化方面取得的成就获得了国家层面的认可。作为铁门关市农业龙头企业，萌瑞农业有幸参与了示范区标准的制定工作。</p>

        <h2>示范区建设背景</h2>
        <p>新疆作为我国重要的农产品生产基地，近年来在农业现代化方面不断探索创新。铁门关市依托其独特的地理位置和资源优势，大力发展智慧农业、绿色农业，取得了显著成效。</p>

        <h2>萌瑞农业的贡献</h2>
        <p>作为示范区的核心企业之一，萌瑞农业在以下几个方面发挥了重要作用：</p>
        
        <h3>技术示范</h3>
        <ul>
          <li>率先引进并应用智能灌溉、无人机植保等先进技术</li>
          <li>建立了覆盖全生产流程的数字化管理系统</li>
          <li>形成了一套可复制、可推广的智慧农业解决方案</li>
        </ul>

        <h3>标准制定</h3>
        <ul>
          <li>参与制定了《铁门关市智慧农业技术规范》</li>
          <li>建立了新疆香梨、红枣等特色农产品的地方标准</li>
          <li>推动产品质量追溯体系建设</li>
        </ul>

        <h3>产业带动</h3>
        <ul>
          <li>通过"公司+基地+农户"模式，带动周边500余户农户增收</li>
          <li>提供技术培训和指导，提升区域整体农业水平</li>
          <li>建立了产销对接平台，拓宽农产品销售渠道</li>
        </ul>

        <h2>示范区发展规划</h2>
        <p>根据规划，铁门关市现代农业示范区将重点发展以下方向：</p>
        <ul>
          <li><strong>智慧农业：</strong>推广物联网、大数据、人工智能等技术在农业中的应用</li>
          <li><strong>绿色农业：</strong>发展有机农业、生态农业，减少化肥农药使用</li>
          <li><strong>品牌农业：</strong>打造区域公用品牌，提升农产品附加值</li>
          <li><strong>融合发展：</strong>推动一二三产业融合，发展农产品加工和乡村旅游</li>
        </ul>

        <h2>行业展望</h2>
        <p>业内专家表示，铁门关市被评为国家级现代农业示范区，将对整个新疆乃至西北地区的农业发展产生积极的示范带动作用。通过先行先试，探索出一条适合干旱地区的农业现代化路径。</p>
        
        <blockquote>
          "现代农业不是简单的机械化，而是要实现信息化、智能化、绿色化的全面升级。铁门关示范区的建设，为我国干旱地区农业发展提供了宝贵经验。" —— 中国农业科学院专家
        </blockquote>

        <p>萌瑞农业将继续发挥龙头企业作用，在技术创新、标准制定、产业带动等方面做出更大贡献，助力新疆农业现代化进程。</p>
      `
    }
  };

  const article = newsArticles[id as keyof typeof newsArticles];

  if (!article) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">文章未找到</h2>
        <Link to="/" className="text-emerald-600 hover:text-emerald-700">返回首页</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Article Header */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            返回首页
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={`inline-block px-4 py-2 ${article.categoryColor} text-white text-sm font-medium rounded-full mb-6`}>
              {article.category}
            </span>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{article.readTime}</span>
              </div>
              <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 ml-auto">
                <Share2 size={18} />
                <span>分享</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={article.image}
            alt={article.title}
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">相关文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(newsArticles)
              .filter(([key]) => key !== id)
              .slice(0, 3)
              .map(([key, item]) => (
                <Link
                  key={key}
                  to={`/news/${key}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 ${item.categoryColor} text-white text-xs font-medium rounded-full mb-3`}>
                      {item.category}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{item.date}</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <style>{`
        .prose {
          color: #374151;
        }
        .prose .lead {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #4b5563;
          margin-bottom: 2rem;
          font-weight: 400;
        }
        .prose h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #111827;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        .prose ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.75rem;
          line-height: 1.8;
        }
        .prose strong {
          font-weight: 600;
          color: #111827;
        }
        .prose blockquote {
          border-left: 4px solid #10b981;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #4b5563;
          background: #f9fafb;
          padding: 1.5rem;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
}
