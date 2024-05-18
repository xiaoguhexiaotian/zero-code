import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// 是否是开发环境
export function isDevFn(mode: string): boolean {
  return mode === "development";
}

// 是否是生产环境
export function isProdFn(mode: string): boolean {
  return mode === "production";
}

/**
 * 是否生成预览包模式
 */
export function isReportMode(): boolean {
  return process.env.REPORT === "true";
}

/**
 * 获取当前环境下生效的环境变量文件列表
 */
function getConfFiles() {
  const script = process.env.npm_lifecycle_script;
  const reg = new RegExp("--mode ([a-z_\\d]+)");
  const result = reg.exec(script as string) as any;
  if (result) {
    const mode = result[1] as string;
    return [".env", `.env.${mode}`];
  }
  return [".env", ".env.production"];
}

/**
 * 获取指定前缀的环境变量
 * @param match 前缀
 * @param confFiles 配置文件列表
 */
export function getEnvConfig(match = "VITE_GLOB_", confFiles = getConfFiles()) {
  let envConfig = {};
  confFiles.forEach((item) => {
    try {
      const env = dotenv.parse(
        fs.readFileSync(path.resolve(process.cwd(), item))
      );
      envConfig = { ...envConfig, ...env };
    } catch (e) {
      console.error(`Error in parsing ${item}`, e);
    }
  });
  const reg = new RegExp(`^(${match})`);
  Object.keys(envConfig).forEach((key) => {
    if (!reg.test(key)) {
      Reflect.deleteProperty(envConfig, key);
    }
  });
  return envConfig;
}
