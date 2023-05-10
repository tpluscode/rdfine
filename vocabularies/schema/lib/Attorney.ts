import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LegalServiceMixin } from './LegalService.js';

export interface Attorney<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LegalService<D>, rdfine.RdfResource<D> {
}

export function AttorneyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Attorney> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AttorneyClass extends LegalServiceMixin(Resource) implements Partial<Attorney> {
  }
  return AttorneyClass
}

class AttorneyImpl extends AttorneyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Attorney>) {
    super(arg, init)
    this.types.add(schema.Attorney)
  }

  static readonly __mixins: Mixin[] = [AttorneyMixin, LegalServiceMixin];
}
AttorneyMixin.appliesTo = schema.Attorney
AttorneyMixin.Class = AttorneyImpl

export const fromPointer = createFactory<Attorney>([LegalServiceMixin, AttorneyMixin], { types: [schema.Attorney] });
