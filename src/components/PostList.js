import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const PostList = () => {
  const notes = useSelector((store) => store.notlar);

  const sortedNotes = notes.sort((a, b) => new Date(b.date) - new Date(a.date));

  return sortedNotes.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div className="flex flex-col">
      {sortedNotes.map((not) => (
        <Post item={not} key={not.id} />
      ))}
    </div>
  );
};

export default PostList;
