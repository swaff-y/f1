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
        meeting_key,
      },
    });
    if (!response.data) throw new Error('No meeting with that key found');

    return response.data;
  };

  fetchDrivers = async ({
    meeting_key,
    session_key,
  }: {
    meeting_key: number;
    session_key: number;
  }) => {
    const response = await this.client.get('drivers', {
      params: {
        meeting_key,
        session_key,
      },
    });
    if (!response.data) throw new Error('No drivers found');

    return response.data;
  };

  fetchDriver = async (
    driver_number: number,
    meeting_key: number,
    session_key: number
  ) => {
    const response = await this.client.get(`drivers`, {
      params: {
        driver_number,
        meeting_key,
        session_key,
      },
    });
    if (!response.data) throw new Error('No driver with those keys found');

    return response.data;
  };

  fetchSessions = async ({ meeting_key }: { meeting_key: number }) => {
    const response = await this.client.get('sessions', {
      params: {
        meeting_key,
      },
    });
    if (!response.data) throw new Error('No sessions found');

    return response.data;
  };

  fetchSession = async (meeting_key: number, session_key: number) => {
    const response = await this.client.get(`sessions`, {
      params: {
        meeting_key,
        session_key,
      },
    });
    if (!response.data) throw new Error('No session with those keys found');

    return response.data;
  };
}
