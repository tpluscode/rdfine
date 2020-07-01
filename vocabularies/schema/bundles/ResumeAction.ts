import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ControlActionMixin } from '../ControlAction';
import { ResumeActionMixin } from '../ResumeAction';

export const ResumeActionBundle = [
  ControlActionMixin as Mixin,
  ResumeActionMixin as Mixin];
