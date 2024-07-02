import axios, { AxiosInstance } from 'axios';

// const API_URL = 'https://api.openf1.org/v1/';
const API_URL = 'http://localhost:3000';

const CLIENT = axios.create({
  baseURL: API_URL,
});

export class OpenF1API {
  client: AxiosInstance = CLIENT;

  fetchMeetings = async ({ year }: { year: string }) => {
    const response = await this.client.get('meetings', {
      params: {
        year,
      },
    });
    if (!response.data) throw new Error('No meetings found');

    return response.data;
  };

  fetchMeeting = async (meeting_key: number) => {
    const response = await this.client.get(`meetings`, {
      params: {
        meeting_key: meeting_key,
      },
    });
    if (!response.data) throw new Error('No meeting with that key found');

    return response.data;
  };
}
