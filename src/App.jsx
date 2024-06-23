import "./App.css";
import { useState } from "react";
import { motion } from "framer-motion";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ReactPlayer from "react-player/file";

import linkedIn from "/icon-linked-in.png";
import introPhoto from "/brett-photo.jpg";
import brettLogo from "/brett-holcomb.svg";

import playButtonOverlay from "/play-button-overlay.svg";
import thumbSystems from "/thumb-systems.png";
import thumbLemur from "/thumb-lemur.png";
import thumbShaders from "/thumb-shaders.png";
import thumbMoreMotion from "/thumb-more-motion.png";

import qbalVideo from "/quickbooks-animation-library.mp4";
import lemurVideo from "/lemur-abridged.mp4";
import shadersVideo from "/hummingbird-abridged.mp4";
import moreMotionVideo from "/more-intuit-motion.mp4";

const videos = {
  qbal: qbalVideo,
  lemur: lemurVideo,
  shaders: shadersVideo,
  moreMotion: moreMotionVideo,
};

const WavePath = () => (
  <motion.path
    animate={{ rotate: -7.5 }}
    transition={{
      duration: 200 / 48,
      ease: "linear",
      repeat: Infinity,
    }}
    id="wave-3"
    fill="#864775"
    d="M681.2 93.6a462.9 462.9 0 0 1 237.6 0l179.8 47.7a462.9 462.9 0 0 0 178.2 11.7l184.5-23.9c79.8-10.3 161 .4 235.5 31l172 70.8a462.8 462.8 0 0 0 175.2 34.9l186 .4c80.5.2 159.7 21.3 229.5 61.5l161.3 92.6a462.7 462.7 0 0 0 169.1 57.4l184.4 24.7a462.9 462.9 0 0 1 219.5 91l147.8 112.8a462.7 462.7 0 0 0 160.2 79l179.5 48.6c77.8 21 148.7 62 205.8 118.8l131.8 131.2c42.6 42.4 93 76.1 148.5 99.2l171.7 71.6a462.9 462.9 0 0 1 188.5 144.6l113.6 147.3a462.7 462.7 0 0 0 134.2 117.8l161 93.4a462.9 462.9 0 0 1 168 168l93.3 160.9c30.2 52 70.2 97.5 117.8 134.2l147.3 113.6a462.9 462.9 0 0 1 144.6 188.5l71.6 171.7a462.9 462.9 0 0 0 99.2 148.5l131.2 131.8c56.9 57 97.8 128 118.8 205.8l48.6 179.5a462.6 462.6 0 0 0 79 160.2l112.9 147.8a462.8 462.8 0 0 1 90.9 219.5l24.7 184.4c8 59.6 27.4 117 57.4 169.1l92.6 161.3a463 463 0 0 1 61.5 229.5l.4 186c.2 60.1 12 119.6 34.9 175.2l70.8 172a462.8 462.8 0 0 1 31 235.6l-23.9 184.4a463 463 0 0 0 11.7 178.2l47.8 179.8a463 463 0 0 1 0 237.6l-47.8 179.8a463 463 0 0 0-11.7 178.2l23.9 184.4c10.3 80-.4 161.1-31 235.6l-70.8 172a462.9 462.9 0 0 0-34.9 175.2l-.4 186a463 463 0 0 1-61.5 229.5l-92.6 161.3a462.9 462.9 0 0 0-57.4 169.1l-24.7 184.4a462.8 462.8 0 0 1-91 219.5l-112.8 147.8a462.6 462.6 0 0 0-79 160.2l-48.6 179.5c-21 77.8-62 148.7-118.8 205.8L5778.2 9281a462.9 462.9 0 0 0-99.2 148.5l-71.6 171.7a462.9 462.9 0 0 1-144.6 188.5l-147.4 113.6a463 463 0 0 0-117.7 134.2l-93.4 160.9a462.4 462.4 0 0 1-168 168l-160.9 93.4a464.6 464.6 0 0 0-134.2 117.7l-113.6 147.4a462.8 462.8 0 0 1-188.5 144.6l-171.7 71.6a462.5 462.5 0 0 0-148.5 99.2l-131.8 131.2a462 462 0 0 1-205.8 118.8l-179.5 48.6a462.7 462.7 0 0 0-160.2 79l-147.8 112.9a462.9 462.9 0 0 1-219.5 90.9l-184.4 24.7c-59.6 8-117 27.5-169.1 57.4l-161.3 92.6a462.3 462.3 0 0 1-229.5 61.5l-186 .4c-60.1.2-119.6 12-175.2 34.9l-172 70.8a464 464 0 0 1-235.5 31l-184.5-23.9a463.6 463.6 0 0 0-178.2 11.7l-179.8 47.7a462.4 462.4 0 0 1-237.6 0l-179.8-47.7a463.6 463.6 0 0 0-178.2-11.7l-184.4 23.9a464 464 0 0 1-235.6-31l-172-70.8a463.7 463.7 0 0 0-175.2-34.9l-186-.4a462.3 462.3 0 0 1-229.5-61.5l-161.3-92.6a463.8 463.8 0 0 0-169.1-57.4l-184.4-24.7a462.9 462.9 0 0 1-219.5-90.9l-147.8-112.9a462.7 462.7 0 0 0-160.2-79l-179.5-48.6a462 462 0 0 1-205.8-118.8l-131.8-131.2a462.5 462.5 0 0 0-148.5-99.2l-171.7-71.6a462.8 462.8 0 0 1-188.5-144.6l-113.6-147.4a464.7 464.7 0 0 0-134.2-117.7l-161-93.4a462.4 462.4 0 0 1-168-168l-93.3-160.9a463 463 0 0 0-117.8-134.2l-147.3-113.6a462.9 462.9 0 0 1-144.6-188.5l-71.6-171.7a462.9 462.9 0 0 0-99.2-148.5l-131.2-131.8c-56.9-57-97.8-128-118.8-205.8l-48.6-179.5a462.6 462.6 0 0 0-79-160.2l-112.9-147.8a462.8 462.8 0 0 1-90.9-219.5l-24.7-184.4c-8-59.6-27.4-117-57.4-169.1l-92.6-161.3a463 463 0 0 1-61.5-229.5l-.4-186c-.2-60.1-12-119.6-34.9-175.2l-70.8-172a462.8 462.8 0 0 1-31-235.6l23.9-184.4a463 463 0 0 0-11.7-178.2l-47.8-179.8a463 463 0 0 1 0-237.6l47.8-179.8a463 463 0 0 0 11.7-178.2l-23.9-184.4c-10.3-80 .4-161.1 31-235.6l70.8-172a462.9 462.9 0 0 0 34.9-175.2l.4-186a463 463 0 0 1 61.5-229.5l92.6-161.3a462.7 462.7 0 0 0 57.4-169.1l24.7-184.4a462.8 462.8 0 0 1 91-219.5l112.8-147.8a462.6 462.6 0 0 0 79-160.2l48.6-179.5c21-77.8 62-148.7 118.8-205.8l131.2-131.8c42.4-42.6 76.1-93 99.2-148.5l71.6-171.7a462.9 462.9 0 0 1 144.6-188.5l147.4-113.6a462.7 462.7 0 0 0 117.7-134.2l93.4-161a462.9 462.9 0 0 1 168-168l160.9-93.3c52-30.2 97.5-70.1 134.2-117.8l113.6-147.3a462.9 462.9 0 0 1 188.5-144.6l171.7-71.6a462.9 462.9 0 0 0 148.5-99.2l131.8-131.2c57-56.9 128-97.8 205.8-118.8l179.5-48.6a462.7 462.7 0 0 0 160.2-79l147.8-112.9a462.9 462.9 0 0 1 219.5-90.9l184.4-24.7c59.6-8 117-27.5 169.1-57.4l161.3-92.6A462.9 462.9 0 0 1-630 266.2l186-.4c60.1-.2 119.6-12 175.2-34.9l172-70.8a462.9 462.9 0 0 1 235.6-31L323.2 153a462.9 462.9 0 0 0 178.2-11.7l179.8-47.7Z"
  />
);

function App() {
  const [openModal, setOpenModal] = useState("");

  const letters = ["M", "o", "t", "i", "o", "n"];

  return (
    <>
      <div className="hero">
        <div className="logo">
          <img src={brettLogo} alt="Brett Holcomb" />
        </div>

        <div className="linked-in">
          <a
            href="https://www.linkedin.com/in/brettholcomb/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} alt="LinkedIn" />
          </a>
        </div>

        <div id="text-ux">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5, y: 200, x: 100, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0, rotate: 0 }}
            transition={{
              delay: 0.5,
              type: "spring",
              duration: 3,
              bounce: 0.3,
            }}
          >
            UX
          </motion.h1>
        </div>
        <div id="text-code">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5, y: 200, x: 100, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0, rotate: 0 }}
            transition={{
              delay: 1,
              type: "spring",
              duration: 3,
              bounce: 0.3,
            }}
          >
            Code
          </motion.h1>
        </div>
        <div id="text-motion">
          <h1>
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 140, x: 0 }}
                animate={{ y: 0, x: 0 }}
                transition={{
                  delay: 1.75 + index * 0.15,
                  type: "spring",
                  duration: 2.25 + index * 0.15,
                  bounce: 0.6 - index * 0.015,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1600"
          height="200"
          fill="none"
          id="back-waves"
          className="wave"
        >
          <g clipPath="url(#a)">
            <path
              id="wave-1"
              fill="#EF8C69"
              d="M651.8 30a462.9 462.9 0 0 1 296.4 0l255 86.2a462.9 462.9 0 0 0 218 19.1l266-40.6a462.9 462.9 0 0 1 291.9 51.5l236.2 129.1a462.9 462.9 0 0 0 211.3 56.7l269.2 6.2a462.9 462.9 0 0 1 278.4 101.4l210.2 168.2a462.9 462.9 0 0 0 198.3 92.4l264 53c99.4 19.9 189.6 71.9 256.6 148l177.8 202.2a462.8 462.8 0 0 0 179.2 125.5l250.8 98a462.8 462.8 0 0 1 227 190.4l140 230a462.8 462.8 0 0 0 154.6 154.7l230 140a462.8 462.8 0 0 1 190.4 227l98 250.7c26.9 69 70 130.4 125.5 179.2l202.1 177.8a462.8 462.8 0 0 1 148.2 256.6l52.9 264a463 463 0 0 0 92.4 198.3l168.3 210.2c63.3 79.2 99 177 101.3 278.4l6.3 269.2a463 463 0 0 0 56.6 211.3l129.1 236.2a462.9 462.9 0 0 1 51.5 291.8l-40.6 266.2a462.9 462.9 0 0 0 19 217.9l86.3 255a463 463 0 0 1 0 296.3l-86.2 255.1a462.9 462.9 0 0 0-19.1 218l40.6 266a462.9 462.9 0 0 1-51.5 291.9l-129.1 236.2a463 463 0 0 0-56.6 211.3l-6.3 269.2a462.9 462.9 0 0 1-101.4 278.4l-168.2 210.2a463 463 0 0 0-92.4 198.3l-53 264c-19.9 99.4-71.9 189.6-148 256.6L5676.5 9261a462.9 462.9 0 0 0-125.5 179.2l-98 250.8a462.8 462.8 0 0 1-190.4 227l-230 139.9a463 463 0 0 0-154.7 154.7l-140 230a463.1 463.1 0 0 1-227 190.5l-250.7 97.9a462.2 462.2 0 0 0-179.2 125.5l-177.8 202.1a463.1 463.1 0 0 1-256.6 148.2l-264 52.9a462.5 462.5 0 0 0-198.3 92.4l-210.2 168.2a463 463 0 0 1-278.4 101.4l-269.2 6.2a463.8 463.8 0 0 0-211.3 56.7l-236.2 129.1a462.6 462.6 0 0 1-291.8 51.5l-266.2-40.6a463.1 463.1 0 0 0-217.9 19.1l-255 86.1a462.4 462.4 0 0 1-296.4 0l-255-86.1a463.1 463.1 0 0 0-218-19.1l-266 40.6a462.6 462.6 0 0 1-291.9-51.5l-236.2-129.1a463.7 463.7 0 0 0-211.3-56.7l-269.2-6.2a463 463 0 0 1-278.4-101.4l-210.2-168.2a462.5 462.5 0 0 0-198.3-92.4l-264-52.9c-99.4-20-189.6-72-256.6-148.2l-177.8-202.1a462.2 462.2 0 0 0-179.2-125.5l-250.8-97.9a463.1 463.1 0 0 1-227-190.5l-140-230a463 463 0 0 0-154.6-154.7l-230-140a462.8 462.8 0 0 1-190.5-227l-97.9-250.7c-26.9-69-70-130.4-125.5-179.2l-202.1-177.8a462.8 462.8 0 0 1-148.2-256.6l-52.9-264a463 463 0 0 0-92.4-198.3l-168.3-210.2c-63.3-79.2-99-177-101.3-278.4l-6.3-269.2a463 463 0 0 0-56.6-211.3l-129.1-236.2a462.9 462.9 0 0 1-51.5-291.8l40.6-266.2a462.9 462.9 0 0 0-19-217.9l-86.3-255a463 463 0 0 1 0-296.3l86.2-255.1a462.9 462.9 0 0 0 19.1-218l-40.6-266a462.9 462.9 0 0 1 51.5-291.9l129.1-236.2a463 463 0 0 0 56.6-211.3l6.3-269.2a462.9 462.9 0 0 1 101.4-278.4l168.2-210.2a463 463 0 0 0 92.4-198.3l53-264c19.9-99.4 71.9-189.6 148-256.6l202.2-177.8a462.9 462.9 0 0 0 125.5-179.2l98-250.8a462.8 462.8 0 0 1 190.4-227l230-140a462.8 462.8 0 0 0 154.7-154.6l140-230a462.8 462.8 0 0 1 227-190.5l250.7-97.9c69-26.9 130.4-70 179.2-125.5l177.8-202.1A462.9 462.9 0 0 1-2046.7 753l264-52.9a462.9 462.9 0 0 0 198.3-92.4l210.2-168.2c79.2-63.4 177-99 278.4-101.4l269.2-6.2c74-1.8 146.4-21.2 211.3-56.7l236.2-129.1A462.9 462.9 0 0 1-87.3 94.7L179 135.3a462.9 462.9 0 0 0 217.9-19l255-86.2Z"
            />
            <path
              id="wave-2"
              fill="#D84E88"
              d="M662.7 62.6a462.9 462.9 0 0 1 274.6 0l200.4 62.2a462.9 462.9 0 0 0 207 15.6l207.5-31.7c92.5-14.1 187.2.1 271.4 41l189 91.3a462.8 462.8 0 0 0 202.4 46.2l209.8-.4c93.6-.1 185 28 262.3 81l173.2 118.5a462.8 462.8 0 0 0 193.3 75.8l207.6 31a462.9 462.9 0 0 1 247.3 119l153.5 143A463 463 0 0 0 3842 959l200.6 61.5a462.9 462.9 0 0 1 226.8 154.6l130.5 164.3a462.9 462.9 0 0 0 162.4 129.5l189.2 90.7a462.8 462.8 0 0 1 201.3 186.7l104.5 182a462.9 462.9 0 0 0 141.3 152.1l173.6 118a462.9 462.9 0 0 1 171.1 214.5l76.3 195.5a463 463 0 0 0 117 171.6l154.1 142.4a462.9 462.9 0 0 1 137.3 237.8l46.3 204.6a463 463 0 0 0 90 187.1l131.2 163.9a462.8 462.8 0 0 1 100.3 255.5l15.3 209.3c5.1 69.9 26 137.8 61.2 198.4l105.3 181.5c47 81 68.2 174.3 61 267.7l-16 209.2c-5.4 69.9 5.2 140.1 31 205.4l77 195.1a462.9 462.9 0 0 1 20.5 273.8l-47 204.5a462.6 462.6 0 0 0 0 207.6l47 204.5a462.8 462.8 0 0 1-20.5 273.8l-77 195.1a462.9 462.9 0 0 0-31 205.4l16 209.2a462.8 462.8 0 0 1-61 267.7L6472.2 7661a462.8 462.8 0 0 0-61.2 198.4l-15.3 209.3a462.8 462.8 0 0 1-100.3 255.5L6164.3 8488a463 463 0 0 0-90.1 187.2l-46.3 204.6a462.9 462.9 0 0 1-137.3 237.8l-154 142.4a463 463 0 0 0-117 171.6l-76.4 195.4c-34 87.3-93.7 162-171.1 214.7l-173.6 117.9a462.8 462.8 0 0 0-141.3 152.2l-104.5 181.9a462.2 462.2 0 0 1-201.3 186.7l-189.2 90.7a463 463 0 0 0-162.4 129.5l-130.5 164.3a462.6 462.6 0 0 1-226.8 154.6l-200.6 61.5a463.7 463.7 0 0 0-179.9 103.9l-153.5 143a463 463 0 0 1-247.3 119.1l-207.6 30.9a462.5 462.5 0 0 0-193.3 75.8l-173.2 118.6a464 464 0 0 1-262.3 80.9l-209.8-.4a461 461 0 0 0-202.5 46.2l-188.9 91.4c-84.2 40.8-178.9 55-271.4 40.9l-207.5-31.7a464 464 0 0 0-207 15.6l-200.4 62.2a463.8 463.8 0 0 1-274.6 0l-200.4-62.2a464 464 0 0 0-207-15.6l-207.5 31.7a462.8 462.8 0 0 1-271.4-40.9l-189-91.4a461 461 0 0 0-202.4-46.2l-209.8.4a464 464 0 0 1-262.3-80.9l-173.2-118.6a462.5 462.5 0 0 0-193.3-75.8l-207.6-30.9a463 463 0 0 1-247.3-119.1l-153.5-143A463.7 463.7 0 0 0-2242 11081l-200.6-61.5a462.6 462.6 0 0 1-226.8-154.6l-130.5-164.3a463 463 0 0 0-162.4-129.5l-189.2-90.7a462.2 462.2 0 0 1-201.3-186.7l-104.5-181.9a462.8 462.8 0 0 0-141.3-152.2l-173.6-118a462.9 462.9 0 0 1-171.2-214.6l-76.2-195.4a463 463 0 0 0-117-171.6l-154.1-142.4a462.9 462.9 0 0 1-137.3-237.8l-46.3-204.6a463 463 0 0 0-90-187.2l-131.2-163.8a462.7 462.7 0 0 1-100.3-255.5l-15.3-209.3c-5.1-69.9-26-137.8-61.2-198.4l-105.3-181.5c-47-81-68.2-174.3-61-267.7l16-209.2c5.4-69.9-5.2-140.1-31-205.4l-77-195.1a462.9 462.9 0 0 1-20.5-273.8l47-204.5a462.6 462.6 0 0 0 0-207.6l-47-204.5a462.8 462.8 0 0 1 20.5-273.8l77-195.1a462.9 462.9 0 0 0 31-205.4l-16-209.2a462.8 462.8 0 0 1 61-267.7l105.3-181.5a462.8 462.8 0 0 0 61.2-198.4l15.3-209.3a462.7 462.7 0 0 1 100.3-255.5l131.1-163.9a463 463 0 0 0 90.1-187l46.3-204.7a462.9 462.9 0 0 1 137.3-237.8l154-142.4a463 463 0 0 0 117-171.6l76.3-195.5c34-87.2 93.8-162 171.2-214.6l173.6-117.9a462.8 462.8 0 0 0 141.3-152.2l104.5-182a462.8 462.8 0 0 1 201.3-186.6l189.2-90.7a462.9 462.9 0 0 0 162.4-129.5l130.5-164.3a462.9 462.9 0 0 1 226.8-154.6l200.6-61.5A463 463 0 0 0-2062 855l153.5-143a462.9 462.9 0 0 1 247.3-119l207.6-31a462.8 462.8 0 0 0 193.3-75.8l173.2-118.6a462.9 462.9 0 0 1 262.3-80.9l209.8.4c70.1.2 139.4-15.6 202.5-46.2l188.9-91.4c84.2-40.8 178.9-55 271.4-40.9l207.5 31.7a462.8 462.8 0 0 0 207-15.6l200.4-62.2Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h1600v200H0z" />
            </clipPath>
          </defs>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1600"
          height="200"
          fill="none"
          id="front-wave"
          className="wave"
        >
          <g clipPath="url(#a)">
            <WavePath />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h1600v200H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="intro">
        <div className="grid">
          <div className="intro-content">
            <h2>A Short Introduction</h2>
            <ul>
              <li>
                I started my career working on UnrealEngine and I&apos;m at my
                best tackling creative technical challenges
              </li>
              <li>
                I have a Masters of HCI from Carnegie Mellon and 13 years
                combined experience as a Designer and UX Engineer
              </li>
              <li>
                I led the Motion Design + UX Engineering team for TurboTax,
                before moving on to Roku to work on TV experiences
              </li>
            </ul>
          </div>
          <div className="intro-photo">
            <img src={introPhoto} alt="photo of Brett" />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1600"
          height="100"
          fill="none"
          style={{ position: "absolute", top: "100%" }}
        >
          <g clipPath="url(#a)">
            <mask
              id="b"
              width="1600"
              height="110"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <path fill="#fff" d="M0 109.2h1600V0H0v109.2Z" />
            </mask>
            <g mask="url(#b)">
              <path
                fill="#EF8C69"
                d="M1142.71 84.16c-94.91 19.55-198.95 21.54-296.12 5.65L588.66 47.65C517.81 36.07 442.9 33.92 370.22 41.4L105.64 68.6C5.95 78.87-97.14 70.96-187.78 46.1l-240.6-65.98C-494.48-38-567.56-47.22-641.52-46.75l-269.21 1.72c-101.43.64-200.44-16.92-281.81-50l-215.95-87.78c-59.33-24.11-128.37-40.11-201.36-46.66l-265.67-23.84c-100.09-8.98-192.01-35.66-261.62-75.95l-184.76-106.92c-50.75-29.37-113.66-51.68-183.45-65.05l-254.05-48.66c-95.72-18.33-177.76-53.33-233.5-99.6l-147.94-122.81c-40.64-33.74-95.5-61.67-159.98-81.45l-234.72-72.01c-88.43-27.13-158.09-69.38-198.26-120.23l-106.64-134.97c-29.29-37.08-74.43-69.79-131.64-95.38l-208.25-93.17c-78.46-35.1-133.63-83.31-157.02-137.19l-62.08-143.04c-17.06-39.29-51.11-75.78-99.31-106.41l-175.45-111.5c-66.11-42.01-105.11-94.7-111-150l-15.65-146.74c-4.3-40.31-26.23-79.48-63.96-114.21l-137.32-126.44c-51.74-47.63-73.39-103.23-61.61-158.24l31.26-146c8.59-40.11-.55-80.76-26.65-118.54l-95.03-137.54c-35.8-51.82-39.44-108.62-10.34-161.67l77.22-140.83c21.22-38.68 25.14-79.58 11.45-119.26l-49.84-144.45c-18.78-54.43-4.29-110.72 41.24-160.21l120.84-131.36c33.19-36.08 50.07-75.99 49.2-116.37l-3.14-146.98c-1.18-55.38 30.99-109.44 91.57-153.86l160.78-117.91c44.17-32.39 73.48-70.08 85.47-109.93l43.66-145.05c16.45-54.65 65.32-104.84 139.1-142.84l195.84-100.88c53.8-27.71 94.66-62.05 119.14-100.16l89.13-138.7c33.58-52.26 97.67-97.05 182.42-127.49l224.95-80.77c61.79-22.19 112.95-52.14 149.18-87.34l131.89-128.13c49.69-48.32 127.06-86.32 220.2-108.27l247.22-58.2c67.91-16 127.82-40.68 174.69-71.91l170.65-113.67c64.29-42.86 152.58-73 251.28-85.72l261.98-33.9c71.97-9.34 138.8-27.9 194.9-54.22l204.21-95.82c76.95-36.09 173.47-57.38 274.74-60.6l268.78-8.52c73.83-2.35 145.56-14.36 209.18-34.94l231.58-74.96c87.25-28.29 189.08-40.08 289.83-33.64l267.42 17.04c73.46 4.69 147.9-.28 217.1-14.53l251.92-51.92c94.9-19.54 198.95-21.51 296.12-5.62l257.93 42.15c70.85 11.57 145.76 13.76 218.44 6.28l264.58-27.25c99.68-10.21 202.78-2.29 293.42 22.55l240.6 65.96c66.09 18.12 139.18 27.35 213.14 26.86l269.21-1.69c101.43-.66 200.44 16.92 281.81 49.95l215.95 87.8c59.33 24.13 128.37 40.12 201.36 46.68l265.67 23.86c100.09 8.95 192.01 35.65 261.62 75.94l184.76 106.9c50.75 29.38 113.66 51.71 183.45 65.03l254.05 48.7c95.72 18.29 177.76 53.29 233.5 99.59l147.94 122.79c40.64 33.74 95.5 61.69 159.98 81.46l234.72 72.02c88.43 27.13 158.09 69.37 198.27 120.22l106.63 134.98c29.29 37.07 74.43 69.78 131.64 95.37l208.25 93.17c78.46 35.11 133.63 83.31 157.02 137.2l62.08 143.03c17.06 39.3 51.11 75.78 99.31 106.41l175.45 111.5c66.11 42.01 105.11 94.71 111 150l15.65 146.75c4.3 40.31 26.23 79.47 63.96 114.21l137.32 126.43c51.74 47.64 73.39 103.24 61.61 158.24l-31.26 146.01c-8.59 40.11.55 80.75 26.65 118.54l95.03 137.53c35.8 51.82 39.44 108.62 10.34 161.68l-77.22 140.82c-21.22 38.68-25.14 79.58-11.45 119.26l49.84 144.46c18.78 54.42 4.29 110.71-41.24 160.2L6537.58-2496c-33.19 36.09-50.06 75.99-49.2 116.37l3.14 146.98c1.18 55.38-30.99 109.44-91.57 153.87l-160.78 117.9c-44.17 32.39-73.47 70.09-85.47 109.94l-43.66 145.05c-16.44 54.64-65.32 104.83-139.1 142.84l-195.84 100.87c-53.8 27.71-94.65 62.06-119.14 100.16l-89.13 138.71c-33.58 52.26-97.67 97.05-182.42 127.48l-224.95 80.77c-61.79 22.2-112.95 52.14-149.18 87.35l-131.89 128.15c-49.69 48.28-127.06 86.31-220.2 108.25l-247.22 58.22c-67.91 15.99-127.82 40.64-174.69 71.87l-170.65 113.7c-64.29 42.84-152.58 72.96-251.28 85.73l-261.98 33.9c-71.97 9.3-138.8 27.9-194.9 54.22l-204.22 95.79c-76.94 36.09-173.46 57.38-274.73 60.6l-268.78 8.55c-73.83 2.34-145.56 14.32-209.18 34.91L2168.98 1.16c-87.25 28.25-189.08 40.07-289.83 33.64l-267.42-17.07c-73.46-4.7-147.91.3-217.11 14.55l-251.91 51.88Z"
              />
              <path
                fill="#D84E88"
                d="M1028.21 67.74c-88.9 16-184.6 16.92-274.48 2.62L552.3 38.3c-67.32-10.71-138.22-12.94-207.34-6.5L138.1 51.06c-92.28 8.6-187.16 1.7-272.13-19.75l-190.44-48.09c-63.65-16.07-133.14-24.04-203.25-23.3l-209.8 2.22c-93.59.98-185.53-13.55-263.68-41.68l-175.19-63.05c-58.55-21.07-125.1-34.6-194.62-39.57l-208.06-14.89c-92.81-6.64-179.76-28.49-249.37-62.66l-156.02-76.6c-52.14-25.6-114.25-44.4-181.64-54.98l-201.66-31.64c-89.97-14.12-169.98-42.8-229.48-82.26l-133.37-88.45c-44.57-29.55-100.85-53.2-164.61-69.13l-190.77-47.7c-85.11-21.29-156.4-56.16-204.46-100.02l-107.74-98.3c-36-32.86-85.2-60.82-143.89-81.77l-175.62-62.69c-78.35-27.97-139.33-68.25-174.88-115.53l-79.69-105.98c-26.64-35.42-67.66-67.07-119.97-92.56l-156.55-76.28c-69.84-34.03-119.13-78.83-141.38-128.47l-49.88-111.28c-16.66-37.19-48.59-71.83-93.36-101.29l-133.97-88.17c-59.77-39.33-96.29-87.64-104.74-138.54l-18.93-114.1c-6.33-38.13-28.45-74.97-64.67-107.75l-108.41-98.09c-48.36-43.76-71.29-94.49-65.75-145.51l12.42-114.36c4.15-38.22-7.66-76.45-34.53-111.82l-80.42-105.81c-35.88-47.21-44.7-99.24-25.29-149.24l43.5-112.08c14.53-37.45 13.29-76.21-3.63-113.37l-50.63-111.18c-22.59-49.59-17.11-101.77 15.73-149.63l73.61-107.28c24.6-35.85 33.95-74.29 27.36-112.4l-19.72-114.06c-8.8-50.87 10.87-102.02 56.41-146.68l102.07-100.09c34.11-33.45 53.85-70.69 57.74-108.92l11.64-114.39c5.19-51.02 38.59-100 95.81-140.45l128.26-90.67c42.86-30.29 72.55-65.52 86.83-103l42.73-112.16c19.06-50.04 65.46-95.75 133.08-131.09l151.58-79.22c50.65-26.47 89.62-58.89 113.98-94.78l72.87-107.44c32.51-47.93 90.87-89.35 167.38-118.79l171.51-66c57.31-22.06 104.7-50.94 138.58-84.45l101.38-100.32c45.23-44.71 114.25-80.97 197.95-103.84l187.61-51.32c62.69-17.15 117.43-41.83 160.08-72.24l127.64-90.9c56.94-40.57 135.07-70.76 224.08-86.59l199.52-35.49c66.67-11.85 127.54-31.78 178.01-58.37l151.03-79.55c67.38-35.48 152.88-58.96 245.22-67.37l206.97-18.84c69.17-6.27 134.81-21.07 191.97-43.24l171.06-66.39c76.31-29.59 167.26-45.86 260.86-46.62l209.8-1.81c70.12-.6 139.07-9.88 201.64-27.13l187.26-51.7c83.54-23.1 177.92-31.78 270.7-24.96l207.94 15.35c69.5 5.07 140.2 1.52 206.8-10.49l199.27-35.87c88.9-15.99 184.6-16.92 274.48-2.62l201.45 32.05c67.31 10.76 138.21 12.94 207.33 6.55l206.85-19.27c92.28-8.63 187.16-1.75 272.12 19.71l190.45 48.1c63.64 16.11 133.14 24.08 203.24 23.31l209.8-2.24c93.59-.98 185.53 13.6 263.69 41.72l175.19 63.06c58.54 21.07 125.09 34.56 194.62 39.53l208.05 14.9c92.82 6.66 179.76 28.5 249.37 62.68l156.02 76.6c52.14 25.61 114.25 44.39 181.64 54.98l201.67 31.61c89.97 14.14 169.98 42.81 229.48 82.28l133.37 88.45c44.56 29.54 100.85 53.18 164.6 69.12l190.78 47.72c85.11 21.29 156.39 56.12 204.46 100.02l107.73 98.29c36 32.85 85.21 60.81 143.89 81.76l175.63 62.7c78.35 27.97 139.32 68.25 174.87 115.53l79.7 105.98c26.63 35.41 67.65 67.06 119.96 92.55l156.55 76.29c69.84 34.03 119.14 78.83 141.39 128.47l49.87 111.28c16.67 37.19 48.59 71.82 93.36 101.28l133.97 88.18c59.77 39.33 96.29 87.64 104.74 138.54l18.94 114.09c6.33 38.13 28.44 74.98 64.67 107.76l108.4 98.08c48.37 43.76 71.29 94.5 65.75 145.52l-12.42 114.36c-4.15 38.22 7.66 76.45 34.54 111.81l80.42 105.82c35.87 47.2 44.69 99.24 25.28 149.24l-43.49 112.07c-14.54 37.46-13.3 76.22 3.62 113.37l50.64 111.18c22.59 49.6 17.1 101.77-15.74 149.63l-73.6 107.29c-24.6 35.85-33.96 74.28-27.37 112.4l19.72 114.05c8.8 50.88-10.87 102.03-56.4 146.68L6487-2341.29c-34.11 33.44-53.86 70.68-57.75 108.91l-11.63 114.39c-5.19 51.03-38.6 100-95.82 140.45l-128.25 90.67c-42.86 30.3-72.55 65.52-86.83 103l-42.73 112.17c-19.06 50.04-65.47 95.74-133.09 131.08l-151.57 79.22c-50.66 26.48-89.63 58.89-113.98 94.79l-72.87 107.43c-32.51 47.93-90.87 89.35-167.39 118.8l-171.51 66c-57.31 22.06-104.69 50.93-138.57 84.45l-101.39 100.3c-45.23 44.75-114.25 80.96-197.94 103.85l-187.61 51.3c-62.7 17.16-117.44 41.86-160.09 72.24l-127.63 90.93c-56.94 40.57-135.07 70.76-224.08 86.58l-199.52 35.47c-66.68 11.86-127.55 31.82-178.02 58.4l-151.03 79.53c-67.38 35.48-152.88 58.97-245.21 67.38l-206.98 18.84c-69.16 6.3-134.81 21.09-191.97 43.26l-171.05 66.35c-76.31 29.6-167.27 45.88-260.87 46.67l-209.8 1.79c-70.12.6-139.06 9.88-201.64 27.15l-187.26 51.7c-83.54 23.06-177.92 31.75-270.69 24.92l-207.95-15.31c-69.49-5.12-140.2-1.54-206.79 10.44l-199.28 35.88Z"
              />
              <path
                fill="#864775"
                d="M918.8 52.66a837.82 837.82 0 0 1-237.6 0L501.41 26.59a838.37 838.37 0 0 0-178.2-6.37L138.75 33.25c-79.89 5.64-161.09-.2-235.58-16.94l-172-38.65C-324.4-34.83-383.9-41.3-444-41.36l-186-.23c-80.55-.1-159.66-11.67-229.52-33.57l-161.29-50.59c-52.1-16.34-109.54-26.98-169.11-31.34l-184.35-13.48c-79.84-5.83-155.51-22.95-219.53-49.64l-147.82-61.65c-47.75-19.91-102.15-34.56-160.17-43.12l-179.55-26.5c-77.77-11.48-148.7-33.84-205.78-64.87L-2418.93-488c-42.59-23.15-93.02-41.55-148.49-54.17l-171.69-39.07c-74.35-16.92-139.33-44.14-188.51-78.98l-113.56-80.42c-36.68-26-82.29-47.83-134.26-64.3l-160.88-50.96c-69.67-22.08-127.59-53.7-168.02-91.74l-93.36-87.84c-30.16-28.37-70.15-53.27-117.75-73.31l-147.31-61.99c-63.8-26.85-113.66-62.33-144.65-102.92l-71.56-93.74c-23.12-30.29-56.82-57.82-99.22-81.07l-131.23-71.98c-56.84-31.16-97.79-69.89-118.81-112.35l-48.54-98.03c-15.68-31.67-42.51-61.38-78.99-87.45l-112.9-80.7c-48.9-34.95-80.24-76.27-90.93-119.86l-24.69-100.66c-7.98-32.51-27.47-63.88-57.4-92.32l-92.65-88.06c-40.12-38.14-61.32-81.34-61.5-125.31l-.41-101.56c-.13-32.81-11.97-65.29-34.84-95.63l-70.8-93.91c-30.66-40.67-41.35-85-31.01-128.62l23.87-100.71c7.71-32.54 3.74-65.59-11.68-97.3l-47.75-98.15c-20.67-42.51-20.67-87.22 0-129.73l47.75-98.15c15.42-31.71 19.39-64.76 11.68-97.3l-23.87-100.71c-10.34-43.62.35-87.95 31.01-128.62l70.8-93.91c22.87-30.34 34.71-62.82 34.84-95.64l.41-101.55c.18-43.98 21.38-87.17 61.5-125.31l92.65-88.06c29.93-28.45 49.42-59.81 57.4-92.33l24.69-100.65c10.69-43.59 42.03-84.91 90.93-119.86l112.9-80.71c36.48-26.07 63.31-55.77 78.99-87.45l48.54-98.03c21.02-42.46 61.97-81.18 118.81-112.35l131.23-71.97c42.4-23.25 76.1-50.78 99.22-81.07l71.56-93.74c30.99-40.59 80.85-76.07 144.65-102.92l147.31-62c47.6-20.03 87.59-44.93 117.75-73.3l93.36-87.83c40.43-38.05 98.35-69.67 168.02-91.72l160.88-51c51.97-16.49 97.58-38.33 134.26-64.26l113.56-80.48c49.18-34.83 114.16-62.02 188.51-78.95l171.69-39.09c55.47-12.61 105.9-31.01 148.49-54.16l131.82-71.63c57.08-31.07 128.01-53.4 205.78-64.86l179.55-26.54c58.02-8.57 112.42-23.2 160.17-43.13l147.82-61.64c64.02-26.7 139.69-43.79 219.53-49.63l184.36-13.48c59.56-4.37 117-15.02 169.1-31.34l161.3-50.56c69.85-21.95 148.96-33.47 229.5-33.58l186.01-.22c60.1-.11 119.59-6.55 175.16-19.05l172-38.66c74.5-16.7 155.7-22.55 235.58-16.92l184.46 13.05a839.84 839.84 0 0 0 178.21-6.39l179.77-26.04a836.26 836.26 0 0 1 237.62 0l179.77 26.04a839.8 839.8 0 0 0 178.2 6.39l184.47-13.05c79.89-5.63 161.09.22 235.58 16.92l172 38.66c55.57 12.5 115.06 18.94 175.16 19.05l186 .22c80.55.11 159.67 11.63 229.52 33.58l161.29 50.56c52.1 16.32 109.54 26.97 169.1 31.34l184.36 13.48c79.84 5.84 155.51 22.93 219.53 49.63l147.82 61.64c47.75 19.93 102.15 34.56 160.17 43.13l179.55 26.54c77.77 11.46 148.7 33.79 205.78 64.86l131.82 71.63c42.59 23.15 93.02 41.55 148.49 54.16l171.69 39.09c74.35 16.93 139.33 44.12 188.51 78.95l113.55 80.48c36.69 25.93 82.3 47.77 134.27 64.26l160.88 51c69.67 22.05 127.59 53.67 168.02 91.72l93.36 87.83c30.16 28.37 70.15 53.27 117.75 73.3l147.31 62c63.8 26.85 113.66 62.33 144.65 102.92l71.56 93.74c23.12 30.29 56.82 57.82 99.22 81.07l131.23 71.97c56.84 31.17 97.79 69.89 118.81 112.35l48.54 98.03c15.68 31.68 42.51 61.38 78.99 87.45l112.9 80.71c48.9 34.95 80.24 76.27 90.93 119.86l24.69 100.65c7.97 32.52 27.47 63.88 57.4 92.33l92.65 88.06c40.12 38.14 61.32 81.33 61.5 125.31l.41 101.55c.13 32.82 11.97 65.3 34.84 95.64l70.8 93.91c30.66 40.67 41.35 85 31.01 128.62l-23.87 100.71c-7.71 32.54-3.74 65.59 11.68 97.3l47.75 98.15c20.67 42.51 20.67 87.22 0 129.73l-47.75 98.15c-15.42 31.71-19.39 64.76-11.68 97.3l23.87 100.71c10.34 43.62-.35 87.95-31.01 128.62l-70.8 93.91c-22.87 30.34-34.71 62.82-34.84 95.63l-.41 101.56c-.18 43.97-21.38 87.17-61.5 125.31l-92.65 88.06c-29.93 28.44-49.43 59.81-57.4 92.33l-24.69 100.65c-10.69 43.59-42.03 84.91-90.93 119.86l-112.9 80.7c-36.48 26.07-63.31 55.78-78.99 87.45l-48.54 98.04c-21.02 42.45-61.97 81.18-118.81 112.34l-131.23 71.98c-42.4 23.25-76.1 50.78-99.22 81.07l-71.56 93.74c-30.99 40.59-80.85 76.07-144.65 102.92l-147.31 62c-47.6 20.03-87.59 44.93-117.75 73.3l-93.36 87.84c-40.43 38.04-98.35 69.66-168.02 91.74l-160.88 50.97c-51.97 16.46-97.58 38.3-134.26 64.28l-113.56 80.43c-49.18 34.84-114.16 62.06-188.51 78.98l-171.69 39.07c-55.47 12.62-105.9 31.02-148.49 54.17l-131.82 71.65c-57.08 31.03-128.01 53.39-205.77 64.87l-179.56 26.5c-58.02 8.56-112.42 23.2-160.17 43.12l-147.82 61.65c-64.02 26.7-139.69 43.8-219.53 49.64l-184.35 13.48c-59.57 4.36-117.01 15-169.11 31.34l-161.29 50.59c-69.85 21.9-148.97 33.47-229.52 33.57l-186 .23c-60.1.07-119.59 6.53-175.16 19.02l-172 38.65c-74.49 16.74-155.69 22.58-235.58 16.94l-184.47-13.03a838.36 838.36 0 0 0-178.2 6.37L918.81 52.66Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h1600v100H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div style={{ height: "180px" }} />

      <div className="grid">
        <div className="content">
          <h2>Design Systems + Motion</h2>
          <p>
            I worked from existing motion specs for individual components
            (created by{" "}
            <a
              href="https://www.linkedin.com/in/heybwall/"
              target="_blank"
              rel="noreferrer"
            >
              Brandon Wall
            </a>
            ) to create a mature design system for UI motion across Intuit. Key
            accomplishments included:
          </p>
          <ul>
            <li>
              Expanding the set of animations to cover more use cases and better
              differentiate between product vs. marketing / storytelling
              animations
            </li>
            <li>
              Creating an{" "}
              <a
                href="https://intuit.github.io/qb-animation-library/"
                target="_blank"
                rel="noreferrer"
              >
                open-source library
              </a>{" "}
              of CSS animations and writing an{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://medium.com/intuit-engineering/delivering-consistent-animations-with-a-design-system-library-323f29f5efc6"
              >
                article
              </a>{" "}
              detailing the rationale and process
            </li>
            <li>
              Creating documentation and semantic labels to guide usage across
              Intuit + working with teams to ensure a consistent motion
              experience across touchpoints
            </li>
          </ul>
        </div>

        <div className="video">
          <div className="thumb" onClick={() => setOpenModal("qbal")}>
            <img
              className="play-overlay"
              src={playButtonOverlay}
              alt="play design systems video"
            />
            <img src={thumbSystems} alt="design systems motion" />
          </div>
          <button onClick={() => setOpenModal("qbal")}>
            Watch video{" "}
            <span style={{ fontWeight: 400, fontSize: ".85em" }}>(1 min)</span>
          </button>
        </div>
      </div>

      <div style={{ height: "120px" }} />
      <div className="grid">
        <div className="content">
          <h2>Motion Design for UX Designers</h2>
          <p>
            Lemur Motion is a Figma plugin + GSAP-powered web tool that lets
            designers choreograph new motion designs, collaborate in real time
            with Motion Designers, and generate ready-to-ship code.
          </p>
          <ul>
            <li>
              <a
                href="https://lemurcss.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                CSS
              </a>{" "}
              for the expanded set of entrance & exit presets for Lemur Motion
            </li>
          </ul>
        </div>
        <div className="video">
          <div className="thumb" onClick={() => setOpenModal("lemur")}>
            <img
              className="play-overlay"
              src={playButtonOverlay}
              alt="play lemur video"
            />
            <img src={thumbLemur} alt="lemur motion" />
          </div>
          <button onClick={() => setOpenModal("lemur")}>
            Watch video{" "}
            <span style={{ fontWeight: 400, fontSize: ".85em" }}>
              (1.5 min)
            </span>
          </button>
        </div>
      </div>

      <div style={{ height: "120px" }} />
      <div className="grid">
        <div className="content">
          <h2>Design + Code with Shaders</h2>
          <p>
            Hummingbird is a tool that lets Roku designers create and animate
            their own custom shaders.{" "}
          </p>
          <ul>
            <li>
              Shaders shipped at 1% the file size of a 1080p gradient image,
              plus they could be animated
            </li>
            <li>
              We created custom landing pages within RokuTV for short-term
              promotions and brand partnerships by updating a few lines of code
            </li>
            <li>
              I implemented GLSL shaders to match visual design comps and built
              a custom RokuTV channel to test frame rates across Roku devices
            </li>
          </ul>
        </div>
        <div className="video">
          <div className="thumb" onClick={() => setOpenModal("shaders")}>
            <img
              className="play-overlay"
              src={playButtonOverlay}
              alt="play shaders tool video"
            />
            <img src={thumbShaders} alt="shaders tool" />
          </div>
          <button onClick={() => setOpenModal("shaders")}>
            Watch video{" "}
            <span style={{ fontWeight: 400, fontSize: ".85em" }}>
              (1.5 min)
            </span>
          </button>
        </div>
      </div>

      <div style={{ height: "120px" }} />
      <div className="grid">
        <div className="content">
          <h2>More Motion at Intuit</h2>
          <p>
            In addition to coded motion using CSS, GSAP, D3, Framer Motion, and
            other libraries, I also used timeline-based motion tools like After
            Effects and drove the adoption of Lottie at Intuit by providing
            coded examples.
          </p>
          <p>Projects from this video include:</p>
          <ul>
            <li>
              scroll-driven Lottie{" "}
              <a
                href="https://backflip.surge.sh/smooth-animations.html"
                target="_blank"
                rel="noreferrer"
              >
                marketing experiment
              </a>
            </li>
            <li>
              Lottie playback control{" "}
              <a
                href="https://brettlyne.github.io/lottie-interaction-demo/"
                target="_blank"
                rel="noreferrer"
              >
                interactive demo
              </a>
            </li>
            <li>
              <a
                href="https://brettlyne.github.io/animations-size-comparisons/"
                target="_blank"
                rel="noreferrer"
              >
                detailed camparison
              </a>{" "}
              of animation deliver options{" "}
            </li>
            <li>data vis animations in D3</li>
            <li>
              <a
                href="https://codepen.io/des-eng/pen/bzLaKv"
                target="_blank"
                rel="noreferrer"
              >
                codepen
              </a>{" "}
              for the QuickBooks loading spinner in CSS
            </li>
            <li>ambient react 3 fiber animation with post processing</li>
          </ul>
        </div>
        <div className="video">
          <div className="thumb" onClick={() => setOpenModal("moreMotion")}>
            <img
              className="play-overlay"
              src={playButtonOverlay}
              alt="play more motion video"
            />
            <img src={thumbMoreMotion} alt="more motion projects" />
          </div>
          <button onClick={() => setOpenModal("moreMotion")}>
            Watch video{" "}
            <span style={{ fontWeight: 400, fontSize: ".85em" }}>(3 min)</span>
          </button>
        </div>
      </div>

      <div style={{ height: "180px" }} />

      <Modal open={openModal !== ""} onClose={() => setOpenModal("")} center>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            url={videos[openModal]}
            controls
            playing
            muted
          />
        </div>
      </Modal>
    </>
  );
}

export default App;
