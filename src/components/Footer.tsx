import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: '库尔勒香梨', href: '#' },
      { name: '灰枣/骏枣', href: '#' },
      { name: '优质棉花', href: '#' },
      { name: '更多产品', href: '#' },
    ],
    solutions: [
      { name: '精准农业', href: '#' },
      { name: '智能监控', href: '#' },
      { name: '技术服务', href: '#' },
      { name: '解决方案', href: '#' },
    ],
    company: [
      { name: '关于我们', href: '#about' },
      { name: '新闻动态', href: '#news' },
      { name: '合作伙伴', href: '#' },
      { name: '加入我们', href: '#' },
    ],
    support: [
      { name: '联系我们', href: '#contact' },
      { name: '客户服务', href: '#' },
      { name: '隐私政策', href: '#' },
      { name: '使用条款', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">萌</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">萌瑞农业</span>
                <span className="text-xs text-gray-400">Mengrui Agri-Tech</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              立足新疆铁门关，致力于提供高品质农产品与一站式农业技术服务，以科技赋能农业，创造绿色未来。
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4">产品中心</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold mb-4">解决方案</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">公司信息</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4">支持与帮助</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-gray-800 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="text-emerald-500" size={20} />
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-0.5">地址</div>
              <div className="text-sm text-white">新疆铁门关市</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="text-emerald-500" size={20} />
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-0.5">电话</div>
              <div className="text-sm text-white">+86 400-XXX-XXXX</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="text-emerald-500" size={20} />
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-0.5">邮箱</div>
              <div className="text-sm text-white">info@mengrui-agritech.com</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>
            © {currentYear} 萌瑞农业科技有限公司. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              隐私政策
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              使用条款
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Cookie政策
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
