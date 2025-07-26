import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

interface HighlightTextProps {
  children: string;
  onHover: (text: string) => void;
  isHover?: boolean;
  imageUrl?: string;
  isMobile?: boolean;
  routePath?: string;
  prefetchImageList?: string[];
}

function HighlightText({
  children,
  isHover,
  onHover,
  imageUrl,
  isMobile,
  routePath,
  prefetchImageList,
}: HighlightTextProps) {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const prefetchedImages = useRef(new Set<string>());

  const preloadNextPageHero = (src: string) => {
    // 이미 prefetch된 이미지는 건너뛰기
    if (prefetchedImages.current.has(src)) {
      return;
    }

    const img = new Image();
    img.src = src;
    prefetchedImages.current.add(src);
  };

  useEffect(() => {
    if (isClicked && routePath) {
      const timeout = setTimeout(() => {
        router.push(routePath);
        setIsClicked(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isClicked, routePath, router]);

  const handleMouseEnter = () => {
    if (routePath) {
      // 한 번만 prefetch 실행
      prefetchImageList?.forEach(preloadNextPageHero);
    }

    onHover(children);
  };

  const handleMouseLeave = () => {
    onHover("");
  };

  const handleClick = () => {
    if (routePath && !isClicked) {
      setIsClicked(true);
      onHover(children); // 클릭 시에도 hover 상태 활성화
    }
  };

  return (
    <div
      className={
        isMobile
          ? "relative flex h-full w-screen items-center justify-center"
          : "relative flex h-screen w-full items-center justify-center"
      }
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* 배경 이미지 오버레이 */}
      {imageUrl && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHover ? 0.6 : 0 }}
          transition={{ duration: 0.5 }}
        />
      )}

      <button
        className="relative overflow-hidden font-sans text-2xl font-bold text-transparent uppercase"
        style={{
          WebkitTextStroke: "1px white",
        }}
      >
        <span className="actual-text">{children}</span>

        <motion.span
          className="align-center pointer-events-none absolute inset-0 whitespace-nowrap"
          initial={{ width: 0 }}
          animate={{ width: isHover ? "100%" : "0%" }}
          transition={{ duration: 0.5 }}
          style={{
            color: "white",
            WebkitTextStroke: "1px white",
            borderRight: isHover ? "6px solid white" : "0px solid transparent",
            overflow: "hidden",
            filter: isHover ? "drop-shadow(0 0 3px white)" : "none",
          }}
        >
          {children}
        </motion.span>
      </button>
    </div>
  );
}

export default HighlightText;
