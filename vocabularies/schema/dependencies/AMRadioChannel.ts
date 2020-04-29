import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RadioChannelMixin } from '../RadioChannel';
import { AMRadioChannelMixin } from '../AMRadioChannel';

export const AMRadioChannelDependencies = [
  RadioChannelMixin as Mixin,
  AMRadioChannelMixin as Mixin];
