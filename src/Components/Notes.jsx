import { useRef } from "react";
import { X } from "lucide-react";
import Draggable from "react-draggable";
import notePaper from "./../../public/note-paper.webp";

const Notes = ({ items, index, deleteNote }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="relative h-52 w-40 bg-cover text-black py-9 px-4 rounded-2xl"
        style={{ backgroundImage: `url(${notePaper})` }}
      >
        <h2
          onClick={() => {
            deleteNote(index);
          }}
          className="absolute top-5 right-5 text-white bg-red-500 p-1 rounded-full text-xs cursor-pointer active:scale-95"
        >
          <X size={15} />
        </h2>
        <h3 className="leading-tight text-lg font-bold">{items.heading}</h3>
        <p className="leading-tight text-xs mt-2 font-semibold text-gray-500">
          {items.details}
        </p>
      </div>
    </Draggable>
  );
};

export default Notes;
