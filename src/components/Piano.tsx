"use client";
import React from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import * as Tone from "tone";
import { BentoTilt } from "./Features";
const ResponsivePiano: React.FC = () => {
  const firstNote = MidiNumbers.fromNote("c3");
  const lastNote = MidiNumbers.fromNote("c5");
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote,
    lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  const playNote = (midiNumber: number) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(Tone.Frequency(midiNumber, "midi").toFrequency(), "8n");
  };

  return (
    // <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-2 md:row-span-1">
      // <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
        <Piano
          noteRange={{ first: firstNote, last: lastNote }}
          playNote={playNote}
          stopNote={() => {}}
          width={window.innerWidth * 0.9}
          keyboardShortcuts={keyboardShortcuts}
        />
      // </div>
    // </BentoTilt>
  );
};

export default ResponsivePiano;
