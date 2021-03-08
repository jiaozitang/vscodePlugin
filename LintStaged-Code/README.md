# 版本
v1.0

# 使用方法
1. 打开项目根目录下任意文件，编辑器焦点在文本中
2. 点击右键，点击formatProject，或者快捷键cmd+f11

# 注意事项
## formatProject前请先 `git stash` 保存项目本地修改，以防丢失
因为formatProject后，会为项目安装`lint-staged prettier eslint stylelint husky @commitlint/cli @commitlint/config-conventional`，并为项目添加相关配置文件，如果项目已有配置文件，会被替换，因此在formatProject前请需要 `git stash` 保存项目本地修改，以防丢失。


# 常见问题
## package.json中有相关的配置请手动处理
后续考虑扩展，当前版本需手动移除package.json中已有的相关配置

## 项目内已有该依赖，导致安装失败，请手动处理
后续考虑扩展，当前版本安装失败，请自行查看失败原因并进行处理

# 开发者相关
## 打包
vsce package

## 本地运行快捷键
f5

## 计划支持的功能
- 支持选择技术栈，根据技术栈生成配置文件

- 支持修改package.json文件，避免和原有配置冲突

- 支持兼容cnpm或npm安装