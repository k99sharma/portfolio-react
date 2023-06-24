/**
 * function to convert blog date into required format date
 * 
 * @param utcDate {string}
 * @returns 
 */
export function formatBlogDate(utcDate: string) {
    const date = new Date(utcDate);
    const localDate = date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  
    return localDate;
  }