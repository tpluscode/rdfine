import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FMRadioChannelMixin } from '../lib/FMRadioChannel';
import { RadioChannelMixin } from '../lib/RadioChannel';

export const FMRadioChannelBundle = [
  FMRadioChannelMixin as Mixin,
  RadioChannelMixin as Mixin];
