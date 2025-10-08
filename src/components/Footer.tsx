import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>by Harshavardhan Nandi</span>
          </div>

          <div className="text-gray-400 text-sm">
            {currentYear} All rights reserved
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
