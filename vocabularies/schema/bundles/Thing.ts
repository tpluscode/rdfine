import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../lib/Thing';
import { PropertyValueMixin } from '../lib/PropertyValue';
import { ImageObjectMixin } from '../lib/ImageObject';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ActionMixin } from '../lib/Action';
import { EventMixin } from '../lib/Event';

export const ThingBundle = [
  ThingMixin as Mixin,
  PropertyValueMixin as Mixin,
  ImageObjectMixin as Mixin,
  CreativeWorkMixin as Mixin,
  ActionMixin as Mixin,
  EventMixin as Mixin];
