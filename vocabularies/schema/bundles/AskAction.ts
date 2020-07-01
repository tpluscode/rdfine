import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommunicateActionMixin } from '../CommunicateAction';
import { AskActionMixin } from '../AskAction';
import { QuestionMixin } from '../Question';

export const AskActionBundle = [
  CommunicateActionMixin as Mixin,
  AskActionMixin as Mixin,
  QuestionMixin as Mixin];
