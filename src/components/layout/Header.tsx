import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

export default function Header() {
  return (
    <header className="mt-4">
      <TopHeader />
      <BottomHeader />
    </header>
  );
}
