export class Utils {
  static toTitleCase(str: string): string {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  static toISODate(date: string): string {
    return new Date(date).toISOString().split('T')[0];
  }
}
