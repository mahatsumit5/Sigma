export default function App() {
  return (
    <div className="bg-slate-400 min-h-screen max-w-screen-2xl mx-auto flex flex-col  items-center py-10">
      <div className="flex flex-col w-full items-center ">
        <span className="text-4xl font-bold"> Sigma</span>
        <span className=""> - Create your signature in a minute </span>
      </div>
      <div className="bg-slate-300 w-full text-center py-5 p-2 mt-10">
        menu bar
      </div>
      <div className="h-full bg-white w-full min-h-screen flex">
        <div className="w-[100px] bg-slate-200 rounded text-center p-10">1</div>
        <div className=" w-full text-center bg-gradient-to-br from-slate-50 via-slate-200 to-slate-400">
          WhiteBoard
        </div>
      </div>
    </div>
  );
}
