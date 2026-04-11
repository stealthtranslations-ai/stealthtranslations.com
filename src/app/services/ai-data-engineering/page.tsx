'use client';

import { motion } from 'framer-motion';
import { FileText, CheckCircle, ArrowRight, Globe, Brain, Database, Shield, Star, Zap, Code, Cpu, Cloud, BarChart } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function AIDataEngineering() {
  const services = [
    {
      icon: Database,
      title: 'Data Pipeline Architecture',
      description: 'Design and implement scalable data pipelines for AI/ML workflows'
    },
    {
      icon: Cloud,
      title: 'Cloud Data Solutions',
      description: 'Cloud-native data engineering with AWS, Azure, and GCP expertise'
    },
    {
      icon: Code,
      title: 'ETL/ELT Development',
      description: 'Custom ETL/ELT solutions optimized for AI training data'
    },
    {
      icon: BarChart,
      title: 'Data Analytics & Insights',
      description: 'Transform raw data into actionable insights for AI models'
    }
  ];

  const capabilities = [
    {
      icon: Brain,
      title: 'ML Data Engineering',
      description: 'Specialized data pipelines for machine learning workflows'
    },
    {
      icon: Database,
      title: 'Big Data Processing',
      description: 'Handle massive datasets with distributed computing frameworks'
    },
    {
      icon: Shield,
      title: 'Data Governance',
      description: 'Ensure data quality, security, and compliance throughout pipelines'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Stream processing for real-time AI inference and training'
    }
  ];

  const technologies = [
    { name: 'Apache Spark', category: 'Big Data' },
    { name: 'Apache Airflow', category: 'Orchestration' },
    { name: 'Kubernetes', category: 'Containerization' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'AWS SageMaker', category: 'ML Platform' },
    { name: 'Azure ML', category: 'ML Platform' },
    { name: 'TensorFlow', category: 'ML Framework' },
    { name: 'PyTorch', category: 'ML Framework' },
    { name: 'Databricks', category: 'Data Platform' },
    { name: 'Snowflake', category: 'Data Warehouse' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white">
      <Navigation currentPage="/services/ai-data-engineering" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Database className="w-16 h-16 text-emerald-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                AI Data Engineering
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into AI-ready assets with our comprehensive data engineering solutions. 
              We build robust, scalable data pipelines that power cutting-edge AI and machine learning applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="/contact" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Get Data Engineering Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/contact" className="border-2 border-emerald-400 hover:bg-emerald-400/10 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                <ArrowRight className="ml-2 w-5 h-5" />
                Get Quote
              </a>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Data Engineering Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/70 transition"
                >
                  <service.icon className="w-12 h-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Capabilities Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">AI Data Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/60 to-emerald-900/30 border border-emerald-400/20 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-emerald-900/40 transition"
                >
                  <capability.icon className="w-12 h-12 text-teal-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Technology Stack</h2>
            <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                    className="bg-slate-700/50 border border-emerald-400/20 rounded-lg p-4 text-center hover:bg-emerald-400/10 transition"
                  >
                    <Cpu className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white">{tech.name}</h4>
                    <p className="text-xs text-gray-400">{tech.category}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Data Engineering Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Assessment', desc: 'Data source analysis and requirements gathering' },
                { step: '2', title: 'Architecture', desc: 'Design scalable data pipeline architecture' },
                { step: '3', title: 'Implementation', desc: 'Build and deploy data engineering solutions' },
                { step: '4', title: 'Optimization', desc: 'Monitor, tune, and scale data pipelines' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Data for AI?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Let our data engineering experts build the foundation for your AI success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                Start Your Data Engineering Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/services" className="border-2 border-white/50 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center">
                <ArrowRight className="ml-2 w-5 h-5" />
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
