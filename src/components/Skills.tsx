const Skills = () => {
  const skillCategories = [
    {
      category: 'Automation Tools & Frameworks',
      skills: [
        'Selenium WebDriver',
        'Playwright',
        'TestNG',
        'JUnit',
        'PyTest',
        'Maven',
        'Cucumber (BDD)',
        'Ginger',
        'SoapUI',
        'Postman',
      ],
    },
    {
      category: 'Programming & Databases',
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'MySQL'],
    },
    {
      category: 'DevOps & CI/CD',
      skills: [
        'Jenkins',
        'GitLab',
        'GitHub',
        'Docker',
        'Kubernetes',
        'Kafka',
        'CI/CD Pipelines',
      ],
    },
    {
      category: 'Test & Defect Management',
      skills: [
        'Azure DevOps',
        'Jira',
        'iTrack',
        'Zephyr',
        'HP ALM',
        'Confluence',
      ],
    },
    {
      category: 'Methodologies',
      skills: [
        'SDLC',
        'STLC',
        'Agile/Scrum',
        'Waterfall',
        'TDD/BDD/ATDD',
        'Performance Testing',
        'Security Testing',
        'Regression Testing',
        'Integration Testing',
      ],
    },
    {
      category: 'Data Visualization',
      skills: [
        'Tableau',
        'Looker',
        'Power BI',
        'Matplotlib',
        'Seaborn',
        'Plotly',
      ],
    },
    {
      category: 'Additional Technologies',
      skills: [
        'IntelliJ IDEA',
        'Visual Studio',
        'BrowserStack',
        'Citrix',
        'Amdocs CRM/CSM',
        'BSS/OSS',
        'Camunda',
        'Linux/Unix',
        'PuTTY',
      ],
    },
    {
      category: 'Soft Skills',
      skills: [
        'Collaboration',
        'Problem Solving',
        'Communication',
        'Adaptability',
        'Proactiveness',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gradient-to-r from-sky-50 to-indigo-50 text-sky-700 rounded-lg text-sm font-medium border border-sky-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
