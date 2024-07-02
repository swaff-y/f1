import { Eventing } from './Eventing';

export class Collection<T, K> {
  private models: T[] = [];
  events: Eventing = new Eventing();

  constructor(private data: any, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    this.models.push(this.deserialize(this.data));
    this.trigger('change');
  }

  getIndex(index: number) {
    return this.data?.[index];
  }
}
