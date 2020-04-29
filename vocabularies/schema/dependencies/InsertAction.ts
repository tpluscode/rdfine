import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AddActionMixin } from '../AddAction';
import { InsertActionMixin } from '../InsertAction';
import { PlaceMixin } from '../Place';

export const InsertActionDependencies = [
  AddActionMixin as Mixin,
  InsertActionMixin as Mixin,
  PlaceMixin as Mixin];
