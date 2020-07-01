import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RadioChannelMixin } from '../RadioChannel';
import { AMRadioChannelMixin } from '../AMRadioChannel';

export const AMRadioChannelBundle = [
  RadioChannelMixin as Mixin,
  AMRadioChannelMixin as Mixin];
