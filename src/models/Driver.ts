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
}
