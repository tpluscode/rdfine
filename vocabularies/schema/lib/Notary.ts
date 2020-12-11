import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LegalServiceMixin } from './LegalService';

export interface Notary<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LegalService<D>, RdfResource<D> {
}

export function NotaryMixin<Base extends Constructor>(Resource: Base): Constructor<Notary> & Base {
  @namespace(schema)
  class NotaryClass extends LegalServiceMixin(Resource) implements Partial<Notary> {
  }
  return NotaryClass
}

class NotaryImpl extends NotaryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Notary>) {
    super(arg, init)
    this.types.add(schema.Notary)
  }

  static readonly __mixins: Mixin[] = [NotaryMixin, LegalServiceMixin];
}
NotaryMixin.appliesTo = schema.Notary
NotaryMixin.Class = NotaryImpl
