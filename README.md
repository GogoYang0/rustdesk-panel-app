# rustdesk-panel-app

RustDesk Panel 移动端（React Native 0.86 + Expo SDK 57 / expo@57.0.26）。

## 当前状态（M0）

仅脚手架与欢迎页；CI 不在本仓库跑原生构建（EAS 构建接入属 M5 里程碑）。

## 规划功能（M5）

- 登录（密码 + 2FA；OIDC 走系统浏览器会话）
- 设备列表与在线状态、`rustdesk://` URL Scheme 一键唤起远程桌面
- 告警推送（expo-notifications）、通讯录查看、服务器状态概览
- EAS Build（development / preview / production）+ EAS Update

## 本地开发

```sh
pnpm install
pnpm start      # Expo Dev Server（建议使用 development build，不依赖 Expo Go）
```
