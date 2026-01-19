import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('感谢您的咨询！我们会尽快与您联系。');
    setFormData({ name: '', company: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            联系我们
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            开启合作之旅
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            无论您是寻求优质农产品，还是需要农业技术支持，我们都随时为您服务
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 lg:p-10 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">联系信息</h3>
              <p className="text-emerald-100 mb-8 leading-relaxed">
                我们期待与您合作，共同推动现代农业发展。请通过以下方式与我们取得联系。
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-medium mb-1">公司地址</div>
                    <div className="text-emerald-100 text-sm">
                      新疆巴音郭楞蒙古自治州铁门关市
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-medium mb-1">联系电话</div>
                    <div className="text-emerald-100 text-sm">
                      +86 400-XXX-XXXX
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-medium mb-1">电子邮箱</div>
                    <div className="text-emerald-100 text-sm">
                      info@mengrui-agritech.com
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="text-3xl font-bold mb-1">7x24</div>
                    <div className="text-emerald-100 text-sm">在线服务</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold mb-1">&lt;2h</div>
                    <div className="text-emerald-100 text-sm">响应时间</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">发送咨询</h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    您的姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    公司名称
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="请输入公司名称（选填）"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      联系电话 *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="手机号码"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      电子邮箱
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="邮箱地址"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    咨询内容 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    placeholder="请简要描述您的需求或问题..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-[1.02]"
                >
                  <Send size={20} />
                  提交咨询
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                我们会在收到消息后尽快与您联系
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
