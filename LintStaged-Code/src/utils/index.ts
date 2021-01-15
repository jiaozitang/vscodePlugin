// const fse = require('fs-extra');

// // src 请注意，如果src是目录，它将复制此目录内的所有内容，而不是整个目录本身
// // dest 请注意，如果src是文件，dest则不能是目录

// export function copyFile(src: string, dist: string) {
//   fse.copy(src, dist, (err: any) => {
//     if (err) return console.error(err);
//     console.log('success!');
//   });
// }