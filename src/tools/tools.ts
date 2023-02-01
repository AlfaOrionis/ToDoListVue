export const adjustHeight = (e: Event) => {
  (e.target as HTMLInputElement).style.height = "auto";
  (e.target as HTMLInputElement).style.height = `${
    (e.target as HTMLInputElement).scrollHeight
  }px`;
};
