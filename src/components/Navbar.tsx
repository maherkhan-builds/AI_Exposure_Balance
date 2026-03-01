import { AppScreen } from '../App';
import { Home, User, BookOpen, BarChart2, TrendingUp, Settings } from 'lucide-react';

interface NavbarProps {
  currentScreen: AppScreen;
  setCurrentScreen: (screen: AppScreen) => void;
}

export default function Navbar({ currentScreen, setCurrentScreen }: NavbarProps) {
  const navItems = [
    { screen: AppScreen.DAILY_BALANCE_TRACKER, icon: BarChart2, label: 'Daily' },
    { screen: AppScreen.WEEKLY_INSIGHTS, icon: TrendingUp, label: 'Weekly' },
    { screen: AppScreen.AI_LITERACY_PLAN, icon: BookOpen, label: 'Plan' },
    { screen: AppScreen.LEARNING_MODULES, icon: Home, label: 'Learn' },
    { screen: AppScreen.SETTINGS_AND_CONTROLS, icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="bg-dark-card shadow-lg p-4 flex justify-around items-center border-t border-neon-blue">
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => setCurrentScreen(item.screen)}
          className={`flex flex-col items-center p-2 rounded-md transition-all ${currentScreen === item.screen ? 'text-neon-green bg-dark-bg border border-neon-green' : 'text-gray-text hover:text-neon-blue'}`}
        >
          <item.icon size={24} />
          <span className="text-xs mt-1 font-display">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
