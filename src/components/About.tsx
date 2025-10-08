import { GraduationCap, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'MSc in Data Science & Analytics',
      institution: 'University (Institution details)',
      year: 'Year',
    },
    {
      degree: 'BTech in Computer Science Engineering',
      institution: 'University (Institution details)',
      year: 'Year',
    },
  ];

  const highlights = [
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Guided 4-5 engineers in automation best practices',
    },
    {
      icon: Lightbulb,
      title: 'Agile Collaboration',
      description: 'Proven track record in cross-functional Agile teams',
    },
    {
      icon: Target,
      title: 'Quality Engineering',
      description: 'Systematic approach to testing and automation',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Multi-disciplinary Data Analyst and Automation Engineer with
              experience spanning software quality assurance and data science.
              Skilled in Python, SQL, R and advanced analytics for extracting
              actionable insights from complex datasets.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Demonstrated history of building and maintaining automation
              frameworks using Selenium and TestNG. Adept at designing ETL
              pipelines, performing statistical and machine-learning analysis,
              creating interactive dashboards, and translating business
              requirements into efficient automated test scenarios.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Proven ability to work in Agile teams, mentor colleagues, and
              communicate results to technical and non-technical stakeholders.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <h4 className="font-bold text-gray-900 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 text-sm">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="p-3 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl inline-block mb-4">
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
