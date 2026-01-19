import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-emerald-600" size={24} />,
      title: '公司地址',
      content: '新疆铁门关市经济开发区农业科技园A区',
      link: null
    },
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: '联系电话',
      content: '400-123-4567 / 0996-8765432',
      link: 'tel:400-123-4567'
    },
    {
      icon: <Mail className="text-purple-600" size={24} />,
      title: '电子邮箱',
      content: 'contact@mengrui-agri.com',
      link: 'mailto:contact@mengrui-agri.com'
    },
    {
      icon: <Clock className="text-orange-600" size={24} />,
      title: '工作时间',
      content: '周一至周六 9:00-18:00',
      link: null
    }
  ];

  const offices = [
    {
      city: '铁门关总部',
      address: '新疆铁门关市经济开发区农业科技园A区',
      phone: '0996-8765432',
      manager: '张经理'
    },
    {
      city: '乌鲁木齐办事处',
      address: '新疆乌鲁木齐市天山区光明路168号',
      phone: '0991-1234567',
      manager: '李经理'
    },
    {
      city: '库尔勒办事处',
      address: '新疆库尔勒市建设路88号',
      phone: '0996-2345678',
      manager: '王经理'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-600 to-green-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            联系我们
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-white/90"
          >
            期待与您合作，共创农业新未来
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-emerald-50 group-hover:to-green-50 rounded-xl flex items-center justify-center mb-4 transition-all">
                  {info.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-gray-600 hover:text-emerald-600 transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">在线留言</h2>
              <p className="text-gray-600 mb-8">请填写以下信息，我们会尽快与您取得联系</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="请输入公司名称"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      联系电话 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="请输入联系电话"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="请输入电子邮箱"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    咨询主题 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  >
                    <option value="">请选择咨询主题</option>
                    <option value="product">产品咨询</option>
                    <option value="solution">解决方案咨询</option>
                    <option value="cooperation">商务合作</option>
                    <option value="other">其他咨询</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    留言内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                    placeholder="请描述您的需求或问题"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                    submitted
                      ? 'bg-green-600 text-white'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {submitted ? (
                    <>
                      <span>提交成功！我们会尽快联系您</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>提交留言</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">公司位置</h2>
              <p className="text-gray-600 mb-8">欢迎莅临参观指导</p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8">
                <div className="bg-gray-200 h-96 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <p>地图加载区域</p>
                    <p className="text-sm mt-2">新疆铁门关市经济开发区农业科技园A区</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">紧急联系</h3>
                <p className="text-white/90 mb-6">如需紧急联系，请拨打24小时服务热线</p>
                <a
                  href="tel:400-123-4567"
                  className="inline-flex items-center gap-3 text-2xl font-bold hover:underline"
                >
                  <Phone size={28} />
                  400-123-4567
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              分支机构
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              我们在新疆多地设有办事处，为您提供便捷服务
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-blue-600 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="hover:text-emerald-600 transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-500">负责人：</span>
                    <span className="text-sm font-medium text-gray-900 ml-2">{office.manager}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
