import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RadioChannelMixin } from '../RadioChannel';
import { FMRadioChannelMixin } from '../FMRadioChannel';

export const FMRadioChannelDependencies = [
  RadioChannelMixin as Mixin,
  FMRadioChannelMixin as Mixin];
