// components/loading-screen.tsx
export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <img
        src="/logo.png"         // make sure this path is correct
        alt="Slamm SOC Experts Logo"
        className="h-24 w-48 animate-spin-slow"
      />
    </div>
  );
}
