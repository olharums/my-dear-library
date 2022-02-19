export const makeFieldRed = (
  element: HTMLElement | HTMLInputElement | HTMLSelectElement | null
): void => {
  element?.classList.add("empty");
};
