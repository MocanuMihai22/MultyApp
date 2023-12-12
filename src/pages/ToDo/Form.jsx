import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";

export function Form({ addToDo }) {
  const [newItem, setNewItem] = useState("");

  function handleClick(e) {
    e.preventDefault();
    addToDo(newItem);
    setNewItem("");
  }

  // function handleAddList(e){
  //   e.preventDefault()

  // }

  return (
    <form className="create-todo">
      <textarea
        type="text"
        id="newItem"
        placeholder="Add your todos..."
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
        autoFocus
        autoComplete="off"
      />
      <Fab className="todoBtn1" onClick={handleClick}>
        <AddIcon />
      </Fab>
      {/* <Fab className="todoBtn2" onClick={handleAddList}>
        <FeaturedPlayListIcon />
      </Fab> */}
    </form>
  );
}
