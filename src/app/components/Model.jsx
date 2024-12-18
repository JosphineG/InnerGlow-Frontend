"use client";
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import useAuthToken from "../../../hooks/useAuth";

function Model({ setIsModelOpen, handleFetch }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // Will hold HTML content from Quill
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [ReactQuill, setReactQuill] = useState(null); // State for ReactQuill

  const { getItem } = useAuthToken();
  const { token } = getItem();

  // Define modules for ReactQuill
  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
      [{ "code-block": true }],
      ["clean"],
    ],
  };

  useEffect(() => {
    const loadQuill = async () => {
      const [{ default: Quill }, css] = await Promise.all([
        import("react-quill"),
        import("react-quill/dist/quill.snow.css"), // Import CSS for Quill
      ]);
      setReactQuill(() => Quill); // Set ReactQuill in state
    };

    loadQuill();
  }, []);

  async function createPost(e) {
    e.preventDefault();
    const notify = toast.loading("Creating article...");

    if (!imageFile) {
      toast.error("No image selected", { id: notify });
      return;
    }

    if (!title || !description) {
      toast.error("Title and description are required", { id: notify });
      return;
    }

    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("category", category);
    formdata.append("description", description); // Holds Quill HTML content
    formdata.append("image", imageFile);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            authorization: `Bearer ${token}`,
          },
          body: formdata,
        }
      );

      if (response.ok) {
        toast.success("Post created successfully", { id: notify });
        const data = await response.json();
        console.log("Post created:", data);
        await handleFetch();
        setIsModelOpen(false);
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
    <div className="w-screen h-screen absolute z-[99999] overflow-y-scroll">
      <Toaster />
      <div className="w-full h-full bg-[rgba(0,0,60,.9)] flex items-center justify-center">
        <div
          className="absolute top-[60px] right-[30px] lg:right-[200px] cursor-pointer"
          onClick={() => setIsModelOpen(false)}
        >
          <p className="text-white font-semibold text-3xl">
            <FaTimes className="w-[40px] h-[40px] transition-all duration-1000 ease-in-out border rounded-full p-1" />
          </p>
        </div>
        <div className="bg-white rounded-xl z-[999999] w-[95%] overflow-y-auto p-4 lg:w-[50%] mt-8 h-[90%]">
          <form id="postForm" className="w-full px-2 py-2 gap-8 space-y-6">
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
                className="mt-1 block w-full rounded-lg border-gray-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 font-bold border-2"
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
                className="mt-1 block w-full rounded-lg border-gray-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-2 py-2 border-2"
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
                className="py-2 px-2 mt-1 block w-full rounded-lg border-gray-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 border-2"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description" className="block font-bold">
                Description:
              </label>
              {/* Use ReactQuill if it's loaded */}
              {ReactQuill ? (
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={setDescription}
                  className="mt-1 block w-full rounded-lg border-gray-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  modules={quillModules} // Apply the modules to ReactQuill
                />
              ) : (
                <p>Loading editor...</p> // Fallback while loading
              )}
            </div>
            <button
              type="submit"
              id="uploadButton"
              onClick={createPost}
              className="mt-4 inline-flex items-center px-12 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
