import Main from "@/components/common/main/modern/main";
import Cursor from "@/components/cursor/cursor";

export default function Home() {
  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
        <main className="flex-1">
          <Main />
        </main>
      </div>
      <Cursor />
    </>
  );
}
