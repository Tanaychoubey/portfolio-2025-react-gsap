declare module 'locomotive-scroll' {
  interface ScrollInstance {
    scroll: {
      y: number;
    };
  }

  export default class LocomotiveScroll {
    constructor(options: any);
    destroy(): void;
    update(): void;
    stop(): void;
    start(): void;
    scrollTo(target: string | number | HTMLElement, options?: { offset?: number }): void;
    on(event: string, func: any): void;
    off(event: string, func: any): void;
    scroll: {
      instance: ScrollInstance;
    };
  }
}