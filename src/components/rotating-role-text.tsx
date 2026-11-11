"use client";

import { useEffect, useState } from "react";

const ROLE_PREFIX = "19 · ";
const ROLES = [
  "AI Engineer",
  "SDE (Software Development Engineer)",
  "App Developer",
];

const TYPE_DELAY_MS = 68;
const DELETE_DELAY_MS = 34;
const PAUSE_DELAY_MS = 1250;
const NEXT_ROLE_DELAY_MS = 220;

export function RotatingRoleText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (!isDeleting && visibleLength === currentRole.length) {
      const timeout = window.setTimeout(() => setIsDeleting(true), PAUSE_DELAY_MS);
      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && visibleLength === 0) {
      const timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((currentIndex) => (currentIndex + 1) % ROLES.length);
      }, NEXT_ROLE_DELAY_MS);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(
      () => {
        setVisibleLength((currentLength) => currentLength + (isDeleting ? -1 : 1));
      },
      isDeleting ? DELETE_DELAY_MS : TYPE_DELAY_MS,
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, roleIndex, visibleLength]);

  const visibleRole = ROLES[roleIndex].slice(0, visibleLength);

  return (
    <>
      <span aria-label={`${ROLE_PREFIX}${ROLES[roleIndex]}`}>
        {ROLE_PREFIX}
        {visibleRole}
      </span>
      <span className="blink-cursor" aria-hidden="true" />
    </>
  );
}
