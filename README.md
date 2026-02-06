# New Year 3D (Romantic Warm)

## 1) Install
You need Node.js 18+ installed.

```bash
npm install
```

## 2) Add font file
Place a Chinese font file here:

`/Users/weijunfeng684gmail.com/Desktop/开发/new-year-3d/public/fonts/SourceHanSerifSC-Regular.otf`

You can use any .otf/.ttf font. If you rename it, update `fontUrl` in:

`/Users/weijunfeng684gmail.com/Desktop/开发/new-year-3d/src/main.js`

## 3) Run
```bash
npm run dev
```

## 4) Build for deploy
```bash
npm run build
```
The build output will be in `dist/`.

## Notes
- The text is 3D (Troika text). If fonts fail to load, the canvas will be blank.
- You can edit the quotes and colors in `src/main.js`.
