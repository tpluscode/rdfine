import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface Aquarium<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function AquariumMixin<Base extends Constructor>(Resource: Base): Constructor<Aquarium> & Base {
  @namespace(schema)
  class AquariumClass extends CivicStructureMixin(Resource) implements Aquarium {
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
