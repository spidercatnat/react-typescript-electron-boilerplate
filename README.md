This is very much a work in progress, but feel free to contribute, clone, and fork! Take a peak in package.json for scripts to get started.

```
.
├── public
├── server /* Dev server that runs ngrok with a QR API */
├── src
│   ├── components /* Re-useable bits go here */
│   ├── constants /* Global constants like topics go here */
│   ├── context /* Manage Provider store here */
│   ├── pubsub /* RxJS API/HOC */
│   └── views /* Views go here */
└── utils
    ├── qr /* Generate QR codes */
    └── tunnel /* ngrok tunnel */
```

Technologies: 
- (React + Electron + TypeScript + AntDesign) = UI <3
- (Context API + RxJS) = Declarative, human-friendly state management <3
- (Express + ngrok + qrcode) =  API for rapid mobile development <3