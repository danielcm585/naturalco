import Navbar from "../components/Navbar";
import DummyChild1 from "../components/DummyChild1";
import DummyChild2 from "../components/DummyChild2";
import DummyChild3 from "../components/DummyChild3";

export default function DummyPage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center pt-6">
        <div className="w-[60%]">
          <DummyChild1 />
          <DummyChild2 />
          <DummyChild3 />
        </div>
      </div>
    </>
  )
}
