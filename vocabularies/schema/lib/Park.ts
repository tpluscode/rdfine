import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface Park<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function ParkMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Park> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ParkClass extends CivicStructureMixin(Resource) implements Partial<Park> {
  }
  return ParkClass
}

class ParkImpl extends ParkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Park>) {
    super(arg, init)
    this.types.add(schema.Park)
  }

  static readonly __mixins: Mixin[] = [ParkMixin, CivicStructureMixin];
}
ParkMixin.appliesTo = schema.Park
ParkMixin.Class = ParkImpl

export const fromPointer = createFactory<Park>([CivicStructureMixin, ParkMixin], { types: [schema.Park] });
