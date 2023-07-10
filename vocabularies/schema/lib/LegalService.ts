import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface LegalService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, rdfine.RdfResource<D> {
}

export function LegalServiceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<LegalService & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LegalServiceClass extends LocalBusinessMixin(Resource) {
  }
  return LegalServiceClass as any
}

class LegalServiceImpl extends LegalServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LegalService>) {
    super(arg, init)
    this.types.add(schema.LegalService)
  }

  static readonly __mixins: Mixin[] = [LegalServiceMixin, LocalBusinessMixin];
}
LegalServiceMixin.appliesTo = schema.LegalService
LegalServiceMixin.Class = LegalServiceImpl

export const fromPointer = createFactory<LegalService>([LocalBusinessMixin, LegalServiceMixin], { types: [schema.LegalService] });
