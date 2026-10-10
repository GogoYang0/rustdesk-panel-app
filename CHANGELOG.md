# 更新日志（Changelog）

本项目的所有重要变更将记录在本文件中。

格式参考 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/) 简化版。

## v0.1.1（2026-10-10）

### 修复

- **[fix] 官方客户端登录 type 兼容**：版本对齐发布。本仓未引用登录响应 type，无代码改动；随平台三仓统一升级至 v0.1.1。

## v0.1.0（2026-10-11）

首个发布版本。RustDesk Panel 移动端（React Native 0.86 + Expo SDK 57）。

### 新增

- **M0 脚手架基础**：Expo SDK 57 + React Native 0.86 工程初始化、欢迎页、采用 classic gitflow 分支模型与 CI 基线。

### 规划中（后续里程碑）

- 登录（密码 + 2FA；OIDC 走系统浏览器会话）
- 设备列表与在线状态、`rustdesk://` URL Scheme 一键唤起远程桌面
- 告警推送（expo-notifications）、通讯录查看、服务器状态概览
- EAS Build（development / preview / production）+ EAS Update

### 其他

- Docker 镜像后续提供。
