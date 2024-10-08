import Bites from "../components/Bites";
import "@/libs/langchain";
// import "@/data/safeJson";

export default function Home() {
  return (
    <div className="min-h-screen py-4">
      <main className="flex flex-col gap-8 items-center">
        <div className="flex w-full max-w-[640px] items-center justify-between gap-2 px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Z"></path>
          </svg>
          <a href="/add"className="border-gray-200 border h-9 w-9 rounded-full flex justify-center items-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path></svg>
          </a>
        </div>
        <Bites />
      </main>
    </div>
  );
}
