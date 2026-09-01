"use client";

import { SectionTitle } from "./ui/SectionTitle";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, DollarSign, Users } from "lucide-react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function CampaignDashboards() {
  const metrics = [
    { label: "Total Spend", value: "₹45,230", trend: "+12%", icon: DollarSign },
    { label: "Qualified Leads", value: "342", trend: "+24%", icon: Users },
    { label: "Cost Per Lead", value: "₹132", trend: "-8%", icon: TrendingUp },
    { label: "Conversion Rate", value: "4.8%", trend: "+1.2%", icon: BarChart3 },
  ];

  const chartOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      background: "transparent",
      fontFamily: "inherit",
    },
    theme: { mode: "dark" },
    colors: ["#9d4edd"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.05,
        stops: [0, 90, 100]
      }
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    xaxis: {
      categories: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"],
      labels: { style: { colors: "#ffffff80" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: "#ffffff80" } },
    },
    grid: {
      borderColor: "rgba(255,255,255,0.05)",
      strokeDashArray: 4,
      yaxis: { lines: { show: true } },
    },
    tooltip: { theme: "dark" }
  };

  const chartSeries = [
    {
      name: "Qualified Leads",
      data: [40, 25, 45, 30, 60, 45, 75, 50, 85, 60, 95, 70]
    }
  ];

  return (
    <section className="py-24 relative bg-[#050308] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle 
          title="Campaign Results" 
          subtitle="Transparent Reporting"
        />
        <p className="text-gray-400 text-center max-w-3xl mx-auto -mt-8 mb-12 text-lg">
          Here's how our campaigns actually perform — real numbers from live client work. Results vary by business, offer, and budget; we report the real figures every week.
        </p>

        <div className="max-w-5xl mx-auto mt-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 blur-[150px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6 md:p-10 border border-white/10 rounded-[2rem] bg-[#0a0514]/80 backdrop-blur-xl relative"
          >
            {/* Dashboard Header Mockup */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 pb-6 border-b border-white/5 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide ml-2">Sample dashboard — illustrative</h3>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white/70 text-sm font-medium">
                Last 30 Days
              </div>
            </div>

            {/* Metrics Grid Mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, idx) => (
                <div key={idx} className="bg-black/40 border border-white/5 rounded-2xl p-6 hover:bg-white/5 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <metric.icon size={20} />
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${metric.trend.startsWith('+') && !metric.label.includes('Cost') ? 'bg-green-500/20 text-green-400' : 'bg-green-500/20 text-green-400'}`}>
                      {metric.trend}
                    </span>
                  </div>
                  <h4 className="text-white/60 text-sm font-medium mb-1">{metric.label}</h4>
                  <p className="text-2xl font-bold text-white tracking-tight">{metric.value}</p>
                </div>
              ))}
            </div>

            {/* Real Chart Area */}
            <div className="mt-8 bg-black/40 border border-white/5 rounded-2xl p-6 h-[300px]">
              <div className="w-full h-full">
                <Chart 
                  options={chartOptions as any} 
                  series={chartSeries} 
                  type="area" 
                  height="100%" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
