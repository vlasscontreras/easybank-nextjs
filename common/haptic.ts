/**
 * Trigger haptic feedback.
 *
 * @param {number} duration
 */
export const triggerHaptic = (duration: number = 10) => {
  if (typeof navigator.vibrate === 'function') {
    navigator.vibrate(duration);
  }
};
