import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface Zoo<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function ZooMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Zoo & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ZooClass extends CivicStructureMixin(Resource) {
  }
  return ZooClass as any
}

class ZooImpl extends ZooMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Zoo>) {
    super(arg, init)
    this.types.add(schema.Zoo)
  }

  static readonly __mixins: Mixin[] = [ZooMixin, CivicStructureMixin];
}
ZooMixin.appliesTo = schema.Zoo
ZooMixin.Class = ZooImpl

export const fromPointer = createFactory<Zoo>([CivicStructureMixin, ZooMixin], { types: [schema.Zoo] });
