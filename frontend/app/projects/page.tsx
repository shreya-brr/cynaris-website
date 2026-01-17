"use client";

import React from 'react';
import Link from 'next/link';
import { Lightbulb, Palette, Terminal, CheckCircle2 } from 'lucide-react';

// 1. DATA FOR 4C PRINCIPLE
const steps = [
  { id: "01", title: "Co-Create", desc: "Collaborating with you to define the vision.", icon: <Lightbulb className="w-6 h-6" />, color: "bg-amber-500" },
  { id: "02", title: "Co-Craft", desc: "Designing intuitive user interfaces.", icon: <Palette className="w-6 h-6" />, color: "bg-blue-500" },
  { id: "03", title: "Co-Execute", desc: "Agile development and high-quality code.", icon: <Terminal className="w-6 h-6" />, color: "bg-green-500" },
  { id: "04", title: "Co-Deliver", desc: "Seamless deployment and continuous support.", icon: <CheckCircle2 className="w-6 h-6" />, color: "bg-purple-500" }
];

// 2. DATA FOR CASE STUDIES
const caseStudies = [
  {
    title: "Cloud Migration for Fintech",
    client: "Global Banking Group",
    impact: "40% reduction in server costs",
    category: "Digital Transformation"
  },
  {
    title: "AI-Powered R&D Platform",
    client: "BioTech Institute",
    impact: "Accelerated drug discovery by 2x",
    category: "Research & Development"
  }
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* SECTION 1: METHODOLOGY */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Our Methodology</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-6">The 4C Principle</h3>
          <p className="text-lg text-gray-600">How we partner with you at every stage.</p>
        </div>

        {/* 4C Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step) => (
            <div key={step.id} className="group relative p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
              <div className={`w-12 h-12 ${step.color} text-white rounded-lg flex items-center justify-center mb-6`}>
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* SECTION 2: CASE STUDIES WITH LINKS */}
        <div className="border-t pt-16">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Featured Case Studies</h3>
              <p className="text-gray-500 mt-2">Click on a project to view details.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <Link 
                key={index} 
                href={`/projects/${study.title.toLowerCase().replace(/ /g, '-')}`}
                className="block group"
              >
                <div className="p-8 border rounded-2xl border-gray-100 group-hover:border-blue-300 group-hover:shadow-xl transition-all cursor-pointer bg-gray-50 h-full">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{study.category}</span>
                  <h4 className="text-2xl font-bold mt-2 group-hover:text-blue-700 text-gray-900">{study.title}</h4>
                  <p className="text-gray-500 mb-6">{study.client}</p>
                  <div className="bg-white border border-green-200 text-green-700 px-4 py-2 rounded-full font-semibold inline-flex items-center gap-2">
                    <span>🚀</span> {study.impact}
                  </div>
                  <div className="mt-6 text-blue-600 font-medium text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project Details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}