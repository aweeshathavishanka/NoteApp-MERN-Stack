import AddEditNotes from "../../components/AddEditNotes";
import NavBar from "../../components/NavBar";
import NoteCard from "../../components/NoteCard";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  // Function to open the modal
  const handleOpenModal = (type = "add", data = null) => {
    setOpenAddEditModal({ isShown: true, type, data });
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setOpenAddEditModal({ isShown: false, type: "add", data: null });
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-4">
          <NoteCard
            title="Meeting on 7th April"
            date="3rd Apr 2024"
            content="Meeting"
            tags="#Meeting"
            isPinned={true}
            onEdit={() =>
              handleOpenModal("edit", {
                /* your note data here */
              })
            } // Trigger modal for edit
            onDelete={() => alert("Note deleted!")} // Add your delete functionality here
            onPinNote={() => alert("Note pinned!")} // Add your pin functionality here
          />
        </div>

        {/* Add Note Button */}
        <button
          className="absolute flex items-center justify-center w-16 h-16 rounded-2xl bg-primary hover:bg-secondary bottom-10 right-10"
          onClick={() => handleOpenModal("add")}>
          <MdAdd className="text-[32px] text-white" />
        </button>

        {/* Modal Component */}
        <Modal
          isOpen={openAddEditModal.isShown}
          onRequestClose={handleCloseModal} // Close modal on overlay click or ESC
          style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
          contentLabel="Add/Edit Note"
          className=" w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll">
          <AddEditNotes
            type={openAddEditModal.type}
            data={openAddEditModal.data}
            onClose={handleCloseModal}
          />
        </Modal>
      </div>
    </>
  );
};

export default Home;
