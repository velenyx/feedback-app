export function debounce<T extends (...arguments_: any[]) => any>(
  function_: T,
  wait: number
): (...arguments_: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return function executedFunction(...arguments_: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      function_(...arguments_);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
