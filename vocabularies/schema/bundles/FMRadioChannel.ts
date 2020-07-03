import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RadioChannelMixin } from '../RadioChannel';
import { FMRadioChannelMixin } from '../FMRadioChannel';

export const FMRadioChannelBundle = [
  RadioChannelMixin as Mixin,
  FMRadioChannelMixin as Mixin];
