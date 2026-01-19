import { MapPin, Cpu, Award, TrendingUp } from 'lucide-react';

export function ValueProposition() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            核心优势
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            为什么选择萌瑞农业
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            科技赋能农业，品质成就未来
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Card - Origin Direct */}
          <div className="lg:col-span-7 lg:row-span-2 bg-white rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <img
                src="https://images.unsplash.com/photo-1643981550158-230c2b8cf6df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx4aW5qaWFuZyUyMGNvdHRvbiUyMGZpZWxkJTIwYWVyaWFsfGVufDF8fHx8MTc2ODgwNjk1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cotton fields"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                <MapPin className="text-emerald-600 group-hover:text-white transition-colors" size={32} />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 group-hover:text-white transition-colors mb-4">
                源头直供
              </h3>
              <span className="text-sm font-medium text-emerald-600 group-hover:text-emerald-300 transition-colors mb-4 block">
                Origin Direct
              </span>
              
              <p className="text-lg text-gray-600 group-hover:text-gray-200 transition-colors mb-8">
                万亩生态种植基地，铁门关原产地直发，全程可追溯。
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 group-hover:bg-white/10 rounded-xl p-4 transition-colors">
                  <div className="text-2xl font-bold text-emerald-600 group-hover:text-emerald-300 mb-1">10,000+</div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-300">亩种植基地</div>
                </div>
                <div className="bg-gray-50 group-hover:bg-white/10 rounded-xl p-4 transition-colors">
                  <div className="text-2xl font-bold text-emerald-600 group-hover:text-emerald-300 mb-1">100%</div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-300">全程可追溯</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Cpu className="text-white" size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                科技赋能
              </h3>
              <span className="text-sm font-medium text-blue-200 mb-4 block">
                Tech-Driven
              </span>
              
              <p className="text-base text-blue-100 leading-relaxed">
                无人机植保与智能水肥一体化，科学种植，降本增效。
              </p>

              <div className="mt-6 flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBkcm9uZXxlbnwxfHx8fDE3Njg4MDY5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Agricultural drone"
                  className="w-full h-32 object-cover rounded-xl mt-4"
                />
              </div>
            </div>
          </div>

          {/* Quality Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Award className="text-white" size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                品质严选
              </h3>
              <span className="text-sm font-medium text-orange-100 mb-4 block">
                Quality First
              </span>
              
              <p className="text-base text-orange-50 leading-relaxed">
                严格遵循绿色有机标准，从田间到餐桌，层层把关。
              </p>

              <div className="mt-6 flex gap-3">
                <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-sm font-bold text-white">绿色认证</div>
                </div>
                <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-sm font-bold text-white">有机标准</div>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Stats Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-purple-600" size={28} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  持续增长的品质保证
                </h3>
                <p className="text-gray-600 mb-6">
                  我们的产品通过多项国际认证，年产量稳步提升，服务客户遍布全国。
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-purple-600 mb-1">200+</div>
                    <div className="text-sm text-gray-500">合作伙伴</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600 mb-1">50,000吨</div>
                    <div className="text-sm text-gray-500">年产量</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600 mb-1">98%</div>
                    <div className="text-sm text-gray-500">客户满意度</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
