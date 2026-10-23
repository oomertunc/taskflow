# TASKFLOW Gorev API

Node.js ve Express.js ile hazirlanan egitim amacli REST API. Gorev ekleme, listeleme, detay, guncelleme ve silme islemlerini sunar.

## Calistirma
1. Node.js 18+ kurun.
2. npm install calistirin.
3. npm start komutuyla http://localhost:3000 adresinde baslatin.

## Uclar
- POST /tasks gorev ekler.
- GET /tasks gorevleri listeler.
- GET /tasks/:id gorev detayini getirir.
- PUT /tasks/:id gorevi gunceller.
- DELETE /tasks/:id gorevi siler.

Logger her istegi method, endpoint ve zaman damgasiyla konsola yazar. Ornek veriler bellekte tutulur ve sunucu yeniden baslayinca sifirlanir.
