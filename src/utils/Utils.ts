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

  static createParamsFromString<T extends Record<string, any>>(
    queryString: string
  ): T {
    const pairs = queryString.substring(1).split('&');

    const queryObject = pairs.reduce((acc, pair) => {
      const [key, value] = pair.split('=');
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    // // Initialize params object based on the provided structure
    // const params: any = {};

    // // Check the filter type and set the params accordingly
    // if (queryObject.filter === 'meeting_name') {
    //   params.meeting_name = queryObject.value;
    // } else if (queryObject.filter === 'meeting_key') {
    //   params.meeting_key = parseInt(queryObject.value);
    // } else if (queryObject.filter === 'year') {
    //   // Assuming 'year' needs to be handled differently or just an example
    //   // Adjust based on actual requirements
    //   params.year = queryObject.value;
    // }

    return queryObject as T;
  }
}
