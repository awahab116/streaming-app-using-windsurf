import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isStarDropdownOpen, setIsStarDropdownOpen] = useState(false);
  const starDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownContentRef = useRef<HTMLDivElement>(null);
  const [dropdownHeight, setDropdownHeight] = useState('80vh'); // Default height

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (starDropdownRef.current && !starDropdownRef.current.contains(event.target as Node)) {
        setIsStarDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Adjust dropdown height on open and resize
  useEffect(() => {
    const updateDropdownHeight = () => {
      const offsetFromTop = starDropdownRef.current?.getBoundingClientRect().bottom || 0;
      const availableHeight = window.innerHeight - offsetFromTop - 20; // 20px bottom margin
      setDropdownHeight(`${availableHeight}px`);
    };

    if (isStarDropdownOpen) {
      updateDropdownHeight();
      window.addEventListener('resize', updateDropdownHeight);
    }

    return () => {
      window.removeEventListener('resize', updateDropdownHeight);
    };
  }, [isStarDropdownOpen]);

  return (
    <nav className="bg-[#18181b] px-4 flex items-center justify-between sticky top-0 z-50 w-full" style={{ minHeight: '56px' }}>
      {/* Left */}
      <div className="flex items-center gap-2 min-w-[200px]">
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="22" rx="8" fill="#fff" />
            <path d="M13 10L8 16.5V33H16V37H22L26 33H32V10H13Z" fill="#9147FF" />
            <rect x="18" y="17" width="2" height="8" rx="1" fill="#fff" />
            <rect x="25" y="17" width="2" height="8" rx="1" fill="#fff" />
          </svg>
        </div>
        <a href="#" className="text-white font-semibold text-base hover:text-white px-2">Browse</a>
        <Link to="/dashboard" className="flex items-center gap-1 text-white font-semibold text-base hover:text-purple-400 px-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Analytics
        </Link>
        <span className="mx-2 h-4 w-px bg-white/30 hidden md:inline-block"></span>
        <button className="flex items-center justify-center w-8 h-8 text-white hover:text-white md:inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </div>

      {/* Center */}
      <div className="flex-1 max-w-lg mx-4">
        <div className="flex items-center bg-white/10 rounded focus-within:ring-2 focus-within:ring-white px-2" style={{ height: '36px' }}>
          <input
            type="text"
            className="flex-1 bg-transparent text-white px-3 py-1 outline-none placeholder:text-white/70 text-base font-medium"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="px-2 text-white hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 min-w-[200px] justify-end">
        <div className="relative" ref={starDropdownRef}>
          <button
            className="w-8 h-8 flex items-center justify-center text-yellow-300 hover:text-yellow-400"
            onClick={() => setIsStarDropdownOpen(!isStarDropdownOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path d="M10 3l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 14.27l-4.77 2.45.91-5.33-3.87-3.77 5.34-.78L10 3z" />
            </svg>
          </button>

          {/* Dropdown */}
          {isStarDropdownOpen && (
            <div
              ref={dropdownContentRef}
              className="absolute right-0 mt-1 w-[400px] bg-[#18181b] rounded shadow-lg z-50 border border-gray-700 overflow-y-auto"
              style={{ maxHeight: dropdownHeight }}
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between mb-1 pb-2">
                  <div className="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 2L2 6.5V19H8V23H12L16 19H20V2H6.5Z" fill="#9147FF" />
                    </svg>
                    <span className="text-white font-bold">prime gaming</span>
                  </div>
                  <button className="text-gray-400 hover:text-white" onClick={() => setIsStarDropdownOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <h2 className="text-white text-lg font-bold">Claim your games today</h2>
                <div className="flex items-center gap-2 text-sm text-white mt-1">
                  <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Included with Amazon Prime</span>
                </div>
                <p className="text-gray-300 text-sm mt-3">
                  Get a monthly Twitch channel sub for your favorite streamer, games every week, and other gaming benefits.
                </p>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded mt-3 flex items-center justify-center gap-1">
                  Claim now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="text-center mt-2 text-sm">
                  <span className="text-gray-400">Already have Prime? </span>
                  <a href="#" className="text-purple-400 hover:underline font-medium">Sign in →</a>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-700">
                <button className="flex-1 py-3 text-purple-400 border-b-2 border-purple-400 font-medium">Games</button>
                <button className="flex-1 py-3 text-gray-400 hover:text-white">Twitch channel sub</button>
              </div>

              {/* Content cards */}
              {[...Array(3)].map((_, index) => (
                <div key={index} className="p-4">
                  <h3 className="text-white text-lg font-bold mb-3">Celebrate Star Wars</h3>
                  <div className="bg-black rounded overflow-hidden mb-3">
                    <img
                      src="https://placehold.co/600x300/000000/FFFFFF/png?text=STAR+WARS"
                      alt="Star Wars"
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-3">
                      <p className="text-white text-sm">Play a collection of Star Wars games included with Prime</p>
                      <p className="text-gray-400 text-xs mt-1">Prime Gaming</p>
                    </div>
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded">
                    Start Your Free Trial
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Auth buttons */}
        <button className="bg-white/10 text-white text-sm px-4 py-1.5 rounded font-semibold hover:bg-white/20 border border-transparent">
          Log In
        </button>
        <button className="bg-[#9147ff] text-white text-sm px-4 py-1.5 rounded font-bold hover:bg-[#772ce8] border border-[#9147ff]">
          Sign Up
        </button>
        <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
