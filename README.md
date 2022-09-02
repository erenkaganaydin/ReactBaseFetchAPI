# React ile api isteği atmak için basit bir şablon

#### Projeyi kurduktan sonra komut satırında cd ile uygulama klasörüne gidip
### `npm start`
#### yazmanız yeterlidir.

## Kullanılan Api https://jsonplaceholder.typicode.com/  apisidir. 
#### Proje react ile basit bir şekilde api isteği yapma projesidir. Şablon olarak kullanılabilir.

## API Adresi Değiştirme
#### `.env.development`  `.env.production` 
#### olmak üzere iki farklı dosya vardır biri test diğeri de yayınlama da varsıylan adresi belirler. 
#### `REACT_APP_API_URL=[BURAYA API LİNKİNİZİ YAZABİLİRSİNİZ] `

## Yeni Servis Tanımlama
#### src klasörünün altındaki Services klasörünün içinde Login.js dosyası requestte tanımlanan 3 farklı methodu tetikler siz  yeni bir servis yazacağınız zaman get,post,postJSON ile yazabilirsiniz.

#### post ve postJSON olmak üzere 2 farklı post methodu mevcuttur. postJSON json formatında post işlemi yaparken, post methodu form olarak post eder. Kodlarda detayını inceleyebilirsiniz.

#### src klasörünün altındaki Services klasörünün içinde index.js dosyasına `export * from "dosyanız"` seklinde çıktı verip projenizde tek bir yerden import edip kullanabilirsiniz.

#### Login.js örnek hazırlanmıstır.

###### <3 
###### Takip etmeyi unutmayın...
