"use client";

import { Component, ReactNode } from "react";

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
          <div className="bg-background flex min-h-screen items-center justify-center p-4">
            <div className="text-center">
              <h2 className="text-foreground mb-4 text-xl font-semibold">
                Something went wrong
              </h2>
              <p className="text-muted-foreground mb-4">
                Please refresh the page or try again later.
              </p>
              <button
                onClick={this.handleReload}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
