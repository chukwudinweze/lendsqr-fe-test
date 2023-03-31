export const formatDate = (time: string): string => {
  // Create a new Date object
  const utcTime: Date = new Date(time);

  // Define options for formatting the date and time strings
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  // Formating date and time strings using the current locale and the specified options
  const localDateString: string = utcTime.toLocaleDateString("en-US", options);

  return localDateString;
};
