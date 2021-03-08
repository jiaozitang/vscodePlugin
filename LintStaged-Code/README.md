# 版本
v1.0

# 使用方法
- 打开项目任意文件，编辑器焦点在文本中
- 点击右键，点击formatProject，或者快捷键cmd+f11

# 注意事项
## formatProject前请先 `git stash` 保存项目本地修改，以防丢失
因为formatProject后，会为项目安装`lint-staged prettier eslint stylelint husky @commitlint/cli @commitlint/config-conventional`，并为项目添加相关配置文件，如果项目已有配置文件，会被替换，因此在formatProject前请需要 `git stash` 保存项目本地修改，以防丢失。

# 开发者相关
## 打包
vsce package

## 本地运行快捷键
f5