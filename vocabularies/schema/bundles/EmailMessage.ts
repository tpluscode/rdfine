import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EmailMessageMixin } from '../lib/EmailMessage';
import { MessageMixin } from '../lib/Message';

export const EmailMessageBundle = [
  EmailMessageMixin as Mixin,
  MessageMixin as Mixin];
