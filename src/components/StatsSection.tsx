import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Award, Users, Leaf } from 'lucide-react';

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const CountUp = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(end * percentage));

        if (percentage < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  const stats = [
    {
      icon: <Leaf className="text-emerald-500" size={32} />,
      value: 10000,
      suffix: '+',
      label: '亩生态种植基地',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: <Award className="text-blue-500" size={32} />,
      value: 15,
      suffix: '项',
      label: '国际认证',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Users className="text-purple-500" size={32} />,
      value: 200,
      suffix: '+',
      label: '合作伙伴',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <TrendingUp className="text-orange-500" size={32} />,
      value: 98,
      suffix: '%',
      label: '客户满意度',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4"
          >
            我们的成就
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            用数据说话
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gray-50 group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 transition-colors">
                    {stat.icon}
                  </div>

                  {/* Number */}
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="text-gray-600">{stat.label}</div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-gray-50 rounded-tl-full opacity-50"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
