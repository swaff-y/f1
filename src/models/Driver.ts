import { Attributes } from './baseModels/Attributes';
import { Collection } from './baseModels/Collection';
import { Eventing } from './baseModels/Eventing';
import { Model } from './baseModels/Model';

export interface DriverProps {
  meeting_key: number;
  broadcast_name: string;
  country_code: string;
  first_name: string;
  full_name: string;
  headshot_url: string;
  last_name: string;
  driver_number: number;
  team_colour: string;
  team_name: string;
  name_acronym: string;
}

type DriverBuildProps = {
  meeting_key: number;
  session_key: number;
  data: any;
};

export class Driver extends Model<DriverProps> {
  static buildDriver(attrs: DriverProps): Driver {
    return new Driver(new Attributes<DriverProps>(attrs), new Eventing());
  }

  static buildDriverCollection({
    data,
  }: DriverBuildProps): Collection<Driver, DriverProps> {
    return new Collection<Driver, DriverProps>(data, (json: DriverProps) =>
      Driver.buildDriver(json)
    );
  }

  get driver_number(): number {
    return this.get('driver_number');
  }

  get full_name(): string {
    return this.get('full_name');
  }

  get team_name(): string {
    return this.get('team_name');
  }

  get team_colour(): string {
    return this.get('team_colour');
  }

  get headshot_url(): string {
    return this.get('headshot_url');
  }

  get broadcast_name(): string {
    return this.get('broadcast_name');
  }

  get country_code(): string {
    return this.get('country_code');
  }

  get name_acronym(): string {
    return this.get('name_acronym');
  }

  get first_name(): string {
    return this.get('first_name');
  }

  get last_name(): string {
    return this.get('last_name');
  }

  get meeting_key(): number {
    return this.get('meeting_key');
  }
}
