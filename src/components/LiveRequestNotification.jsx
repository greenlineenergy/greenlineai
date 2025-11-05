import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

const requestTypes = ["Solar", "Aircon", "Battery"];
const locations = [
  { town: "Kinglake", state: "VIC" }, { town: "Sydney", state: "NSW" }, { town: "Brisbane", state: "QLD" },
  { town: "Canberra", state: "ACT" }, { town: "Adelaide", state: "SA" }, { town: "Hobart", state: "TAS" },
  { town: "Darwin", state: "NT" }, { town: "Perth", state: "WA" }, { town: "Ballarat", state: "VIC" },
  { town: "Cairns", state: "QLD" }, { town: "Toowoomba", state: "QLD" }, { town: "Launceston", state: "TAS" },
  { town: "Alice Springs", state: "NT" }, { town: "Bunbury", state: "WA" }, { town: "Wollongong", state: "NSW" },
  { town: "Townsville", state: "QLD" }, { town: "Geelong", state: "VIC" }, { town: "Bendigo", state: "VIC" },
  { town: "Rockhampton", state: "QLD" }, { town: "Devonport", state: "TAS" }, { town: "Katherine", state: "NT" },
  { town: "Albany", state: "WA" }, { town: "Newcastle", state: "NSW" }, { town: "Mildura", state: "VIC" },
  { town: "Mackay", state: "QLD" }, { town: "Burnie", state: "TAS" }, { town: "Tennant Creek", state: "NT" },
  { town: "Geraldton", state: "WA" }, { town: "Orange", state: "NSW" }, { town: "Shepparton", state: "VIC" },
  { town: "Gladstone", state: "QLD" }, { town: "Ulverstone", state: "TAS" }, { town: "Nhulunbuy", state: "NT" },
  { town: "Wagga Wagga", state: "NSW" }, { town: "Traralgon", state: "VIC" }, { town: "Bundaberg", state: "QLD" },
  { town: "Smithton", state: "TAS" }, { town: "Kununurra", state: "NT" }, { town: "Broome", state: "WA" },
  { town: "Bathurst", state: "NSW" }, { town: "Warrnambool", state: "VIC" }, { town: "Hervey Bay", state: "QLD" },
  { town: "St Helens", state: "TAS" }, { town: "Palmerston", state: "NT" }, { town: "Kalgoorlie", state: "WA" }
];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomTime = () => Math.floor(Math.random() * 10) + 1;

const LiveRequestNotification = () => {
  const [notification, setNotification] = useState(null);
  const [key, setKey] = useState(0);
  const isPaused = useRef(false);
  const timeoutId = useRef(null);

  const generateNewNotification = () => {
    const type = getRandomItem(requestTypes);
    const location = getRandomItem(locations);
    const time = getRandomTime();
    setNotification({ type, location, time });
    setKey(prevKey => prevKey + 1);
  };

  const scheduleNextUpdate = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    if (isPaused.current) return;

    const randomInterval = Math.floor(Math.random() * (9000 - 6000 + 1)) + 6000;
    timeoutId.current = setTimeout(() => {
      generateNewNotification();
      scheduleNextUpdate();
    }, randomInterval);
  };

  useEffect(() => {
    generateNewNotification();
    scheduleNextUpdate();

    const handleMouseOver = (e) => {
      if (e.target.closest('video, form, iframe')) {
        isPaused.current = true;
        if (timeoutId.current) clearTimeout(timeoutId.current);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('video, form, iframe')) {
        isPaused.current = false;
        scheduleNextUpdate();
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-auto md:h-[50px] bg-brand-slate text-white border-b-2 border-brand-teal z-[1000] flex items-center justify-center p-1.5 md:p-2.5 overflow-hidden hover:shadow-glow-teal transition-shadow duration-300">
      <AnimatePresence mode="wait">
        {notification && (
          <motion.div
            key={key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center text-center w-full"
          >
            <Zap className="w-4 h-4 text-brand-teal mr-0 md:mr-2 mb-1 md:mb-0 flex-shrink-0" />
            <p className="text-xs md:text-sm font-montserrat">
              A request for <span className="font-bold text-white">{notification.type}</span> was made in <span className="font-bold text-white">{notification.location.town}, {notification.location.state}</span> {notification.time} mins ago
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <img src="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/b67dc11829391a652ab3a1ddb63a6369.jpg" alt="GreenLine Logo" className="absolute right-2.5 h-[10px] w-auto opacity-20" />
    </div>
  );
};

export default LiveRequestNotification;