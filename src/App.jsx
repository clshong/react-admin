import { RouterProvider } from "react-router-dom";
import router from "./router";

import { useGlobalStore } from "~/stores";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import "antd/dist/reset.css";

dayjs.locale("zh-cn");

const App = () => {
  const { primaryColor } = useGlobalStore();

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: primaryColor
        }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
