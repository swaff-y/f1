import { Attributes } from './baseModels/Attributes';
import { Collection } from './baseModels/Collection';
import { Eventing } from './baseModels/Eventing';
import { Model } from './baseModels/Model';

export interface SessionProps {
  circuit_key: number;
  circuit_short_name: string;
  country_code: string;
  country_key: number;
  country_name: string;
  date_end: string;
  date_start: string;
  gmt_offset: string;
  location: string;
  meeting_key: number;
  session_key: number;
  session_name: string;
  session_type: string;
  year: number;
}

type SessionBuildProps = {
  data: any;
};

export class Session extends Model<SessionProps> {
  static buildSession(attrs: SessionProps): Session {
    return new Session(new Attributes<SessionProps>(attrs), new Eventing());
  }

  static buildSessionCollection({
    data,
  }: SessionBuildProps): Collection<Session, SessionProps> {
    return new Collection<Session, SessionProps>(data, (json: SessionProps) =>
      Session.buildSession(json)
    );
  }

  get session_key(): number {
    return this.get('session_key');
  }

  get session_name(): string {
    return this.get('session_name');
  }

  get session_type(): string {
    return this.get('session_type');
  }

  get date_start(): string {
    return this.get('date_start');
  }

  get date_end(): string {
    return this.get('date_end');
  }

  get location(): string {
    return this.get('location');
  }

  get country_name(): string {
    return this.get('country_name');
  }

  get circuit_short_name(): string {
    return this.get('circuit_short_name');
  }

  get gmt_offset(): string {
    return this.get('gmt_offset');
  }

  get year(): number {
    return this.get('year');
  }

  get country_code(): string {
    return this.get('country_code');
  }

  get circuit_key(): number {
    return this.get('circuit_key');
  }

  get meeting_key(): number {
    return this.get('meeting_key');
  }

  get country_key(): number {
    return this.get('country_key');
  }
}
