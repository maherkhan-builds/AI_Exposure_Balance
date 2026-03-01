import { AppScreen } from '../App';

interface OnboardingProps {
  setCurrentScreen: (screen: AppScreen) => void;
}

export default function Onboarding({ setCurrentScreen }: OnboardingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] p-4 bg-dark-card rounded-lg shadow-lg border border-neon-blue">
      <h1 className="text-4xl font-display font-bold text-neon-green mb-4">Welcome to AI Exposure Balance</h1>
      <p className="text-lg text-gray-text text-center mb-8">Your guide to healthy AI literacy for children.</p>
      <button
        onClick={() => setCurrentScreen(AppScreen.CHILD_PROFILE_SETUP)}
        className="bg-neon-blue text-dark-bg font-bold px-6 py-3 rounded-md shadow-lg hover:bg-opacity-80 transition-all border border-neon-green"
      >
        <span className="font-display">Get Started</span>
      </button>
    </div>
  );
}
