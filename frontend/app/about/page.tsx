import React from 'react';
import { Target, Eye, ShieldCheck, Users, Globe, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: "Projects Delivered", value: "150+" },
  { label: "Global Clients", value: "40+" },
  { label: "Team Experts", value: "25+" },
  { label: "Years Experience", value: "8+" },
];

const values = [
  {
    title: "Innovation First",
    desc: "We don't just follow trends; we create digital solutions that set new industry standards.",
    icon: <Zap className="text-blue-500" size={32} />
  },
  {
    title: "Client-Centric",
    desc: "Your business goals are the compass for every line of code we write and every pixel we place.",
    icon: <Users className="text-blue-500" size={32} />
  },
  {
    title: "Trust & Security",
    desc: "We prioritize data integrity and transparent communication in every partnership.",
    icon: <ShieldCheck className="text-blue-500" size={32} />
  }
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-left">
              Co-Creating the <span className="text-blue-400">Digital Future.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 text-left">
              At Cynaris Solutions, we transform complex business challenges into seamless digital experiences through innovation, strategy, and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-blue-100 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <Target className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg text-left">
                To empower businesses globally by delivering high-impact digital products. We leverage the 4C Principle—Co-Create, Craft, Execute, and Deliver—to ensure every solution drives measurable growth.
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <Eye className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg text-left">
                To be the world's most trusted partner for digital transformation, recognized for our ability to blend creative artistry with robust engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-left max-w-2xl mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Core Values</h2>
            <p className="text-gray-600">The principles that guide our work and our relationships.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-left">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Career Focused */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-blue-900 rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Build the future with us.</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                We're always looking for talented individuals to join our global team and work on high-impact projects.
              </p>
              <Link 
                href="/careers" 
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-10 py-5 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl hover:scale-[1.02] active:scale-95"
              >
                Join Our Team <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}