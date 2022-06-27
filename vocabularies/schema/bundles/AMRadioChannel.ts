import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AMRadioChannelMixin } from '../lib/AMRadioChannel';
import { RadioChannelMixin } from '../lib/RadioChannel';

export const AMRadioChannelBundle = [
  AMRadioChannelMixin as Mixin,
  RadioChannelMixin as Mixin];
