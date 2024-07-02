import { Attributes } from './Attributes';
import { Collection } from './Collection';
import { Eventing } from './Eventing';
import { Model } from './Model';

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
  year: string;
  data: any;
};

export class Driver extends Model<DriverProps> {
  static buildDriver(attrs: DriverProps): Driver {
    return new Driver(new Attributes<DriverProps>(attrs), new Eventing());
  }

  static buildDriverCollection({
    year,
    data,
  }: DriverBuildProps): Collection<Driver, DriverProps> {
    return new Collection<Driver, DriverProps>(
      year,
      data,
      (json: DriverProps) => Driver.buildDriver(json)
    );
  }
}
