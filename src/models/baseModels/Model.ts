import { Callback } from './Eventing';

export interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(value: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: string): void;
}

interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export interface HasMeetingKey {
  meeting_key?: number;
}

export class Model<T extends HasMeetingKey> {
  constructor(private attributes: ModelAttributes<T>, private events: Events) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('meeting_key');

    if (typeof id !== 'string') {
      throw new Error('Cannot fetch without an id');
    }
  }
}
