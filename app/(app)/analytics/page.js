// File: app/(app)/analytics/page.js
'use client';

// A card for displaying a single, key statistic like "Attendee's Rate".
const StatCard = ({ title, value, change, changeColor }) => (
  <div className="text-center rounded-3xl bg-dark-2/50 p-8 ring-1 ring-white/10 backdrop-blur-md">
    <p className="font-kreon text-3xl text-gray-400">{title}</p>
    <p className="mt-4 font-kreon text-5xl font-bold text-white">
      {value}
      {change && <span className={`ml-3 text-3xl ${changeColor}`}>{change}</span>}
    </p>
  </div>
);

// A component for a single item in the "Top Performing Events" list.
const TopEvent = ({ name, revenue }) => (
  <div className="flex justify-between items-center rounded-full bg-dark-2/50 px-8 py-4 text-2xl font-junge text-white ring-1 ring-white/50 backdrop-blur-md">
    <span>{name}</span>
    <span>{revenue}</span>
  </div>
);

// --- NEW & IMPROVED: A high-fidelity line chart placeholder using SVG ---
const LineChartPlaceholder = () => {
    // These points are carefully chosen to mimic the shape of your design's line graph.
    const data2025 = "0,40 50,110 100,70 150,90 200,40 250,20 300,30 350,15 400,60 450,80 500,70 550,110";
    const data2024 = "0,130 50,170 100,140 150,160 200,80 250,70 300,100 350,50 400,90 450,120 500,110 550,140";

    return (
        <div className="w-full h-[450px] bg-black/20 p-6 rounded-2xl ring-1 ring-white/10 flex flex-col">
            <div className="flex-1 flex">
                <div className="flex flex-col justify-between h-full text-xs text-gray-400 text-right pr-4">
                    <span>200</span><span>160</span><span>120</span><span>80</span><span>40</span><span>0</span>
                </div>
                <div className="relative flex-1">
                    <svg width="100%" height="100%" viewBox="0 0 550 200" preserveAspectRatio="none">
                        {/* Gradient Definitions */}
                        <defs>
                            <linearGradient id="gradient2025" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#FF928A" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="#FF928A" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="gradient2024" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#8979FF" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="#8979FF" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        {/* Grid Lines */}
                        {[...Array(6)].map((_, i) => (
                            <line key={i} x1="0" y1={i * 40} x2="550" y2={i * 40} strokeDasharray="4 4" stroke="rgba(255,255,255,0.1)" />
                        ))}

                        {/* Gradient Fills */}
                        <polygon points={`${data2025} 550,200 0,200`} fill="url(#gradient2025)" />
                        <polygon points={`${data2024} 550,200 0,200`} fill="url(#gradient2024)" />

                        {/* Data Lines */}
                        <polyline points={data2025} fill="none" stroke="#FF928A" strokeWidth="2" />
                        <polyline points={data2024} fill="none" stroke="#8979FF" strokeWidth="2" />

                        {/* Data Points (Circles) */}
                        {data2025.split(' ').map((point, i) => <circle key={`p25-${i}`} cx={point.split(',')[0]} cy={point.split(',')[1]} r="3" fill="#FF928A" />)}
                        {data2024.split(' ').map((point, i) => <circle key={`p24-${i}`} cx={point.split(',')[0]} cy={point.split(',')[1]} r="3" fill="#8979FF" />)}
                    </svg>
                </div>
            </div>
            {/* X-Axis Labels */}
            <div className="flex justify-between text-xs text-gray-400 pl-12 pr-4 pt-2">
                {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'].map(month => <span key={month}>{month}</span>)}
            </div>
             {/* Legend */}
            <div className="flex justify-center items-center gap-6 pt-4 text-xs text-gray-300">
                <div className="flex items-center gap-2"><div className="w-3 h-0.5 bg-[#8979FF]"></div><span>2024</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-0.5 bg-[#FF928A]"></div><span>2025</span></div>
            </div>
        </div>
    );
};
// --- END NEW COMPONENT ---

export default function AnalyticsPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 text-white space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div>
            <h2 className="text-center text-4xl font-kreon mb-8">Top Performing Events</h2>
            <div className="space-y-4">
              <TopEvent name="Tech Conference" revenue="₹88,590" />
              <TopEvent name="Music Fest" revenue="₹82,690" />
            </div>
          </div>
          <div>
            <h2 className="text-center text-4xl font-kreon mb-8">Tickets Sold Over Time</h2>
            <div className="mt-8">
                <LineChartPlaceholder />
            </div>
          </div>
        </div>

        <div className="space-y-12">
            <h2 className="text-center text-4xl font-kreon">Attendee's Overview</h2>
            <StatCard title="Attendee's Rate" value="90%" change="+3" changeColor="text-green-400" />

            <div className="h-[450px] bg-black/20 p-4 flex items-center justify-center text-gray-500 rounded-2xl ring-1 ring-white/10">
                Attendee Demographics Chart Placeholder
            </div>
        </div>
      </div>
    </div>
  );
}