import { Attributes } from './baseModels/Attributes';
import { Collection } from './baseModels/Collection';
import { Eventing } from './baseModels/Eventing';
import { Model } from './baseModels/Model';

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

  get meeting_key(): number {
    return this.get('meeting_key');
  }

  get meeting_name(): string {
    return this.get('meeting_name');
  }

  get meeting_official_name(): string {
    return this.get('meeting_official_name');
  }

  get year(): number {
    return this.get('year');
  }

  get location(): string {
    return this.get('location');
  }

  get date_start(): string {
    return this.get('date_start');
  }

  get country_name(): string {
    return this.get('country_name');
  }

  get country_code(): string {
    return this.get('country_code');
  }

  get circuit_short_name(): string {
    return this.get('circuit_short_name');
  }

  get gmt_offset(): string {
    return this.get('gmt_offset');
  }

  get circuit_key(): number {
    return this.get('circuit_key');
  }

  get country_key(): number {
    return this.get('country_key');
  }
}
