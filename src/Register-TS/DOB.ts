export const getMaxDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month, 0).getDate();
};

export const monthNames: string[] = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
