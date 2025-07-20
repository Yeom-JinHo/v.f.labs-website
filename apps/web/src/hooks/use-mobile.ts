import { useEffect, useState } from "react";

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // 화면 너비가 768px 이하인 경우 모바일로 간주
      setIsMobile(window.innerWidth <= 768);
    };

    // 초기 체크
    checkIsMobile();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener("resize", checkIsMobile);

    // 클린업
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

// 더 세밀한 브레이크포인트별 체크
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<
    "sm" | "md" | "lg" | "xl" | "2xl"
  >("lg");

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;

      if (width < 640) setBreakpoint("sm");
      else if (width < 768) setBreakpoint("md");
      else if (width < 1024) setBreakpoint("lg");
      else if (width < 1280) setBreakpoint("xl");
      else setBreakpoint("2xl");
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  return breakpoint;
};

// 모바일 디바이스 감지 (User Agent 기반)
export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );

  useEffect(() => {
    const checkDeviceType = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent,
        );
      const isTablet = /ipad|android(?=.*\b(?!.*\bmobile\b))/.test(userAgent);

      if (isMobileDevice && !isTablet) {
        setDeviceType("mobile");
      } else if (isTablet) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    checkDeviceType();
  }, []);

  return deviceType;
};
