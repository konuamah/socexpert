

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <img
        src="/logo.png" // Replace with your image path
        alt="Loading..."
        className="w-35 h-16 sm:w-40 sm:h-24 md:w-72 md:h-32 animate-pulse"
      />
    </div>
  );
}
