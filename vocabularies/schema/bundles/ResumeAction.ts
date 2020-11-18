import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ControlActionMixin } from '../lib/ControlAction';
import { ResumeActionMixin } from '../lib/ResumeAction';

export const ResumeActionBundle = [
  ControlActionMixin as Mixin,
  ResumeActionMixin as Mixin];
