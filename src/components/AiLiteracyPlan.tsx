import { AppScreen } from '../App';

interface AiLiteracyPlanProps {
  setCurrentScreen: (screen: AppScreen) => void;
}

export default function AiLiteracyPlan({ setCurrentScreen }: AiLiteracyPlanProps) {
  return (
    <div className="p-4 bg-dark-card rounded-lg shadow-lg border border-neon-yellow">
      <h2 className="text-2xl font-display font-semibold text-neon-yellow mb-4">AI Literacy Plan</h2>
      <p className="text-gray-text mb-4">Here's your child's personalized AI literacy plan.</p>
      <button
        onClick={() => setCurrentScreen(AppScreen.DAILY_BALANCE_TRACKER)}
        className="bg-neon-blue text-dark-bg font-bold px-4 py-2 rounded-md shadow-lg hover:bg-opacity-80 transition-all border border-neon-green"
      >
        <span className="font-display">Next: Daily Balance Tracker</span>
      </button>
    </div>
  );
}
