export default function Header() {
  return (
    <header className="bg-dark-card shadow-lg p-4 flex justify-between items-center border-b border-neon-blue">
      <h1 className="text-2xl font-display font-bold text-neon-green">AI Exposure Balance</h1>
      {/* Placeholder for user icon/avatar */}
      <div className="w-10 h-10 bg-neon-pink rounded-full flex items-center justify-center text-dark-bg font-bold">P</div>
    </header>
  );
}
