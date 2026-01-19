import { useEffect, useState } from 'react';
import { Sprout, Users, Target } from 'lucide-react';

export function ParallaxSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="solutions" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1767416171650-4bff1da861fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4ODA2OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cotton fields"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
          智慧农业解决方案
        </span>
        
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          科技改变农业
          <br />
          <span className="text-emerald-400">创新驱动未来</span>
        </h2>

        <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          我们提供从土壤检测、智能灌溉到精准施肥的全流程数字化解决方案，
          帮助农业生产降本增效，实现可持续发展。
        </p>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
            <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Sprout className="text-emerald-400" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">精准农业</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              基于大数据分析的精准种植方案，优化资源配置，提升产量与品质。
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="text-blue-400" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">智能监控</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              实时监测土壤、气象、病虫害数据，提供科学决策支持。
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
            <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-purple-400" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">技术服务</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              专业团队提供全程技术指导，从种植到销售的一站式服务。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
