"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export function Footer() {
  const [textDefesaCivil, setTextDefesaCivil] = useState("");
  const [textBombeiros, setTextBombeiros] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const textArray = ["Defesa Civil (199)", "Bombeiros (193)"];
  const typingSpeed = 400;
  const cursorSpeed = 500;

  useEffect(() => {
    let currentIndex = 0;
    let currentTextDefesaCivil = "";
    let currentTextBombeiros = "";

    const interval = setInterval(() => {
      if (currentIndex < textArray[0].length) {
        currentTextDefesaCivil = textArray[0].substring(0, currentIndex + 1);
        setTextDefesaCivil(currentTextDefesaCivil);
      }
      if (currentIndex < textArray[1].length) {
        currentTextBombeiros = textArray[1].substring(0, currentIndex + 1);
        setTextBombeiros(currentTextBombeiros);
      }

      if (currentIndex === textArray[0].length && currentIndex === textArray[1].length) {
        clearInterval(interval);
        setShowCursor(true);
      }
      currentIndex++;
    }, typingSpeed);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorSpeed);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <footer className="flex justify-center bg-primary text-primary-foreground p-4 lg:px-8">
      <div className="text-center">
        <h4 className="font-medium">Telefones úteis</h4>

        <ul className="pl-1">
          <li>
            <Link href={`tel:199`} className="text-xs hover:underline">{textDefesaCivil}{showCursor && "|"}</Link>
          </li>
          <li>
            <Link href={`tel:193`} className="text-xs hover:underline">{textBombeiros}{showCursor && "|"}</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
