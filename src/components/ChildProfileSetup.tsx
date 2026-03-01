import { AppScreen } from '../App';

interface ChildProfileSetupProps {
  setCurrentScreen: (screen: AppScreen) => void;
}

export default function ChildProfileSetup({ setCurrentScreen }: ChildProfileSetupProps) {
  return (
    <div className="p-4 bg-dark-card rounded-lg shadow-lg border border-neon-pink">
      <h2 className="text-2xl font-display font-semibold text-neon-pink mb-4">Child Profile Setup</h2>
      <p className="text-gray-text mb-4">This is where you'll set up your child's profile.</p>
      <button
        onClick={() => setCurrentScreen(AppScreen.AI_LITERACY_PLAN)}
        className="bg-neon-green text-dark-bg font-bold px-4 py-2 rounded-md shadow-lg hover:bg-opacity-80 transition-all border border-neon-blue"
      >
        <span className="font-display">Next: AI Literacy Plan</span>
      </button>
    </div>
  );
}
