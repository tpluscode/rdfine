import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntransitiveActivityMixin } from '../lib/IntransitiveActivity';
import { QuestionMixin } from '../lib/Question';
import { ObjectMixin } from '../lib/Object';
import { LinkMixin } from '../lib/Link';

export const QuestionBundle = [
  IntransitiveActivityMixin as Mixin,
  QuestionMixin as Mixin,
  ObjectMixin as Mixin,
  LinkMixin as Mixin];
