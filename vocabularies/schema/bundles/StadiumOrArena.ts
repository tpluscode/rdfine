import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { SportsActivityLocationMixin } from '../SportsActivityLocation';
import { StadiumOrArenaMixin } from '../StadiumOrArena';

export const StadiumOrArenaBundle = [
  CivicStructureMixin as Mixin,
  SportsActivityLocationMixin as Mixin,
  StadiumOrArenaMixin as Mixin];
