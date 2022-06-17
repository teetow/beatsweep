export const bpmToHz = (tempo: number, subDiv = 1) => {
  const out = (tempo * (1 / 60)) / subDiv;
  return out;
};

export const bpmToMs = (bpm: number) => {
  return 60000 / bpm;
};

// 120 bpm = 2 hz
// 2 hz = 500
