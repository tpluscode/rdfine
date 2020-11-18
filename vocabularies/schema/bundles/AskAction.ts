import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../lib/CommunicateAction';
import { AskActionMixin } from '../lib/AskAction';
import { QuestionMixin } from '../lib/Question';

export const AskActionBundle = [
  CommunicateActionMixin as Mixin,
  AskActionMixin as Mixin,
  QuestionMixin as Mixin];
