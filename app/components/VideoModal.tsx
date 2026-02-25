"use client";

import { motion } from "framer-motion";

interface Props {
  video: string;
  open: boolean;
  onClose: () => void;
}

export default function VideoModal({ video, open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="relative w-full max-w-4xl px-6"
      >

        <button
          onClick={onClose}
          className="absolute -top-10 right-6 text-white text-2xl"
        >
          ✕
        </button>

        <video
          src={video}
          controls
          autoPlay
          className="w-full rounded-xl"
        />

      </motion.div>
    </div>
  );
}