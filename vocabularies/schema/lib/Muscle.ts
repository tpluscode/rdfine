import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AnatomicalStructureMixin } from './AnatomicalStructure';

export interface Muscle<ID extends ResourceNode = ResourceNode> extends Schema.AnatomicalStructure<ID>, RdfResource<ID> {
  antagonist: Schema.Muscle<SiblingNode<ID>> | undefined;
  bloodSupply: Schema.Vessel<SiblingNode<ID>> | undefined;
  insertion: Schema.AnatomicalStructure<SiblingNode<ID>> | undefined;
  muscleAction: string | undefined;
  nerve: Schema.Nerve<SiblingNode<ID>> | undefined;
}

export function MuscleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MuscleClass extends AnatomicalStructureMixin(Resource) implements Muscle {
    @property.resource()
    antagonist: Schema.Muscle | undefined;
    @property.resource()
    bloodSupply: Schema.Vessel | undefined;
    @property.resource()
    insertion: Schema.AnatomicalStructure | undefined;
    @property.literal()
    muscleAction: string | undefined;
    @property.resource()
    nerve: Schema.Nerve | undefined;
  }
  return MuscleClass
}

class MuscleImpl extends MuscleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Muscle>) {
    super(arg, init)
    this.types.add(schema.Muscle)
  }

  static readonly __mixins: Mixin[] = [MuscleMixin, AnatomicalStructureMixin];
}
MuscleMixin.appliesTo = schema.Muscle
MuscleMixin.Class = MuscleImpl
