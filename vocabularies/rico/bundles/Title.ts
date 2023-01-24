import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InstantiationMixin } from '../lib/Instantiation';
import { NameMixin } from '../lib/Name';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RuleMixin } from '../lib/Rule';
import { TitleMixin } from '../lib/Title';

export const TitleBundle = [
  InstantiationMixin as Mixin,
  NameMixin as Mixin,
  RecordResourceMixin as Mixin,
  RuleMixin as Mixin,
  TitleMixin as Mixin];
