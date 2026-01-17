"use client";

import React from 'react';
import { Layout, Cloud, Shield, Database, Smartphone, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// 1. Define Service Data
export const services = [
  {
    title: "Web Development",
    slug: "web-development",
    description: "Building high-performance, scalable web applications using modern stacks.",
    icon: <Layout className="text-blue-600" size={32} />
  },
  {
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Secure and scalable cloud infrastructure designed for global reach.",
    icon: <Cloud className="text-blue-600" size={32} />
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    description: "Enterprise-grade security protocols to protect your digital assets.",
    icon: <Shield className="text-blue-600" size={32} />
  },
  {
    title: "Mobile App Development",
    slug: "mobile-apps",
    description: "Native and cross-platform mobile experiences for iOS and Android.",
    icon: <Smartphone className="text-blue-600" size={32} />
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-black mb-6 text-left">Our Services.</h1>
          <p className="text-xl text-gray-400 max-w-2xl text-left">
            We deliver end-to-end digital transformation through specialized expertise and the 4C Principle.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                <div className="bg-white p-10 rounded-[32px] border border-gray-100 hover:border-blue-300 hover:shadow-2xl transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
                    Learn More <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}