import { useState } from "react";
import Modal from "./Modal";

function CreateForm({ addTodo }) {
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      setShowModal(true);
      return;
    }
    addTodo(content);
    setContent("");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="輸入待辦事項"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit">加入</button>
      </form>
      {showModal && <Modal message="請輸入待辦事項！" onClose={closeModal} />}
    </div>
  );
}
export default CreateForm;
