import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Functional Test Engineer',
      company: 'Amdocs Development Centre – BSSe',
      location: 'Pune, India',
      period: 'October 2021 – July 2023',
      achievements: [
        'Designed Selenium + TestNG/JUnit automation for UI/API, achieving 40% regression time reduction',
        'Built Python AutomateIT framework to convert REST-Assured to XML; validated 3,000+ API responses per week',
        'Led automated regression suite; integrated with Jenkins for scheduled/on-demand runs, achieving 60% manual effort reduction and later 90% regression automation coverage',
        'Streamlined continuous testing via Jenkins with triggered runs, reports, and email notifications, reducing manual effort by 50%',
        'Translated requirements into automated scenarios; mentored 4-5 engineers on automation best practices',
        'Performed backend testing with SQL + Linux/Unix; conducted cross-system data validation (Amdocs CRM, CSM, TDAS)',
        'Managed defects in iTrack/Jira; achieved 70% critical defect reduction via root cause analysis and early resolution',
        'Authored comprehensive test plans, scripts, and reports; improved accessibility and audit readiness by 30%',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-sky-200"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full border-4 border-white"></div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Briefcase size={18} className="text-sky-600" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} className="text-sky-600" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-50 to-indigo-50 text-sky-700 rounded-full text-sm font-medium border border-sky-100">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
