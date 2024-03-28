"use client";
import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import useAuthToken from "../../../hooks/useAuth";
function Model({ setIsModelOpen }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const { getItem } = useAuthToken();
  const { token } = getItem();

  async function createPost(e) {
    e.preventDefault();
    const notify = toast.loading("Creating article...");
    if (!imageFile) {
      toast.error("No image selected File", { id: notify });
      return;
    }
    if (!title || !description) {
      toast.error("Title and description are required", { id: notify });
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", imageFile);

    try {
      const response = await fetch(`http://localhost:5000/api/v1/articles`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        toast.success("Post created successfully", { id: notify });
        const data = await response.json();
        console.log("Post created:", data);
        // fetchChatMessages();
        setIsModelOpen(false);
        window.location.reload();
      } else {
        toast.error("Failed to create post", { id: notify });
        console.error("Failed to create post");
      }
    } catch (error) {
      toast.error(error.message, { id: notify });
      console.error("Error creating post:", error);
    }
  }

  return (
    <div className="w-screen h-screen absolute z-[99999]">
      <Toaster />
      <div className="w-full h-full bg-[rgba(0,0,60,.9)] flex items-center justify-center">
        <div
          className="absolute top-[60px] right-[30px] md:right-[200px] cursor-pointer"
          onClick={() => setIsModelOpen(false)}
        >
          <p className="text-white font-semibold text-3xl">
            <FaTimes className="w-[40px] h-[40px] transition-all duration-1000 ease-in-out border rounded-full p-1" />
          </p>
        </div>
        <div className="bg-white rounded-xl z-[999999] w-[80%] p-4 md:w-[400px] mt-8">
          <form id="postForm" className="w-full px-2 py-2">
            <div className="form-group">
              <label htmlFor="imageUpload" className="block font-bold">
                Upload Image:
              </label>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                required
                onChange={(e) => {
                  setImageFile(e.target.files[0]);
                }}
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-bold border-2"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title" className="block font-bold">
                Title:
              </label>
              <input
                type="text"
                id="title"
                required
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-2 py-2 border-2"
              />
            </div>
            <div className="form-group">
              <label htmlFor="category" className="block font-semibold">
                Category:
              </label>
              <input
                type="text"
                id="category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="py-2 px-2 mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 border-2"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description" className="block font-bold">
                Description:
              </label>
              <textarea
                id="description"
                required
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 border-2"
              ></textarea>
            </div>
            <button
              type="submit"
              id="uploadButton"
              onClick={createPost}
              className="mt-4 inline-flex items-center px-12 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Article
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Model;
