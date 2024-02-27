import MainScreen from "@/components/MainScreen";
import Player from "@/components/Player";
import SideBar from "@/components/SideBar";
import { Toaster } from "react-hot-toast";

export default function Home(): React.JSX.Element {
  return (
    <div className="h-screen overflow-hidden">
      <main className="flex h-[90vh] w-full flex-row p-2 sm:p-5">
        <SideBar />
        <MainScreen />
      </main>
      <Toaster
        toastOptions={{
          style: {
            background: "#27272a",
            color: "#fce7f3",
          },
          position: "top-right",
          duration: 1500,
        }}
      />
      <Player />
    </div>
  );
}
