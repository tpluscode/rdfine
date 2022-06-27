import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntransitiveActivityMixin } from '../lib/IntransitiveActivity';
import { LinkMixin } from '../lib/Link';
import { ObjectMixin } from '../lib/Object';
import { QuestionMixin } from '../lib/Question';

export const QuestionBundle = [
  IntransitiveActivityMixin as Mixin,
  LinkMixin as Mixin,
  ObjectMixin as Mixin,
  QuestionMixin as Mixin];
