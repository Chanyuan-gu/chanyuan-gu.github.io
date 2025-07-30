"use client";

import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="bio"
          className="h-screen flex flex-col items-center justify-center bg-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >

          <Image
                src="/profile.jpg"  // <-- put your image file in the /public folder
                alt="Chanyuan Gu"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 shadow-lg"
              />
            <h1 className="text-6xl font-bold">Chanyuan Gu</h1>
            <p className="text-xl mt-4 text-gray-600">
              Researcher | Educator | Innovator
            </p>
          </motion.div>
        </section>

        {/* Papers Section */}
        <section id="papers" className="py-20 bg-gray-50">
          <h2 className="text-4xl font-bold text-center mb-8">Papers</h2>
          <ul className="max-w-2xl mx-auto space-y-4 text-lg">
            <li>
              <a
                href="https://doi.org/10.1038/s41539-025-00337-y"
                className="text-indigo-600 hover:underline"
              >
                Reading comprehension in L1 and L2 readers: neurocomputational mechanisms revealed through large language models
              </a>
            </li>
            <li>
              <a
                href="https://www.science.org/doi/10.1126/sciadv.adn7744"
                className="text-indigo-600 hover:underline"
              >
                Predicting the next sentence (not word) in large language models: What model-brain alignment tells us about discourse comprehension
              </a>
            </li>
            <li>
              <a
                href="https://doi-org.ezproxy.lib.uconn.edu/10.1073/pnas.2309054121"
                className="text-indigo-600 hover:underline"
              >
                Onscreen presence of instructors in video lectures affects learners&apos; neural synchrony and visual attention during multimedia learning
              </a>
            </li>
            <li>
              <a
                href="https://doi.org/10.3758/s13428-022-01842-3"
                className="text-indigo-600 hover:underline"
              >
                From eye movements to scanpath networks: A method for studying individual differences in expository text reading
              </a>
            </li>
            <li>
              <a
                href="https://doi.org/10.1111/desc.13161"
                className="text-indigo-600 hover:underline"
              >
                The brain basis of handwriting deficits in Chinese children with developmental dyslexia
              </a>
            </li>
            <li>
              <a
                href=" "
                className="text-indigo-600 hover:underline"
              >
                The Effect of Subjective Phonetic-radical Neighborhood on Character Naming in Chinese Children
              </a>
            </li>
            <li>
              <a
                href="https://doi.org/10.1016/j.neubiorev.2020.06.032"
                className="text-indigo-600 hover:underline"
              >
                Auditory processing deficit in individuals with dyslexia: A meta-analysis of mismatch negativity
              </a>
            </li>
            <li>
              <a
                href="https://doi.org/10.1002/hbm.24968"
                className="text-indigo-600 hover:underline"
              >
                Men and women differ in the neural basis of handwriting
              </a>
            </li>
          </ul>
        </section>

        {/* Media Section */}
        <section id="media" className="py-20 bg-white">
          <h2 className="text-4xl font-bold text-center mb-8">Media</h2>
          <p className="text-center text-gray-500">
            Coming soon — talks, interviews, and press coverage will be listed here.
          </p>
        </section>


        {/* CV Section */}
        <section id="cv" className="py-20 bg-gray-50 text-center">
          <h2 className="text-4xl font-bold mb-6">Curriculum Vitae</h2>
          <p className="text-lg">
            Download my full CV{" "}
            <a href="/Chanyuan Gu_CV.pdf" className="text-indigo-600 hover:underline">
              here
            </a>.
          </p>
        </section>
      </main>
    </>
  );
}
