import { useCallback, useEffect, useRef, useState } from "react";

interface UseClipboardOptions {
  /** copied 플래그 유지 시간(ms) */
  timeout?: number;
}

interface UseClipboardReturn {
  copy: (text: string) => Promise<boolean>;
  copied: boolean;
  error: string | null;
  supported: boolean;
}

export function useClipboard(
  options: UseClipboardOptions = {},
): UseClipboardReturn {
  const { timeout = 1500 } = options;
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  const supported =
    typeof window !== "undefined" && !!navigator.clipboard.writeText;

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      if (!supported) {
        setError("Clipboard API not supported");
        return false;
      }
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        return true;
      } catch (e) {
        setError((e as Error).message || "Failed to copy");
        return false;
      }
    },
    [supported],
  );

  // copied 상태 자동 reset
  useEffect(() => {
    if (!copied) return;
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopied(false), timeout);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [copied, timeout]);

  return { copy, copied, error, supported };
}
