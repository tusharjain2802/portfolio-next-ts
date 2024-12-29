// typewriter-effect.d.ts
declare module 'typewriter-effect/dist/core' {
    interface TypewriterOptions {
      loop?: boolean;
      delay?: number;
      deleteSpeed?: number;
      typingSpeed?: number;
    }
  
    export default class Typewriter {
      constructor(element: HTMLElement, options: TypewriterOptions);
      typeString(str: string): this;
      pauseFor(ms: number): this;
      deleteAll(): this;
      start(): void;
    }
  }
  