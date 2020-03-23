import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LegalServiceMixin from './LegalService';

export interface Notary extends Schema.LegalService, RdfResource {
}

export default function NotaryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class NotaryClass extends LegalServiceMixin(Resource) implements Notary {
  }
  return NotaryClass
}

class NotaryImpl extends NotaryMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Notary)
  }
}
NotaryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Notary)
NotaryMixin.Class = NotaryImpl
