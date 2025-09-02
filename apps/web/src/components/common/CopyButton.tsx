"use client";

import { useClipboard } from "@/hooks/useClipboard";

import { cn } from "@repo/ui";

export default function CopyButton({
  className,
  text,
}: {
  className: string;
  text: string;
}) {
  const { copy, copied } = useClipboard();

  return (
    <button
      data-copy-to-clipboard-target="npm-install-copy-text"
      onClick={() => copy(text)}
      className={cn(
        "inline-flex h-8 items-center justify-center rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700",
        className,
      )}
    >
      {!copied ? (
        <span id="default-message">
          <span className="inline-flex items-center">
            <svg
              className="me-1.5 h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
            </svg>
            <span className="text-xs font-semibold">Copy</span>
          </span>
        </span>
      ) : (
        <span id="success-message">
          <span className="inline-flex items-center">
            <svg
              className="me-1.5 h-3 w-3 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">
              Copied
            </span>
          </span>
        </span>
      )}
    </button>
  );
}
