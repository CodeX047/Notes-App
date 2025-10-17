import { useState, useEffect } from "react";
import Form from "./Components/Form";
import Notes from "./Components/Notes";

const App = () => {
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState(() => {
    try {
      const raw = localStorage.getItem("tasks");
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      return [];
    }
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (!heading.trim() || !details.trim()) return;

    const copyTask = [...task];
    copyTask.push({ heading, details });

    setTask(copyTask);

    setHeading("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);

    setTask(copyTask);
  };

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(task));
    } catch (err) {}
  }, [task]);

  return (
    <div className="h-screen lg:flex bg-[#1a1a1a] text-white">
      <Form
        handler={submitHandler}
        heading={heading}
        details={details}
        setHeading={setHeading}
        setDetails={setDetails}
      />
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap gap-5 mt-5 h-screen lg:h-[95%] overflow-auto items-start justify-start rounded-2xl border-1 border-amber-300">
          {task.map((items, index) => {
            return (
              <Notes
                key={index}
                items={items}
                index={index}
                deleteNote={deleteNote}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
