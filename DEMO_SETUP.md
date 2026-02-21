# Demo Setup (Single Repo / Single Vercel Project)

Bu yapı ile ayrı ayrı repo/deploy zorunlu değil.

## Hedef yapı
- Ana site: `https://www.bycain.com`
- Demo dosyaları: `public/demos/<slug>/`
- Demo URL: `https://www.bycain.com/demos/<slug>/`

Örnek:
- `public/demos/soloshop/index.html` -> `https://www.bycain.com/demos/soloshop/`

---

## 1) Demo klasörleri
Bu repo içinde şu klasörü kullan:

`public/demos/`

Her demo için bir alt klasör aç:
- `public/demos/soloshop`
- `public/demos/biolink-pro`
- `public/demos/prestige`

---

## 2) NPM gerektirmeyen demo
Eğer demo zaten statik HTML/CSS/JS ise:
- Dosyaları direkt ilgili klasöre kopyala.
- `index.html` giriş dosyası olmalı.

---

## 3) NPM gerektiren demo (React/Vite/Next vb.)
Doğrudan source atılmaz. Önce build alıp `dist`/`out` çıktısı kopyalanır.

Genel akış:
1. Demo projesinde `npm install`
2. `npm run build`
3. Build çıktısını (`dist` veya `out`) bu repo içindeki `public/demos/<slug>/` klasörüne kopyala.

> Not: Eğer asset path'leri root'a (`/assets/...`) yazılıyorsa alt klasörde kırılabilir.
> Bu durumda demo projesinde base/publicPath ayarı gerekir.

Vite için örnek (demo projesinde):
```js
// vite.config.js
export default defineConfig({
  base: '/demos/soloshop/'
})
```

Sonra tekrar build alıp kopyala.

---

## 4) Store tarafında Demo butonu
`Shop.jsx` demo butonunu `previewUrl` doluysa gösterir.

`src/data/products.js` içinde her ürüne gerçek link ver:
```js
previewUrl: '/demos/soloshop/'
```
veya
```js
previewUrl: 'https://www.bycain.com/demos/soloshop/'
```

---

## 5) Kontrol listesi
- [ ] `public/demos/<slug>/index.html` var mı?
- [ ] Demo URL localde açılıyor mu?
- [ ] `previewUrl` ürün data'da doğru mu?
- [ ] Vercel deploy sonrası URL çalışıyor mu?
