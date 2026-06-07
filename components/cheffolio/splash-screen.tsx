'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const pathVariants = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(0, 0, 0, 0)',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(0, 0, 0, 0)',
    transition: {
      pathLength: { duration: 2, ease: 'easeInOut' },
    },
  },
};

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // You can comment out the sessionStorage checks during development
    // to see the animation on every refresh.
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    // Set it so it doesn't show again this session
    sessionStorage.setItem('hasSeenSplash', 'true');

    // Hide splash screen after animation finishes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800); // 1.5s draw + 0.5s fill + 0.8s hold

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2835 1417.5"
            className="h-auto w-64 md:w-96 text-foreground"
            initial="hidden"
            animate="visible"
          >
            <g transform="matrix(1, 0, 0, 1, 170, 0)">
              <g transform="matrix(1, 0, 0, 1, 0, 0)">
                {/* Path 1 */}
                <g transform="translate(2.089659, 1296.766345)">
                  <motion.path
                    variants={pathVariants}
                    d="M 90.0625 -104.28125 L 90.0625 -209.734375 L 400.515625 -209.734375 L 400.515625 -314.015625 L 90.0625 -314.015625 L 90.0625 -732.296875 L 193.140625 -732.296875 L 193.140625 -836.578125 L 611.4375 -836.578125 L 611.4375 -625.65625 L 300.984375 -625.65625 L 300.984375 -522.5625 L 611.4375 -522.5625 L 611.4375 -104.28125 L 507.15625 -104.28125 L 507.15625 0 L 90.0625 0 Z M 90.0625 -104.28125 "
                    stroke="currentColor"
                    strokeWidth="40"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                {/* Path 2 */}
                <g transform="translate(714.249571, 1296.766345)">
                  <motion.path
                    variants={pathVariants}
                    d="M 87.6875 -104.28125 L 87.6875 -836.578125 L 298.609375 -836.578125 L 298.609375 -522.5625 L 604.328125 -522.5625 L 604.328125 -836.578125 L 815.25 -836.578125 L 815.25 0 L 604.328125 0 L 604.328125 -314.015625 L 298.609375 -314.015625 L 298.609375 0 L 87.6875 0 Z M 87.6875 -104.28125 "
                    stroke="currentColor"
                    strokeWidth="40"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                {/* Path 3 */}
                <g transform="translate(1620.742753, 1296.766345)">
                  <motion.path
                    variants={pathVariants}
                    d="M 394.59375 -522.5625 L 497.6875 -522.5625 L 497.6875 -625.65625 L 295.046875 -625.65625 L 295.046875 -522.5625 Z M 84.125 -104.28125 L 84.125 -836.578125 L 605.515625 -836.578125 L 605.515625 -732.296875 L 707.421875 -732.296875 L 707.421875 -314.015625 L 605.515625 -314.015625 L 605.515625 -209.734375 L 707.421875 -209.734375 L 707.421875 -105.453125 L 811.6875 -105.453125 L 811.6875 0 L 600.765625 0 L 600.765625 -104.28125 L 497.6875 -104.28125 L 497.6875 -208.546875 L 394.59375 -208.546875 L 394.59375 -314.015625 L 295.046875 -314.015625 L 295.046875 0 L 84.125 0 Z M 84.125 -104.28125 "
                    stroke="currentColor"
                    strokeWidth="40"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
