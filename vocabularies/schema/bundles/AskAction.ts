import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AskActionMixin } from '../lib/AskAction';
import { CommunicateActionMixin } from '../lib/CommunicateAction';
import { QuestionMixin } from '../lib/Question';

export const AskActionBundle = [
  AskActionMixin as Mixin,
  CommunicateActionMixin as Mixin,
  QuestionMixin as Mixin];
