import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface Crematorium<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function CrematoriumMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Crematorium & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CrematoriumClass extends CivicStructureMixin(Resource) {
  }
  return CrematoriumClass as any
}

class CrematoriumImpl extends CrematoriumMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Crematorium>) {
    super(arg, init)
    this.types.add(schema.Crematorium)
  }

  static readonly __mixins: Mixin[] = [CrematoriumMixin, CivicStructureMixin];
}
CrematoriumMixin.appliesTo = schema.Crematorium
CrematoriumMixin.Class = CrematoriumImpl

export const fromPointer = createFactory<Crematorium>([CivicStructureMixin, CrematoriumMixin], { types: [schema.Crematorium] });
