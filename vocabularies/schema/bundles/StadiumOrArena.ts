import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';
import { StadiumOrArenaMixin } from '../lib/StadiumOrArena';

export const StadiumOrArenaBundle = [
  CivicStructureMixin as Mixin,
  SportsActivityLocationMixin as Mixin,
  StadiumOrArenaMixin as Mixin];
