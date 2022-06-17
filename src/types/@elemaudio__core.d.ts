declare module "@elemaudio/core" {
  declare type NodeRepr_symbol$1 = Symbol;

  declare abstract class NodeRepr_props {
    protected opaque: any;
  }
  declare type NodeRepr_renderContext = {
    readonly sampleRate: number;
    readonly blockSize: number;
    readonly numInputs: number;
    readonly numOutputs: number;
  };
  declare type NodeRepr_symbol = NodeRepr_symbol$1;
  declare type NodeRepr_t =
    | number
    | {
        readonly symbol: NodeRepr_symbol;
        readonly kind:
          | {
              NAME: "Composite";
              VAL: (_1: {
                readonly props: NodeRepr_props;
                readonly context: NodeRepr_renderContext;
                readonly children: NodeRepr_t[];
              }) => NodeRepr_t;
            }
          | {
              NAME: "Primitive";
              VAL: string;
            };
        readonly props: NodeRepr_props;
        readonly children: NodeRepr_t[];
      };
  declare abstract class Renderer_t {
    protected opaque: any;
  }
  declare const NodeRepr_createPrimitive: <T1>(
    kind: string,
    props: T1,
    children: NodeRepr_t[]
  ) => NodeRepr_t;
  declare const NodeRepr_createComposite: <T1>(
    kind: (_1: {
      readonly children: NodeRepr_t[];
      readonly context: NodeRepr_renderContext;
      readonly props: NodeRepr_props;
    }) => NodeRepr_t,
    props: T1,
    children: NodeRepr_t[]
  ) => NodeRepr_t;
  declare const renderWith: (
    renderer: Renderer_t,
    graphs: NodeRepr_t[]
  ) => number[];
  declare const stepGarbageCollector: (renderer: Renderer_t) => void;

  declare function resolve(n: NodeRepr_t | number): NodeRepr_t;
  declare function isNode(n: any): boolean;
  declare function createNode(
    kind:
      | Parameters<typeof NodeRepr_createPrimitive>[0]
      | Parameters<typeof NodeRepr_createComposite>[0],
    props: any,
    children: Array<NodeRepr_t | number>
  ): NodeRepr_t;

  declare type ConstNodeProps = {
    key?: string;
    value: number;
  };
  declare function constant(props: ConstNodeProps): NodeRepr_t;

  declare type IdentityNodeProps = {
    key?: string;
    channel?: number;
  };
  declare function identity(x: NodeRepr_t | number): NodeRepr_t;
  declare function identity(props: IdentityNodeProps): NodeRepr_t;
  declare function identity(
    props: IdentityNodeProps,
    x: NodeRepr_t | number
  ): NodeRepr_t;

  declare const stdlib: {
    const: typeof constant;
    in: typeof identity;
    ms2samps(t: number | NodeRepr_t): number | NodeRepr_t;
    tau2pole(t: number | NodeRepr_t): number | NodeRepr_t;
    db2gain(db: number | NodeRepr_t): number | NodeRepr_t;
    gain2db(gain: number | NodeRepr_t): number | NodeRepr_t;
    select(
      g: number | NodeRepr_t,
      a: number | NodeRepr_t,
      b: number | NodeRepr_t
    ): number | NodeRepr_t;
    hann(t: number | NodeRepr_t): number | NodeRepr_t;
    train(rate: number | NodeRepr_t): NodeRepr_t;
    train(
      props: {
        key?: string;
      },
      rate: number | NodeRepr_t
    ): NodeRepr_t;
    cycle(rate: number | NodeRepr_t): NodeRepr_t;
    cycle(
      props: {
        key?: string;
      },
      rate: number | NodeRepr_t
    ): NodeRepr_t;
    saw(rate: number | NodeRepr_t): NodeRepr_t;
    saw(
      props: {
        key?: string;
      },
      rate: number | NodeRepr_t
    ): NodeRepr_t;
    square(rate: number | NodeRepr_t): NodeRepr_t;
    square(
      props: {
        key?: string;
      },
      rate: number | NodeRepr_t
    ): NodeRepr_t;
    triangle(rate: number | NodeRepr_t): NodeRepr_t;
    triangle(
      props: {
        key?: string;
      },
      rate: number | NodeRepr_t
    ): NodeRepr_t;
    blepsaw(rate: number | NodeRepr_t): NodeRepr_t;
    blepsaw(
      props: {
        key?: string;
      },
      rate: number | NodeRepr_t
    ): NodeRepr_t;
    blepsquare(rate: number | NodeRepr_t): NodeRepr_t;
    blepsquare(
      props: {
        key?: string;
      },
      rate: number | NodeRepr_t
    ): NodeRepr_t;
    bleptriangle(rate: number | NodeRepr_t): NodeRepr_t;
    bleptriangle(
      props: {
        key?: string;
      },
      rate: number | NodeRepr_t
    ): NodeRepr_t;
    noise(): NodeRepr_t;
    noise(props: { key?: string; seed?: number }): NodeRepr_t;
    pinknoise(): NodeRepr_t;
    pinknoise(props: { key?: string; seed?: number }): NodeRepr_t;
    identity(x: number | NodeRepr_t): NodeRepr_t;
    identity(props: { key?: string; channel?: number }): NodeRepr_t;
    identity(
      props: {
        key?: string;
        channel?: number;
      },
      x: number | NodeRepr_t
    ): NodeRepr_t;
    sin(x: number | NodeRepr_t): number | NodeRepr_t;
    sin(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): number | NodeRepr_t;
    cos(x: number | NodeRepr_t): number | NodeRepr_t;
    cos(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): number | NodeRepr_t;
    tan(x: number | NodeRepr_t): number | NodeRepr_t;
    tan(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): number | NodeRepr_t;
    tanh(x: number | NodeRepr_t): number | NodeRepr_t;
    tanh(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): number | NodeRepr_t;
    asinh(x: number | NodeRepr_t): number | NodeRepr_t;
    asinh(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): number | NodeRepr_t;
    ln(x: number | NodeRepr_t): number | NodeRepr_t;
    ln(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): number | NodeRepr_t;
    log(x: number | NodeRepr_t): number | NodeRepr_t;
    log(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): number | NodeRepr_t;
    log2(x: number | NodeRepr_t): number | NodeRepr_t;
    log2(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): number | NodeRepr_t;
    ceil(x: number | NodeRepr_t): number | NodeRepr_t;
    ceil(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): number | NodeRepr_t;
    floor(x: number | NodeRepr_t): number | NodeRepr_t;
    floor(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): number | NodeRepr_t;
    sqrt(x: number | NodeRepr_t): number | NodeRepr_t;
    sqrt(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): number | NodeRepr_t;
    exp(x: number | NodeRepr_t): number | NodeRepr_t;
    exp(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): number | NodeRepr_t;
    abs(x: number | NodeRepr_t): number | NodeRepr_t;
    abs(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): number | NodeRepr_t;
    le(a: number | NodeRepr_t, b: number | NodeRepr_t): number | NodeRepr_t;
    le(
      props: {
        key?: string;
      },
      a: number | NodeRepr_t,
      b: number | NodeRepr_t
    ): number | NodeRepr_t;
    leq(a: number | NodeRepr_t, b: number | NodeRepr_t): number | NodeRepr_t;
    leq(
      props: {
        key?: string;
      },
      a: number | NodeRepr_t,
      b: number | NodeRepr_t
    ): number | NodeRepr_t;
    ge(a: number | NodeRepr_t, b: number | NodeRepr_t): number | NodeRepr_t;
    ge(
      props: {
        key?: string;
      },
      a: number | NodeRepr_t,
      b: number | NodeRepr_t
    ): number | NodeRepr_t;
    geq(a: number | NodeRepr_t, b: number | NodeRepr_t): number | NodeRepr_t;
    geq(
      props: {
        key?: string;
      },
      a: number | NodeRepr_t,
      b: number | NodeRepr_t
    ): number | NodeRepr_t;
    pow(a: number | NodeRepr_t, b: number | NodeRepr_t): number | NodeRepr_t;
    pow(
      props: {
        key?: string;
      },
      a: number | NodeRepr_t,
      b: number | NodeRepr_t
    ): number | NodeRepr_t;
    eq(a: number | NodeRepr_t, b: number | NodeRepr_t): number | NodeRepr_t;
    eq(
      props: {
        key?: string;
      },
      a: number | NodeRepr_t,
      b: number | NodeRepr_t
    ): number | NodeRepr_t;
    and(a: number | NodeRepr_t, b: number | NodeRepr_t): number | NodeRepr_t;
    and(
      props: {
        key?: string;
      },
      a: number | NodeRepr_t,
      b: number | NodeRepr_t
    ): number | NodeRepr_t;
    or(a: number | NodeRepr_t, b: number | NodeRepr_t): number | NodeRepr_t;
    or(
      props: {
        key?: string;
      },
      a: number | NodeRepr_t,
      b: number | NodeRepr_t
    ): number | NodeRepr_t;
    add(...args: (number | NodeRepr_t)[]): number | NodeRepr_t;
    add(
      props: {
        key?: string;
      },
      ...args: (number | NodeRepr_t)[]
    ): number | NodeRepr_t;
    sub(...args: (number | NodeRepr_t)[]): number | NodeRepr_t;
    sub(
      props: {
        key?: string;
      },
      ...args: (number | NodeRepr_t)[]
    ): number | NodeRepr_t;
    mul(...args: (number | NodeRepr_t)[]): number | NodeRepr_t;
    mul(
      props: {
        key?: string;
      },
      ...args: (number | NodeRepr_t)[]
    ): number | NodeRepr_t;
    div(...args: (number | NodeRepr_t)[]): number | NodeRepr_t;
    div(
      props: {
        key?: string;
      },
      ...args: (number | NodeRepr_t)[]
    ): number | NodeRepr_t;
    mod(...args: (number | NodeRepr_t)[]): number | NodeRepr_t;
    mod(
      props: {
        key?: string;
      },
      ...args: (number | NodeRepr_t)[]
    ): number | NodeRepr_t;
    min(...args: (number | NodeRepr_t)[]): number | NodeRepr_t;
    min(
      props: {
        key?: string;
      },
      ...args: (number | NodeRepr_t)[]
    ): number | NodeRepr_t;
    max(...args: (number | NodeRepr_t)[]): number | NodeRepr_t;
    max(
      props: {
        key?: string;
      },
      ...args: (number | NodeRepr_t)[]
    ): number | NodeRepr_t;
    smooth(p: number | NodeRepr_t, x: number | NodeRepr_t): NodeRepr_t;
    smooth(
      props: {
        key?: string;
      },
      p: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    sm(x: number | NodeRepr_t): NodeRepr_t;
    sm(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): NodeRepr_t;
    zero(
      b0: number | NodeRepr_t,
      b1: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    zero(
      props: {
        key?: string;
      },
      b0: number | NodeRepr_t,
      b1: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    dcblock(x: number | NodeRepr_t): NodeRepr_t;
    dcblock(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): NodeRepr_t;
    df11(
      b0: number | NodeRepr_t,
      b1: number | NodeRepr_t,
      a1: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    df11(
      props: {
        key?: string;
      },
      b0: number | NodeRepr_t,
      b1: number | NodeRepr_t,
      a1: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    lowpass(
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    lowpass(
      props: {
        key?: string;
      },
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    highpass(
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    highpass(
      props: {
        key?: string;
      },
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    bandpass(
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    bandpass(
      props: {
        key?: string;
      },
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    notch(
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    notch(
      props: {
        key?: string;
      },
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    allpass(
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    allpass(
      props: {
        key?: string;
      },
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    peak(
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      gainDecibels: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    peak(
      props: {
        key?: string;
      },
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      gainDecibels: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    lowshelf(
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      gainDecibels: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    lowshelf(
      props: {
        key?: string;
      },
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      gainDecibels: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    highshelf(
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      gainDecibels: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    highshelf(
      props: {
        key?: string;
      },
      fc: number | NodeRepr_t,
      q: number | NodeRepr_t,
      gainDecibels: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    pink(x: number | NodeRepr_t): NodeRepr_t;
    pink(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): NodeRepr_t;
    adsr(
      attackSec: number | NodeRepr_t,
      decaySec: number | NodeRepr_t,
      sustain: number | NodeRepr_t,
      releaseSec: number | NodeRepr_t,
      gate: number | NodeRepr_t
    ): NodeRepr_t;
    adsr(
      props: {
        key?: string;
      },
      attackSec: number | NodeRepr_t,
      decaySec: number | NodeRepr_t,
      sustain: number | NodeRepr_t,
      releaseSec: number | NodeRepr_t,
      gate: number | NodeRepr_t
    ): NodeRepr_t;
    compress(
      attackMs: number | NodeRepr_t,
      releaseMs: number | NodeRepr_t,
      threshold: number | NodeRepr_t,
      ratio: number | NodeRepr_t,
      sidechain: number | NodeRepr_t,
      xn: number | NodeRepr_t
    ): NodeRepr_t;
    compress(
      props: {
        key?: string;
      },
      attackMs: number | NodeRepr_t,
      releaseMs: number | NodeRepr_t,
      threshold: number | NodeRepr_t,
      ratio: number | NodeRepr_t,
      sidechain: number | NodeRepr_t,
      xn: number | NodeRepr_t
    ): NodeRepr_t;
    constant(props: { key?: string; value: number }): NodeRepr_t;
    sr(): NodeRepr_t;
    time(): NodeRepr_t;
    counter(gate: number | NodeRepr_t): NodeRepr_t;
    counter(
      props: {
        key?: string;
      },
      gate: number | NodeRepr_t
    ): NodeRepr_t;
    accum(xn: number | NodeRepr_t, reset: number | NodeRepr_t): NodeRepr_t;
    accum(
      props: {
        key?: string;
      },
      xn: number | NodeRepr_t,
      reset: number | NodeRepr_t
    ): NodeRepr_t;
    phasor(rate: number | NodeRepr_t, reset: number | NodeRepr_t): NodeRepr_t;
    phasor(
      props: {
        key?: string;
      },
      rate: number | NodeRepr_t,
      reset: number | NodeRepr_t
    ): NodeRepr_t;
    latch(t: number | NodeRepr_t, x: number | NodeRepr_t): NodeRepr_t;
    latch(
      props: {
        key?: string;
      },
      t: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    maxhold(x: number | NodeRepr_t, reset: number | NodeRepr_t): NodeRepr_t;
    maxhold(
      props: {
        key?: string;
        hold?: number;
      },
      x: number | NodeRepr_t,
      reset: number | NodeRepr_t
    ): NodeRepr_t;
    rand(): NodeRepr_t;
    rand(props: { key?: string; seed?: number }): NodeRepr_t;
    metro(): NodeRepr_t;
    metro(props: { interval: NodeRepr_t | number }): NodeRepr_t;
    sample(
      props: {
        key?: string;
        path?: string;
        channel?: number;
        data?: number[] | Float32Array;
        mode?: string;
        startOffset?: number;
        stopOffset?: number;
      },
      trigger: number | NodeRepr_t,
      rate: number | NodeRepr_t
    ): NodeRepr_t;
    table(
      props: {
        key?: string;
        path?: string;
        channel?: number;
        data?: number[] | Float32Array;
      },
      t: number | NodeRepr_t
    ): NodeRepr_t;
    convolve(
      props: {
        key?: string;
        path?: string;
      },
      x: number | NodeRepr_t
    ): NodeRepr_t;
    seq(
      props: {
        key?: string;
        seq?: number[];
        offset?: number;
        hold?: boolean;
        loop?: boolean;
      },
      trigger: number | NodeRepr_t,
      reset: number | NodeRepr_t
    ): NodeRepr_t;
    seq2(
      props: {
        key?: string;
        seq?: number[];
        offset?: number;
        hold?: boolean;
        loop?: boolean;
      },
      trigger: number | NodeRepr_t,
      reset: number | NodeRepr_t
    ): NodeRepr_t;
    sparseq(
      props: {
        key?: string;
        seq?: {
          value: number;
          tickTime: number;
        }[];
        offset?: number;
        loop?: boolean | number[];
      },
      trigger: number | NodeRepr_t,
      reset: number | NodeRepr_t
    ): NodeRepr_t;
    pole(p: number | NodeRepr_t, x: number | NodeRepr_t): NodeRepr_t;
    pole(
      props: {
        key?: string;
      },
      p: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    env(
      atkPole: number | NodeRepr_t,
      relPole: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    env(
      props: {
        key?: string;
      },
      atkPole: number | NodeRepr_t,
      relPole: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    z(x: number | NodeRepr_t): NodeRepr_t;
    z(
      props: {
        key?: string;
      },
      x: number | NodeRepr_t
    ): NodeRepr_t;
    delay(
      props: {
        key?: string;
        size: number;
      },
      len: number | NodeRepr_t,
      fb: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    sdelay(
      props: {
        key?: string;
        size: number;
      },
      x: number | NodeRepr_t
    ): NodeRepr_t;
    biquad(
      b0: number | NodeRepr_t,
      b1: number | NodeRepr_t,
      b2: number | NodeRepr_t,
      a1: number | NodeRepr_t,
      a2: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    biquad(
      props: {
        key?: string;
      },
      b0: number | NodeRepr_t,
      b1: number | NodeRepr_t,
      b2: number | NodeRepr_t,
      a1: number | NodeRepr_t,
      a2: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    tapIn(props: { name: string }): NodeRepr_t;
    tapOut(
      props: {
        name: string;
        size?: number;
      },
      x: number | NodeRepr_t
    ): NodeRepr_t;
    meter(x: number | NodeRepr_t): NodeRepr_t;
    meter(
      props: {
        key?: string;
        name?: string;
      },
      x: number | NodeRepr_t
    ): NodeRepr_t;
    snapshot(trigger: number | NodeRepr_t, x: number | NodeRepr_t): NodeRepr_t;
    snapshot(
      props: {
        key?: string;
        name?: string;
      },
      trigger: number | NodeRepr_t,
      x: number | NodeRepr_t
    ): NodeRepr_t;
    scope(...args: (number | NodeRepr_t)[]): NodeRepr_t;
    scope(
      props: {
        key?: string;
        name?: string;
        size?: number;
        channels?: number;
      },
      ...args: (number | NodeRepr_t)[]
    ): NodeRepr_t;
    fft(x: number | NodeRepr_t): NodeRepr_t;
    fft(
      props: {
        key?: string;
        name?: string;
        size?: number;
      },
      x: number | NodeRepr_t
    ): NodeRepr_t;
  };

  export {
    NodeRepr_t,
    createNode,
    stdlib as el,
    isNode,
    renderWith,
    resolve,
    stdlib,
    stepGarbageCollector,
  };
}
