import Calendar from "react-calendar";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient">
      <header className="flex flex-col items-center justify-center pt-16 pb-12">
        <h1 className="text-highlight mb-8">MyDiary</h1>
        <button className="add-entry-btn">Add entry</button>
      </header>
      <main className="container mx-auto px-4">
        <Calendar />
      </main>
    </div>
  );
};

export default App;
