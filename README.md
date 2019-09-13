# react-typescript-electron-boilerplate
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

## Technologies
- (React + Electron + TypeScript + AntDesign) = UI <3
- (Context API + RxJS) = Declarative, human-friendly state management <3
- (Express + ngrok + qrcode) =  API for rapid mobile development <3

## State management with Context and RxJS
- Each component is subscribed to its own topic, receiving relevant bits of data persisting to its own local state without needing to first receive it from the Provider store.

- This makes way for a semantic separation of concerns between what I call macros and micros: the Provider store can handle app-level changes (macros), while the components can define their own fine-grained flow of reactions (micros) to those changes. Additionally, data can be sent to and between components from anywhere inside the application. 

## Why?
- Separation of concerns between app- and component-level state

- Human-friendly code

- Reduce the amount of energy spent on programming what can often be haphazard lifecycle hooks to prevent unnecessary rerendering

## Getting started
- Install dependencies with `yarn`
- Fire up dev scripts with `yarn start`
- That's it!
- Check `package.json` for build scripts
