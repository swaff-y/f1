import { Attributes } from './Attributes';
import { Collection } from './Collection';
import { Eventing } from './Eventing';
import { Model } from './Model';

export interface MeetingProps {
  circuit_key: number;
  circuit_short_name: string;
  country_code: string;
  country_key: number;
  country_name: string;
  date_start: string;
  gmt_offset: string;
  location: string;
  meeting_key: number;
  meeting_name: string;
  meeting_official_name: string;
  year: number;
}

type MeetingBuildProps = {
  year: string;
  data: any;
};

export class Meeting extends Model<MeetingProps> {
  static buildMeeting(attrs: MeetingProps): Meeting {
    return new Meeting(new Attributes<MeetingProps>(attrs), new Eventing());
  }

  static buildMeetingCollection({
    data,
  }: MeetingBuildProps): Collection<Meeting, MeetingProps> {
    return new Collection<Meeting, MeetingProps>(data, (json: MeetingProps) =>
      Meeting.buildMeeting(json)
    );
  }
}
