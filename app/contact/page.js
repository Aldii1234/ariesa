"use client";

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comments, setComments] = useState([]);

  // Load comments from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("contactComments");
    if (stored) setComments(JSON.parse(stored));
  }, []);

  // Save comment to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { name, message, rating, date: new Date().toLocaleString() };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem("contactComments", JSON.stringify(updatedComments));
    setName("");
    setMessage("");
    setRating(0);
  };

  // Calculate average rating
  const calculateAverageRating = () => {
    if (comments.length === 0) return 0;
    const totalRating = comments.reduce((acc, comment) => acc + comment.rating, 0);
    return (totalRating / comments.length).toFixed(1); // Round to one decimal point
  };

  const averageRating = calculateAverageRating();

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-center mb-6">Kontak</h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
          Anda dapat menghubungi saya melalui email di:
        </p>
        <p className="text-center font-semibold text-indigo-600 mb-8">
          example@email.com
        </p>

        {/* Average Rating Display */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold">Rata-rata Rating: </h2>
          <div className="flex justify-center items-center text-yellow-400 text-2xl mb-2">
            {[...Array(Math.round(averageRating))].map((_, index) => (
              <FaStar key={index} />
            ))}
            {averageRating > 0 && (
              <span className="ml-2 text-gray-700 dark:text-gray-300">{averageRating} / 5</span>
            )}
          </div>
        </div>

        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          />
          <textarea
            placeholder="Tulis pesan atau komentar..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md h-28 resize-none dark:bg-gray-700 dark:border-gray-600"
          />

          {/* Rating Stars */}
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer text-2xl ${
                  (hover || rating) >= star ? "text-yellow-400" : "text-gray-400"
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              />
            ))}
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Kirim Komentar
          </button>
        </form>

        {/* Stored Comments */}
        {comments.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Komentar Pengunjung</h2>
            <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
              {comments.map((c, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow-sm"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold">{c.name}</span>
                    <span className="text-sm text-gray-500">{c.date}</span>
                  </div>
                  <p className="text-sm mb-2">{c.message}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(c.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
