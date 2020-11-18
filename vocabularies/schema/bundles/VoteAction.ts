import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ChooseActionMixin } from '../lib/ChooseAction';
import { VoteActionMixin } from '../lib/VoteAction';
import { PersonMixin } from '../lib/Person';

export const VoteActionBundle = [
  ChooseActionMixin as Mixin,
  VoteActionMixin as Mixin,
  PersonMixin as Mixin];
