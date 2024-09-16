import { useState } from "react";
import TagInput from "./TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  //Add Note
  const addNewNote = async () => {};
  //Edit Note
  const editNote = async () => {};

  const handleAddNote = () => {
    if (!title) {
      setError("Title is required");
      return;
    }
    if (!content) {
      setError("Content is required");
      return;
    }

    // Clear error message and perform note addition logic
    setError("");
    // Add your note submission logic here, e.g., call an API or update state

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="absolute flex items-center justify-center w-10 h-10 rounded-full -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}>
        <MdClose className="text-xl text-slate-400" />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label">Title</label>
        <input
          type="text"
          className="text-2xl outline-none text-slate-950"
          placeholder="Enter Title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">Content</label>
        <textarea
          className="p-2 text-lg rounded-md outline-none text-slate-950 bg-slate-50"
          placeholder="Enter Content"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>
      <div className="mt-3">
        <label className="input-label">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="mt-2 text-red-500">{error}</p>}
      <button
        className="p-3 mt-5 font-medium btn-primary"
        onClick={handleAddNote} // Invoke handleAddNote correctly
      >
        Add Note
      </button>
    </div>
  );
};

export default AddEditNotes;
