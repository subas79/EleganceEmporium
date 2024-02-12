// import { Spin } from "antd";
// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";

// import { Layout } from "@/features/layout";
// import { lazyImport } from "@/utils/lazyimport";
import Login from "../pages/login/Login";

// const { Employee } = lazyImport(
//   () => import("@/features/employee"),
//   "Employee"
// );

// const User = () => {
//   return (
//     <Layout>
//       <Suspense
//         fallback={
//           <div className="flex h-full items-center justify-center p-10">
//             <Spin />
//           </div>
//         }
//       >
//         <Outlet />
//       </Suspense>
//     </Layout>
//   );
// };

export const protectedRoutes = [
  {
    path: "login",
    element: <Login />,
    // children: [
    //   { path: "", element: Login },
    // ],
  },
];
