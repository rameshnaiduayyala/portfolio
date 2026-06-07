import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse position to degree rotation (max 10 degrees)
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  // Spring settings for ultra-smooth movement
  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-white rounded-[2rem] p-2 border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(255,42,42,0.12)] transition-shadow duration-500 flex flex-col justify-between group relative overflow-hidden cursor-pointer"
    >
      {/* Laser Scan Line */}
      <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff2a2a] to-transparent opacity-0 group-hover:opacity-100 pointer-events-none z-30 animate-scan"></div>

      {/* Futuristic corner brackets */}
      <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-[#ff2a2a]/20 rounded-tl-sm pointer-events-none group-hover:border-[#ff2a2a] group-hover:scale-110 transition-all duration-300"></div>
      <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#ff2a2a]/20 rounded-tr-sm pointer-events-none group-hover:border-[#ff2a2a] group-hover:scale-110 transition-all duration-300"></div>
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-[#ff2a2a]/20 rounded-bl-sm pointer-events-none group-hover:border-[#ff2a2a] group-hover:scale-110 transition-all duration-300"></div>
      <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-[#ff2a2a]/20 rounded-br-sm pointer-events-none group-hover:border-[#ff2a2a] group-hover:scale-110 transition-all duration-300"></div>

      {/* Top red highlight line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#ff2a2a] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

      {/* Inner card container matching services style */}
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="w-full h-full rounded-[1.5rem] p-6 md:p-8 flex flex-col justify-between bg-[#f4f4f4] transition-colors duration-700 min-h-[440px]"
      >
        <div>
          {/* Title */}
          <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
            {project.description}
          </p>
        </div>

        <div>
          {/* Metrics */}
          <div className="mb-6 py-2.5 px-3.5 bg-white border border-gray-200 rounded-xl shadow-sm">
            <span className="text-[10px] uppercase font-bold text-[#ff2a2a] tracking-wider block mb-0.5">Performance Metric</span>
            <span className="text-xs font-bold text-gray-700">{project.metrics}</span>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, tIdx) => (
              <span 
                key={tIdx}
                className="px-2.5 py-1 text-[10px] md:text-[11px] font-bold font-mono bg-white text-gray-600 rounded-md border border-gray-200 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Action */}
          <a 
            href={project.link}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-gray-950 group-hover:text-[#ff2a2a] transition-colors"
          >
            View Case Study
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: "CAREis – Care Home Management System",
      description: "A comprehensive care home operations platform handling audits, policy management, training, and analytics. Led legacy AngularJS-to-React migration, automated AWS infrastructure via Terraform, and secured endpoints using role-based access control (RBAC) with JWT tokens.",
      tags: [".NET Core", "Entity Framework", "React", "TypeScript", "MSSQL", "AWS", "Terraform"],
      metrics: "AngularJS to React Migration | Stored Procedure & Index Optimization",
      link: "#"
    },
    {
      id: 2,
      title: "TITRATE – Imprest Stock Video Analytics",
      description: "A specialized healthcare SaaS solution utilizing computer vision for imprest stock monitoring. Automatically recognizes medicine boxes to calculate inventory, proactively schedules wholesale restock orders, and triggers instant SMS/email alerts for critical supplies.",
      tags: [".NET Core", "EF Core", "React", "MSSQL", "AWS", "FastAPI", "Bootstrap 5"],
      metrics: "Real-Time AI Box Detection | Proactive Wholesale Auto-Ordering",
      link: "#"
    },
    {
      id: 3,
      title: "GAZZEE – AI Video Surveillance Platform",
      description: "A high-performance SaaS video surveillance system managing multiple live camera feeds. Integrates low-latency RTSP/RTMP stream processing via MediaMTX, object detection with YOLO, and triggers automated alarm notifications.",
      tags: [".NET Core Web API", "React", "Python", "FastAPI", "YOLO", "PostgreSQL", "MediaMTX", "AWS"],
      metrics: "60fps Live Streaming Ingestion | Multi-Tenant Intrusion Alerts",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-left" data-aos="fade-up">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-xs text-gray-600 font-bold mb-4 bg-white shadow-sm uppercase tracking-wider">
            Case Studies
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Enterprise Solutions & <br />Proven Partnerships
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            A selection of production-ready architectures and full-stack systems engineered for scale, high availability, and performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
