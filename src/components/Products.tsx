import { ArrowRight, Star, MapPin, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Products() {
  const products = [
    {
      id: 1,
      slug: 'korla-pear',
      name: '库尔勒香梨',
      nameEn: 'Korla Fragrant Pear',
      description: '皮薄肉细，酥脆爽口，汁多味甜，"梨"中珍品。',
      image: 'https://images.unsplash.com/photo-1661858914901-da2a5ce42d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFyJTIwb3JjaGFyZCUyMGhhcnZlc3R8ZW58MXx8fHwxNzY4ODA2OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['皮薄肉细', '汁多味甜', '营养丰富'],
      color: 'from-yellow-500 to-amber-600'
    },
    {
      id: 2,
      slug: 'red-dates',
      name: '灰枣/骏枣',
      nameEn: 'Premium Jujube',
      description: '肉质紧实，色泽红润，天然晾晒，甜度极佳。',
      image: 'https://images.unsplash.com/photo-1607004328948-afaa25e57429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1anViZSUyMGRhdGVzJTIwZnJ1aXR8ZW58MXx8fHwxNzY4ODA2OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['肉质紧实', '天然晾晒', '甜度极佳'],
      color: 'from-red-500 to-rose-600'
    },
    {
      id: 3,
      slug: 'cotton',
      name: '优质棉花',
      nameEn: 'Xinjiang Cotton',
      description: '日照充足，棉絮洁白，纤维柔长，纺织首选。',
      image: 'https://images.unsplash.com/photo-1643981550158-230c2b8cf6df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx4aW5qaWFuZyUyMGNvdHRvbiUyMGZpZWxkJTIwYWVyaWFsfGVufDF8fHx8MTc2ODgwNjk1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['纤维柔长', '色泽洁白', '品质优良'],
      color: 'from-sky-500 to-blue-600'
    }
  ];

  return (
    <section id="products" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            产品中心
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            铁门关特色农产品
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            汇聚新疆优质特产，传递自然健康之美
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full">
                    <Star className="text-yellow-500 fill-yellow-500" size={14} />
                    <span className="text-sm font-medium text-gray-900">铁门关特产</span>
                  </div>
                </div>

                {/* Origin Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 rounded-full">
                    <MapPin className="text-white" size={14} />
                    <span className="text-xs font-medium text-white">新疆原产</span>
                  </div>
                </div>

                {/* Organic Badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Leaf className="text-emerald-600" size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {product.nameEn}
                  </p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={`/product/${product.slug}`}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gray-900 text-white rounded-xl font-medium group-hover:bg-emerald-600 transition-colors"
                >
                  了解详情
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">想要了解更多产品信息？</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-105"
          >
            联系我们获取产品手册
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}