declare module "@elemaudio/web-renderer" {
  import WebRenderer from "@elemaudio/web-renderer";

  export default class extends WebRenderer {
      __worklet: any;
      __renderer: any;
    __timer: any;
    __batch: any;
    constructor();
    initialize(audioContext: any, workletOptions?: {}): Promise<any>;
    render(...args: any[]): {
      nodesAdded: any;
      edgesAdded: any;
      propsWritten: any;
      elapsedTimeMs: number;
    };
    updateVirtualFileSystem(vfs: any): void;
    reset(): void;
    
    // re-add missing eventEmitter methods
    on: (event: string, callback: () => void) => void;
}
}
