###这将是一个React项目启动脚手架
1. 处理CSS、Less、Sass的过程是先通过Less-Loader,Sass-Loader转译为CSS，再通过PostCSS进行预处理，接着通过CSS-loader打包进CommonJS文件，再通过style-loader通过JS装载进HTML
2. .babelrc postcss.config.js
3. 提取第三方库，optimization
4. 多入口