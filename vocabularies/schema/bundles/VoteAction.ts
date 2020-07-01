import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ChooseActionMixin } from '../ChooseAction';
import { VoteActionMixin } from '../VoteAction';
import { PersonMixin } from '../Person';

export const VoteActionBundle = [
  ChooseActionMixin as Mixin,
  VoteActionMixin as Mixin,
  PersonMixin as Mixin];
