import { AppScreen } from '../App';

interface DailyBalanceTrackerProps {
  setCurrentScreen: (screen: AppScreen) => void;
}

export default function DailyBalanceTracker({ setCurrentScreen }: DailyBalanceTrackerProps) {
  return (
    <div className="p-4 bg-dark-card rounded-lg shadow-lg border border-neon-green">
      <h2 className="text-2xl font-display font-semibold text-neon-green mb-4">Daily Balance Tracker</h2>
      <p className="text-gray-text mb-4">Track your child's daily AI use here.</p>
      <button
        onClick={() => setCurrentScreen(AppScreen.WEEKLY_INSIGHTS)}
        className="bg-neon-pink text-dark-bg font-bold px-4 py-2 rounded-md shadow-lg hover:bg-opacity-80 transition-all border border-neon-blue"
      >
        <span className="font-display">Next: Weekly Insights</span>
      </button>
    </div>
  );
}
