import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LegalServiceMixin } from './LegalService.js';

export interface Notary<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LegalService<D>, rdfine.RdfResource<D> {
}

export function NotaryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Notary> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
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

export const fromPointer = createFactory<Notary>([LegalServiceMixin, NotaryMixin], { types: [schema.Notary] });
