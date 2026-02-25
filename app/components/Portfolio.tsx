"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import VideoModal from "./VideoModal";

const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const videos = [
  "/video1.mp4",
  "/video2.mp4",
  "/video3.mp4"
];

export default function Portfolio() {
  const [isOpen, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openVideo = (video: string) => {
    setCurrentVideo(video);
    setOpen(true);
  };

  return (
    <section className="py-28 px-6 bg-black text-white">

      <h2 className="text-4xl text-center font-light mb-20">
        Selected Stories
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {videos.map((video, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl overflow-hidden cursor-pointer border border-white/10"
            onClick={() => openVideo(video)}
          >
            <video
              src={video}
              muted
              loop
              playsInline
              className="w-full h-96 object-cover"
            />
          </motion.div>
        ))}

      </div>

     <VideoModal
  video={currentVideo}
  open={isOpen}
  onClose={() => setOpen(false)}
/>

    </section>
  );
}