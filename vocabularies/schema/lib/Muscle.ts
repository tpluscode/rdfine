import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AnatomicalStructureMixin } from './AnatomicalStructure.js';

export interface Muscle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AnatomicalStructure<D>, rdfine.RdfResource<D> {
  antagonist: Schema.Muscle<D> | undefined;
  bloodSupply: Schema.Vessel<D> | undefined;
  insertion: Schema.AnatomicalStructure<D> | undefined;
  muscleAction: string | undefined;
  nerve: Schema.Nerve<D> | undefined;
}

export function MuscleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Muscle> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MuscleClass extends AnatomicalStructureMixin(Resource) implements Partial<Muscle> {
    @rdfine.property.resource()
    antagonist: Schema.Muscle | undefined;
    @rdfine.property.resource()
    bloodSupply: Schema.Vessel | undefined;
    @rdfine.property.resource()
    insertion: Schema.AnatomicalStructure | undefined;
    @rdfine.property.literal()
    muscleAction: string | undefined;
    @rdfine.property.resource()
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

export const fromPointer = createFactory<Muscle>([AnatomicalStructureMixin, MuscleMixin], { types: [schema.Muscle] });
