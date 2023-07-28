import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface Beach<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function BeachMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Beach & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BeachClass extends CivicStructureMixin(Resource) {
  }
  return BeachClass as any
}

class BeachImpl extends BeachMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Beach>) {
    super(arg, init)
    this.types.add(schema.Beach)
  }

  static readonly __mixins: Mixin[] = [BeachMixin, CivicStructureMixin];
}
BeachMixin.appliesTo = schema.Beach
BeachMixin.Class = BeachImpl

export const fromPointer = createFactory<Beach>([CivicStructureMixin, BeachMixin], { types: [schema.Beach] });
