import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//子应用接入乾坤第二步：新建public-path.js文件，子应用加载文件时防止路径错误
import "./public-path.js";

let root: any;
function render(props: any) {
  const { container } = props;
  // 这里会判断是否在乾坤环境下，乾坤环境下root根节点为乾坤中的出口容器，非乾坤环境就是正常的根节点
  const dom = container
    ? container.querySelector("#root")
    : document.getElementById("root");
  root = createRoot(dom);
  root.render(
    //这里要设置basename，和主应用的入口文件中子应用列表的activeRule相同，用于主应用匹配路由
    <BrowserRouter basename="/sub-react">
      <App />
    </BrowserRouter>
  );
}

// 判断是否在qiankun环境下，非qiankun环境下独立运行
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

// 各个生命周期
// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
export async function bootstrap() {
  console.log("react app bootstraped");
}

// 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
export async function mount(props: any) {
  console.log(props);
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
    // 将这个state存储到我们子应用store
  });
  props.setGlobalState({ count: 2 });
  render(props);
}

// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
export async function unmount(props: any) {
  root.unmount();
}
