import Navbar from "../components/Navbar";
import UserList from "../components/UserList";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center pt-6">
        <div className="sm:w-[60%] w-[85%]">
          <UserList />
        </div>
      </div>
    </>
  )
}
