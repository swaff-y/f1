import { Driver, DriverProps } from './Driver';
import { Attributes } from './baseModels/Attributes';
import { Collection } from './baseModels/Collection';
import { Eventing } from './baseModels/Eventing';
import { Model } from './baseModels/Model';

export interface SessionProps {
  circuit_key?: number;
  circuit_short_name?: string;
  country_code?: string;
  country_key?: number;
  country_name?: string;
  date_end?: string;
  date_start?: string;
  gmt_offset?: string;
  location?: string;
  meeting_key?: number;
  session_key?: number;
  session_name?: string;
  session_type?: string;
  year?: number;
  drivers?: Collection<Driver, DriverProps>;
}

type SessionBuildProps = {
  data: any;
};

// ToDo: Building a session with its drivers
export class Session extends Model<SessionProps> {
  /** A session consists of:
   * - meeting_key: number - the unique identifier for the meeting
   * - session_key: number - the unique identifier for the session
   * - a collection of drivers
   * - a collection of laps
   * - needs a data variable for total laps
   */
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

  setDrivers(drivers: Collection<Driver, DriverProps>): void {
    this.set({ drivers });
  }

  get drivers(): Collection<Driver, DriverProps> {
    if (this.get('drivers')) return this.get('drivers')!;

    return new Collection<Driver, DriverProps>([], (json: DriverProps) =>
      Driver.buildDriver(json)
    );
  }

  get session_key(): number {
    return this.get('session_key')!;
  }

  get session_name(): string {
    return this.get('session_name')!;
  }

  get session_type(): string {
    return this.get('session_type')!;
  }

  get date_start(): string {
    return this.get('date_start')!;
  }

  get date_end(): string {
    return this.get('date_end')!;
  }

  get location(): string {
    return this.get('location')!;
  }

  get country_name(): string {
    return this.get('country_name')!;
  }

  get circuit_short_name(): string {
    return this.get('circuit_short_name')!;
  }

  get gmt_offset(): string {
    return this.get('gmt_offset')!;
  }

  get year(): number {
    return this.get('year')!;
  }

  get country_code(): string {
    return this.get('country_code')!;
  }

  get circuit_key(): number {
    return this.get('circuit_key')!;
  }

  get meeting_key(): number {
    return this.get('meeting_key')!;
  }

  get country_key(): number {
    return this.get('country_key')!;
  }
}
