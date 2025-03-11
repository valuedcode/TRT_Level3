import tailwindcss
import Header from "@/components/Header"; // Importing the new component

export default function HomePage() {
  return (
    <div>
      <Header /> {/* Using the new component */}
    </div>
  );
}
