import { useEffect } from 'react';

export function useKeyPress(callback: (event: KeyboardEvent) => void, keyCodes: string[]) {
  useEffect(() => {
    const handler = (event) => {
      // Prevent triggering the event when typing in the sandpack editor
      if (event.target.className === 'cm-content') {
        return null;
      }

      if (keyCodes.includes(event.code) && !event.shiftKey && !event.ctrlKey && !event.metaKey && !event.altKey) {
        callback(event);
      }
    };

    window.addEventListener('keydown', handler, { passive: true });
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [callback, keyCodes]);
}
