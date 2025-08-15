"use client";

import type { ReactNode } from "react";
import { Component } from "react";
import GalaxyBackground from "@/components/common/GalaxyBackground";

import { cn } from "@repo/ui";
import { buttonVariants } from "@repo/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // 웹뷰에서 발생하는 에러를 안전하게 로깅
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReload = () => {
    try {
      // SSR/프리렌더링 환경에서 window 객체 접근을 안전하게 처리
      if (typeof window !== "undefined" && window.location) {
        window.location.reload();
      } else {
        // window가 사용 불가능한 경우 fallback 처리
        console.warn("Window not available, cannot reload page");
        // 상태를 리셋하여 에러 상태에서 벗어나도록 함
        this.setState({ hasError: false });
      }
    } catch (error) {
      console.warn("Page reload failed:", error);
      // 에러 발생 시 상태만 리셋
      this.setState({ hasError: false });
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
            <main className="relative h-screen w-screen flex-1">
              <div className="align-center absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-4">
                <h1 className="text-6xl">Something went wrong</h1>
                <p className="text-muted-foreground mb-4">
                  Please refresh the page or try again later.
                </p>
                <button
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full self-center rounded-full border border-white/30 bg-white/20 px-8 py-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 md:self-start",
                  )}
                  onClick={this.handleReload}
                >
                  Home
                </button>
              </div>

              <div className="absolute inset-0">
                <GalaxyBackground mouseInteraction={false} />
              </div>
            </main>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
