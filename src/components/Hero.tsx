import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
  const skills = [
    'Python',
    'SQL',
    'R',
    'Selenium',
    'TestNG',
    'CI/CD',
    'AWS',
    'ETL',
    'ML',
    'Dashboards',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Harshavardhan Nandi
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 font-medium">
                Data Analyst & Automation Engineer
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Multi-disciplinary professional blending software quality
              assurance with data science. Skilled in Python, SQL, R and
              advanced analytics for extracting actionable insights. Expert in
              building automation frameworks and translating business
              requirements into efficient solutions.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-sky-50 to-indigo-50 text-sky-700 rounded-full text-sm font-medium border border-sky-100"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={18} />
              </button>
              <a
                href="/HarshavardhanNandi_Resume_DE.pdf"
                download="HarshavardhanNandi_Resume_DE.pdf"
                className="px-6 py-3 bg-white text-gray-700 rounded-full font-medium border-2 border-gray-200 hover:border-sky-500 hover:text-sky-600 transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 bg-white text-gray-700 rounded-full font-medium border-2 border-gray-200 hover:border-sky-500 hover:text-sky-600 transition-all flex items-center gap-2"
              >
                <Mail size={18} />
                Contact
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-delay">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/photo-output.JPEG"
                  alt="Harshavardhan Nandi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
