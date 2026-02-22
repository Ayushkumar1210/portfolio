import React from 'react';

const ScrollBlur = () => {
    return (
        <>
            {/* Top Blur */}
            <div className="fixed top-0 left-0 w-full h-24 z-50 pointer-events-none backdrop-blur-[2px] opacity-80"
                style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }}>
            </div>

            {/* Bottom Blur */}
            <div className="fixed bottom-0 left-0 w-full h-24 z-50 pointer-events-none backdrop-blur-[2px] opacity-80"
                style={{ maskImage: 'linear-gradient(to top, black, transparent)' }}>
            </div>
        </>
    );
};

export default ScrollBlur;
