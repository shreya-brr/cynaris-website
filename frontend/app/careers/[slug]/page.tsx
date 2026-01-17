import React from 'react';
import { ArrowLeft, CheckCircle, MapPin, Clock, Briefcase, Send } from 'lucide-react';
import Link from 'next/link';
import { submitApplication } from "@/app/actions";

// Data defined here to prevent "jobs is not defined" error
const jobs = [
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

export default async function JobSlugPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;
  const job = jobs.find((j) => j.slug === currentSlug);

  if (!job) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Position Not Found</h1>
        <Link href="/careers" className="text-blue-600 underline mt-4 inline-block">Back to Careers</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <Link href="/careers" className="flex items-center gap-2 text-blue-600 mb-8 font-medium w-fit hover:underline">
          <ArrowLeft size={18} /> All Openings
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Section */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 h-full">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Join the team</span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-6 text-left">{job.title}</h1>
              
              <div className="flex flex-wrap gap-6 mb-10 pb-10 border-b">
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                    <MapPin size={18} className="text-blue-500" /> {job.location}
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                    <Clock size={18} className="text-blue-500" /> {job.type}
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                    <Briefcase size={18} className="text-blue-500" /> {job.department}
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">About Cynaris</h2>
                <p className="mb-8 leading-relaxed">
                  Cynaris is a global digital powerhouse. Working with us means you'll be part of a team 
                  that follows the 4C Principle to deliver world-class solutions.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">Key Requirements</h2>
                <ul className="space-y-4 list-none p-0">
                  {['Proficiency in modern JavaScript frameworks', 'Experience with cloud infrastructure', 'Collaborative mindset', 'Passionate about clean code'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 m-0">
                      <CheckCircle className="text-green-500 mt-1 shrink-0" size={20} /> 
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-blue-600 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-left">Apply for this Role</h3>
              <p className="text-gray-500 mb-8 text-sm text-left">Your data will be securely sent to our recruitment team in Strapi.</p>
              
              <form action={submitApplication} className="space-y-5">
                {/* Hidden field to tell Strapi which job this is */}
                <input type="hidden" name="jobTitle" value={job.title} />

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input 
                    name="fullName" 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Portfolio / Resume Link</label>
                  <input 
                    name="resumeLink" 
                    type="url" 
                    placeholder="https://linkedin.com/in/..." 
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                    required 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-100"
                >
                  <Send size={18} /> Submit to Strapi
                </button>
                
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold mt-4">
                  Powered by Cynaris Recruitment Engine
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}