/**
 * function to convert date into blog date format
 * 
 * @params {string} date blog added on hashnode 
 * @returns {string} returns blog date
 */
export function getBlogDate(date: string): string{
    const dateAdded: Date = new Date(date);
    const publishedDate: number = dateAdded.getDate();
    const publishedMonth: string = dateAdded.toLocaleString('default', { month: 'short' });

    return `${publishedDate} ${publishedMonth}`; // ex: 17 Mar
}