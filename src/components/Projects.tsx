import { Github, ExternalLink, TrendingUp, Code, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Optimizing Dimensionality Reduction for News Category Classification',
      description:
        'MSc project applying Gaussian Random Projection and Sparse Random Projection for high-dimensional text classification. Compared performance and latency trade-offs across different dimensionality reduction techniques. Documented comprehensive pipeline and results with detailed analysis.',
      tech: [
        'Python',
        'scikit-learn',
        'pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
      ],
      metrics: [
        { label: 'Accuracy', value: 'High' },
        { label: 'F1 Score', value: 'Optimized' },
        { label: 'Processing Time', value: 'Reduced' },
      ],
      icon: TrendingUp,
    },
    {
      title: 'Amdocs AutomateIT API Validation Framework',
      description:
        'Developed Python-based automation framework to convert REST-Assured tests to XML format. Automated validation of 3,000+ API responses per week with comprehensive error handling and reporting. Integrated with Jenkins for continuous validation and monitoring.',
      tech: ['Python', 'Jenkins', 'REST API', 'XML', 'CI/CD'],
      metrics: [
        { label: 'API Responses', value: '3,000+/week' },
        { label: 'Automation Rate', value: '100%' },
        { label: 'Error Detection', value: 'Real-time' },
      ],
      icon: Code,
    },
    {
      title: 'Automated Regression Testing Suite',
      description:
        'Built comprehensive Selenium + TestNG framework for UI and API testing. Achieved 90% regression automation coverage with scheduled and on-demand execution via Jenkins. Reduced manual testing effort by 60% and regression cycle time by 40%.',
      tech: ['Selenium', 'TestNG', 'Java', 'Jenkins', 'Maven'],
      metrics: [
        { label: 'Coverage', value: '90%' },
        { label: 'Time Saved', value: '40%' },
        { label: 'Effort Reduction', value: '60%' },
      ],
      icon: Database,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl">
                  <project.icon className="text-white" size={28} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-gradient-to-r from-sky-50 to-indigo-50 text-sky-700 rounded-lg text-sm font-medium border border-sky-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                  Key Metrics
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="bg-white rounded-xl p-3 border border-gray-100"
                    >
                      <div className="text-sm text-gray-600 mb-1">
                        {metric.label}
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Github size={18} />
                  GitHub
                </button>
                <button className="flex-1 px-4 py-2.5 bg-white text-gray-700 rounded-xl font-medium border-2 border-gray-200 hover:border-sky-500 hover:text-sky-600 transition-all flex items-center justify-center gap-2">
                  <ExternalLink size={18} />
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
