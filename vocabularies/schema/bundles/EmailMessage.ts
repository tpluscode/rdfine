import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MessageMixin } from '../lib/Message';
import { EmailMessageMixin } from '../lib/EmailMessage';

export const EmailMessageBundle = [
  MessageMixin as Mixin,
  EmailMessageMixin as Mixin];
