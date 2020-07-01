import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../Thing';
import { PropertyValueMixin } from '../PropertyValue';
import { ImageObjectMixin } from '../ImageObject';
import { CreativeWorkMixin } from '../CreativeWork';
import { ActionMixin } from '../Action';
import { EventMixin } from '../Event';

export const ThingBundle = [
  ThingMixin as Mixin,
  PropertyValueMixin as Mixin,
  ImageObjectMixin as Mixin,
  CreativeWorkMixin as Mixin,
  ActionMixin as Mixin,
  EventMixin as Mixin];
