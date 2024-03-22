"use client";
import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import useAuthToken from "../../../hooks/useAuth";
function Model({ setIsModelOpen }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [imageFile, setImageFile] = useState();

  const { getItem } = useAuthToken();
  const { token } = getItem();
  // const token = localStorage?.getItem("innerAuth");
  // const chatid = localStorage?.getItem("chatId");
  async function createPost(e) {
    const notify = toast.loading("creating article...");
    // e.preventDefault();
    if (!title || !description) {
      toast.error("title and description are required", { id: notify });
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", imageFile);

    console.log({
      title: title,
      description: description,
      image: imageFile,
    });

    try {
      const response = await fetch(`http://localhost:5000/api/v1/articles`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          authorization: `Bearer ${token}`,
        },
        body: formData,

        //
      });

      if (response.ok) {
        toast.success("Post created successfully", { id: notify });
        const data = await response.json();
        console.log("Post created:", data);

        setIsModelOpen(false);
        // Optionally, redirect to another page or update UI
      } else {
        toast.error("Failed to create post", { id: notify });
        console.error("Failed to create post");
      }
    } catch (error) {
      toast.error(error, { id: notify });
      console.error("Error creating post:", error);
    }
  }
  return (
    <div className="w-screen h-screen absolute z-[99999]">
      <div className="w-full h-full bg-[rgba(0,0,0,.9)] flex items-center justify-center">
        <div
          className="absolute top-[60px] right-[30px] md:right-[200px] cursor-pointer"
          onClick={() => setIsModelOpen(false)}
        >
          <p className="text-white font-semibold text-3xl">
            <FaTimes className="w-[40px] h-[40px] transition-all duration-1000 ease-in-out border rounded-full p-1" />
          </p>
        </div>
        <div className="bg-white rounded-xl z-[999999] w-[80%] p-4 md:w-[400px] mt-8">
          <form id="postForm w-full px-2 py-2">
            <div className="form-group">
              <label htmlFor="imageUpload">Upload Image:</label>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                // required
                onChange={(e) => {
                  setImageFile(e.target.files[0]);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                required
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                // required
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                required
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
            <button
              id="uploadButton"
              className="px-12 font-semibold"
              onClick={createPost}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Model;
