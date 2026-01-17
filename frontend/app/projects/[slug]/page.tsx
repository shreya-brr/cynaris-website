import React from 'react';
import { ArrowLeft, CheckCircle, Clock, Globe, Settings } from 'lucide-react';
import Link from 'next/link';

// Next.js 15+ requires params to be handled as a Promise
export default async function ProjectSlugPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  
  // Await the params to avoid the "Cannot read properties of undefined" error
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Format the title: replace hyphens with spaces and capitalize
  const title = slug.replace(/-/g, ' ').toUpperCase();

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar / Back Link */}
      <nav className="border-b bg-gray-50/50">
        <div className="container mx-auto px-6 py-4">
          <Link href="/#projects" className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors w-fit">
            <ArrowLeft size={18} /> Back to Projects
          </Link>
        </div>
      </nav>

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            {/* Header Section */}
            <div className="mb-12">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Case Study Detail
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                {title}
              </h1>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl flex items-start gap-4">
                <Globe className="text-blue-500 shrink-0" size={24} />
                <div>
                  <p className="text-sm text-gray-500">Client Scope</p>
                  <p className="font-bold text-gray-900">Global Enterprise</p>
                </div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl flex items-start gap-4">
                <Clock className="text-blue-500 shrink-0" size={24} />
                <div>
                  <p className="text-sm text-gray-500">Timeline</p>
                  <p className="font-bold text-gray-900">24 Weeks</p>
                </div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl flex items-start gap-4">
                <Settings className="text-blue-500 shrink-0" size={24} />
                <div>
                  <p className="text-sm text-gray-500">Industry</p>
                  <p className="font-bold text-gray-900">Tech & Digital</p>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="prose prose-lg max-w-none text-gray-700 space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">The Challenge</h2>
                <p className="leading-relaxed">
                  The client faced significant bottlenecks in their legacy infrastructure. 
                  Increasing traffic loads were causing system latency, affecting the 
                  user experience and resulting in a measurable drop in customer retention.
                  There was an urgent need for a scalable, cloud-native architecture.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">The 4C Solution</h2>
                <p className="leading-relaxed mb-6">
                  Applying the <strong>Cynaris 4C Principle</strong>, we aligned the 
                  technical roadmap with business KPIs. We transitioned the monolithic 
                  structure into microservices, enabling independent scaling and 
                  faster deployment cycles.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {[
                    'Architecture Re-design',
                    'Cloud Infrastructure Setup',
                    'CI/CD Pipeline Integration',
                    'Automated Security Audits',
                    'Real-time Performance Monitoring',
                    'Legacy Data Migration'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg">
                      <CheckCircle className="text-green-600 shrink-0" size={20} />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Key Results</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl font-black text-blue-400 mb-2">40%</p>
                    <p className="text-blue-100 font-medium text-left">Reduction in operational overhead and server costs.</p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-blue-400 mb-2">99.9%</p>
                    <p className="text-blue-100 font-medium text-left">Uptime achieved through automated failover protocols.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Call to Action */}
            <div className="mt-20 py-12 border-t text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in similar results?</h3>
              <Link href="/#contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                Start Your Project Today
              </Link>
            </div>

          </div>
        </div>
      </article>
    </main>
  );
}