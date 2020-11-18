import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RadioChannelMixin } from '../lib/RadioChannel';
import { AMRadioChannelMixin } from '../lib/AMRadioChannel';

export const AMRadioChannelBundle = [
  RadioChannelMixin as Mixin,
  AMRadioChannelMixin as Mixin];
