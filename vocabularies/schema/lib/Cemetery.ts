import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface Cemetery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function CemeteryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Cemetery> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CemeteryClass extends CivicStructureMixin(Resource) implements Partial<Cemetery> {
  }
  return CemeteryClass
}

class CemeteryImpl extends CemeteryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Cemetery>) {
    super(arg, init)
    this.types.add(schema.Cemetery)
  }

  static readonly __mixins: Mixin[] = [CemeteryMixin, CivicStructureMixin];
}
CemeteryMixin.appliesTo = schema.Cemetery
CemeteryMixin.Class = CemeteryImpl

export const fromPointer = createFactory<Cemetery>([CivicStructureMixin, CemeteryMixin], { types: [schema.Cemetery] });
