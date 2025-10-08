import { BarChart3, PieChart, TestTube, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description:
        'Exploratory data analysis, feature engineering, statistical testing, and actionable insights. Transform complex datasets into clear recommendations for business decisions.',
      features: [
        'Exploratory Data Analysis',
        'Feature Engineering',
        'Statistical Testing',
        'Insights & Recommendations',
      ],
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description:
        'Interactive dashboards and KPI designs using Tableau, Power BI, and custom solutions. Create stakeholder-ready reports that communicate insights effectively.',
      features: [
        'Dashboard Development',
        'KPI Design',
        'Stakeholder Reports',
        'Interactive Visualizations',
      ],
    },
    {
      icon: TestTube,
      title: 'Quality Assurance & Automation',
      description:
        'End-to-end automation framework design with Selenium, TestNG, and PyTest. CI/CD integration with Jenkins, API testing, and comprehensive documentation.',
      features: [
        'Framework Design',
        'CI/CD Integration',
        'API Testing',
        'SOPs & Runbooks',
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions combining data science, analytics, and
            quality engineering expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="p-4 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl inline-block mb-6">
                <service.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="w-full px-4 py-3 bg-gradient-to-r from-sky-50 to-indigo-50 text-sky-700 rounded-xl font-medium border border-sky-100 hover:border-sky-300 hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-full font-medium text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            Let's Discuss Your Use Case
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
