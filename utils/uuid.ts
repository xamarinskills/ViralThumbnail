/**
 * Generates a UUID v4 string.
 * Uses crypto.randomUUID() if available, otherwise falls back to a manual implementation.
 * This ensures compatibility across different browsers and environments (including non-secure contexts).
 */
export function generateUUID(): string {
  // Check if crypto.randomUUID is available and works
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    try {
      return crypto.randomUUID();
    } catch (e) {
      console.warn('crypto.randomUUID() failed, falling back to manual generation:', e);
    }
  }

  // Fallback implementation (UUID v4) using Math.random
  // Note: Math.random is not cryptographically secure, but sufficient for ID generation in this context
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
