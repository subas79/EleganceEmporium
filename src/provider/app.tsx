import { LoadingOutlined } from "@ant-design/icons";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { App as AntdApp, Button, ConfigProvider } from "antd";
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import { antdThemeConfig } from "../config/antd";
// import { msalInstance } from "../config/msal-config";
import { queryClient } from "../lib/reactQuery";
import { AppProviderProps } from "../types";
import { logOut } from "../utils/auth";

const ErrorFallback = () => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong</h2>
      <Button
        type="primary"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};

const InProgressComponent = () => {
  return (
    <div className="flex h-full items-center justify-center gap-x-1.5 p-[100px]">
      <LoadingOutlined />
      <span>Loading...</span>
    </div>
  );
};

const ErrorComponent = ({ error }: any) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-[100px]">
      <p>
        This is a protected page and the following error occurred during
        authentication: <strong>{error?.errorCode}</strong>
      </p>
      <button
        className="rounded bg-gray-200 p-2 hover:bg-gray-100 hover:font-medium"
        onClick={() => {
          logOut();
        }}
      >
        Go back
      </button>
    </div>
  );
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<InProgressComponent />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ToastContainer closeOnClick={false} draggable={false} />
            <QueryClientProvider client={queryClient}>
              <ConfigProvider theme={antdThemeConfig}>
                <AntdApp>
                  <Router>{children}</Router>
                </AntdApp>
              </ConfigProvider>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
