export const stopTimer = (startTime: bigint) => {
  const endTime = process.hrtime.bigint();
  const timeDifference = Number(endTime - startTime) / 1e6;

  return timeDifference;
};
