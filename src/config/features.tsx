import { BarChart3, ShieldCheck, Wallet, ArrowUpDown, TrendingUp, Bot, Globe, Bell, Users, BookOpen } from "lucide-react";

export const features = [
  {
    title: "Advanced Trading Interface",
    description: "Professional-grade trading tools with real-time market data and advanced charting capabilities.",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
    stats: { value: "99.9%", label: "Uptime" }
  },
  {
    title: "Portfolio Management",
    description: "Track your investments and monitor your gains with our comprehensive portfolio dashboard.",
    icon: <Wallet className="w-6 h-6" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
    stats: { value: "$2.5B+", label: "Assets Tracked" }
  },
  {
    title: "Security & Verification",
    description: "Industry-leading security measures with KYC verification process to protect your assets.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
    stats: { value: "256-bit", label: "Encryption" }
  },
  {
    title: "Performance Analytics",
    description: "Detailed analytics and credit scoring system to help you make informed decisions.",
    icon: <ArrowUpDown className="w-6 h-6" />,
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png",
    stats: { value: "Real-time", label: "Data Updates" }
  },
  {
    title: "Market Intelligence",
    description: "Advanced AI-powered market analysis with predictive insights and trend forecasting.",
    icon: <TrendingUp className="w-6 h-6" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
    stats: { value: "1000+", label: "Markets" }
  },
  {
    title: "Automated Trading Bots",
    description: "Deploy custom trading strategies with our powerful automation tools and backtesting.",
    icon: <Bot className="w-6 h-6" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
    stats: { value: "24/7", label: "Trading" }
  },
  {
    title: "Multi-Currency Support",
    description: "Trade across 200+ cryptocurrencies with instant conversion and competitive rates.",
    icon: <Globe className="w-6 h-6" />,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
    stats: { value: "200+", label: "Currencies" }
  },
  {
    title: "Smart Notifications",
    description: "Stay informed with customizable alerts for price movements, trades, and market events.",
    icon: <Bell className="w-6 h-6" />,
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png",
    stats: { value: "Instant", label: "Alerts" }
  },
  {
    title: "Social Trading",
    description: "Follow top traders, copy their strategies, and learn from the crypto community.",
    icon: <Users className="w-6 h-6" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
    stats: { value: "50K+", label: "Traders" }
  },
  {
    title: "Educational Academy",
    description: "Access comprehensive learning resources, tutorials, and expert insights to master crypto trading.",
    icon: <BookOpen className="w-6 h-6" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
    stats: { value: "500+", label: "Lessons" }
  }
];