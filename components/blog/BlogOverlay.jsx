import Image from "next/image";
import { X } from "lucide-react";

export default function BlogOverlay({ post, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-999 flex justify-center items-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full p-8 relative">

        {/* BACK BUTTON */}
        <button
          onClick={onClose}
          className="mb-6 inline-flex items-center px-6 py-2 rounded-full 
          border border-[#6F512D] text-[#6F512D] font-medium text-sm
          hover:bg-[#6F512D] hover:text-white transition-all duration-300"
        >
          ← Back
        </button>

        {/* IMAGE */}
        <div className="w-full h-72 relative rounded-2xl overflow-hidden mb-6">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{post.title}</h1>

        {/* META */}
        <p className="text-sm text-gray-500 mb-6">
          {post.date} • By <span className="text-[#6F512D]">{post.author}</span>
        </p>

        {/* FULL CONTENT */}
        <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
          {post.fullContent}
        </p>
      </div>
    </div>
  );
}
