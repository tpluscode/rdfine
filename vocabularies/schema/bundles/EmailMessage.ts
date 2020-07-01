import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MessageMixin } from '../Message';
import { EmailMessageMixin } from '../EmailMessage';

export const EmailMessageBundle = [
  MessageMixin as Mixin,
  EmailMessageMixin as Mixin];
