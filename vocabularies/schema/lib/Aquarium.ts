import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface Aquarium<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function AquariumMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Aquarium> & RdfResourceCore> & Base {
  @namespace(schema)
  class AquariumClass extends CivicStructureMixin(Resource) implements Partial<Aquarium> {
  }
  return AquariumClass
}

class AquariumImpl extends AquariumMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Aquarium>) {
    super(arg, init)
    this.types.add(schema.Aquarium)
  }

  static readonly __mixins: Mixin[] = [AquariumMixin, CivicStructureMixin];
}
AquariumMixin.appliesTo = schema.Aquarium
AquariumMixin.Class = AquariumImpl

export const fromPointer = createFactory<Aquarium>([CivicStructureMixin, AquariumMixin], { types: [schema.Aquarium] });
