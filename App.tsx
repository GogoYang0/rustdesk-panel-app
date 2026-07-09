import { Pressable, StyleSheet, Text, View } from "react-native";

/**
 * M0 脚手架：验证 RN 0.86 + Expo 57 基础渲染。
 * 完整功能（登录/2FA、设备列表与状态、rustdesk:// 唤起、告警推送、
 * 通讯录查看、服务器概览）与 expo-router、EAS 构建在 M5 里程碑交付。
 */
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RustDesk Panel</Text>
      <Text style={styles.subtitle}>Expo SDK 57 · React Native 0.86</Text>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}
        onPress={() => undefined}
      >
        <Text style={styles.buttonText}>开始使用</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#0b0f19",
  },
  title: { fontSize: 28, fontWeight: "700", color: "#f5f7fa" },
  subtitle: { fontSize: 14, color: "#8a94a6", marginBottom: 24 },
  button: {
    backgroundColor: "#2f6fed",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: { color: "#ffffff", fontSize: 16, fontWeight: "600" },
});
