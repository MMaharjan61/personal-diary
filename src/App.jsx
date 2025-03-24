import DiaryCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Entrylist from "./components/Entrylist";

const App = () => {
  return (
    // feature/header-styling
    <div className="min-h-screen bg-gradient">
      <header className="flex flex-col items-center justify-center pt-16 pb-12">
        <h1 className="text-highlight mb-8">MyDiary</h1>
        <button className="add-entry-btn">Add entry</button>
      </header>
      <main className="container mx-auto px-4">
        <DiaryCalendar />
        <Entrylist />
      </main>
    </div>
  );
};

export default App;
