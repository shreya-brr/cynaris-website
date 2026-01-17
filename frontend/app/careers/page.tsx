"use client";

import React from 'react';
import { Briefcase, MapPin, Globe, ArrowRight, Rocket } from 'lucide-react';
import Link from 'next/link';

// 1. Define the Job Data
export const jobs = [
  {
    title: "Senior Full Stack Developer",
    slug: "senior-full-stack-developer",
    location: "Remote / Bengaluru",
    type: "Full-time",
    department: "Engineering"
  },
  {
    title: "UI/UX Designer",
    slug: "ui-ux-designer",
    location: "Hybrid / Middle East",
    type: "Full-time",
    department: "Design"
  },
  {
    title: "Project Manager",
    slug: "project-manager",
    location: "Remote",
    type: "Contract",
    department: "Management"
  }
];

export default function CareersPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-black mb-4 text-left">Join the Team</h1>
          <p className="text-xl text-blue-100 max-w-2xl text-left">
            Help us build the next generation of digital solutions.
          </p>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-4">
            {jobs.map((job) => (
              <Link key={job.slug} href={`/careers/${job.slug}`} className="block group">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex gap-6 items-center">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50">
                      <Briefcase className="text-gray-400 group-hover:text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                        <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-blue-600 transition-all">
                    Apply Now <ArrowRight size={18} />
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