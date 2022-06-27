import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { EventMixin } from '../lib/Event';
import { ImageObjectMixin } from '../lib/ImageObject';
import { PropertyValueMixin } from '../lib/PropertyValue';
import { ThingMixin } from '../lib/Thing';

export const ThingBundle = [
  ActionMixin as Mixin,
  CreativeWorkMixin as Mixin,
  EventMixin as Mixin,
  ImageObjectMixin as Mixin,
  PropertyValueMixin as Mixin,
  ThingMixin as Mixin];
