export const bpmToHz = (tempo: number, subDiv = 1) => {
  const out = (tempo * (1 / 60)) / subDiv;
  return out;
};

export const bpmToMs = (bpm: number) => {
  return 60000 / bpm;
};

export const msToBpm = (ms: number) => {
  return 60000 / ms;
};

// 120 bpm = 2 hz
// 2 hz = 500ms
// 500ms = 120 bpm

export const average = (vals: number[]) => (vals.length > 0 ? vals.reduce((acc, val) => acc + val) / vals.length : 0);
