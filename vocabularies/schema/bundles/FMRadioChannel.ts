import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RadioChannelMixin } from '../lib/RadioChannel';
import { FMRadioChannelMixin } from '../lib/FMRadioChannel';

export const FMRadioChannelBundle = [
  RadioChannelMixin as Mixin,
  FMRadioChannelMixin as Mixin];
