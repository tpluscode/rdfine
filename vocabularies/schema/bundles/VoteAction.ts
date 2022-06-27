import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ChooseActionMixin } from '../lib/ChooseAction';
import { PersonMixin } from '../lib/Person';
import { VoteActionMixin } from '../lib/VoteAction';

export const VoteActionBundle = [
  ChooseActionMixin as Mixin,
  PersonMixin as Mixin,
  VoteActionMixin as Mixin];
