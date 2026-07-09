import { registerRootComponent } from "expo";
import App from "./App";

// 注册根组件：兼容 Expo Go 与 development build 两种入口。
registerRootComponent(App);
