# Mosaica

Mosaica, ortak kültür içeriği bilgisini kişisel arşiv deneyiminden ayıran yerel bir kültür arşividir.

## Kullanılabilir özellikler

İçerik oluşturma ve keşfetme, kütüphaneye ekleme, Library Entry kişisel alanı (puan, beğeni, favori, durum, not ve deneyim geçmişi), koleksiyonlar, bağlamsal etiketler ve yerel profil özeti kullanılabilir.

## Teknik yapı

Next.js, TypeScript, Prisma 7, SQLite ve Vitest.

## Kurulum

Node.js 20+ gerekir. `.env.example` dosyasını `.env` olarak kopyalayın ve `DATABASE_URL=file:./prisma/dev.db` ayarlayın.

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

Yerel kullanıcı sabit ve idempotent olarak ilk kişisel işlemde oluşturulur. Kurulum komutları veritabanını sıfırlamaz. Migration gerekirse `npm run prisma:migrate -- --name <ad>` kullanın.

## Doğrulama

```bash
npm run quality
npm run test:unit
npm run test:integration
npm run build
```

Ana rotalar: `/`, `/discover`, `/library`, `/library/[entryId]`, `/collections`, `/collections/[collectionId]`, `/profile`.

Bu v0.x sürümü üretim kimlik doğrulaması, bulut senkronizasyonu ve dış metadata sağlayıcıları içermez. Mimari belgeler `docs/architecture/`, ADR’ler `docs/adr/` altındadır.
