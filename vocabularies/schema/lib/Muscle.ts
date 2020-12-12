import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AnatomicalStructureMixin } from './AnatomicalStructure';

export interface Muscle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AnatomicalStructure<D>, RdfResource<D> {
  antagonist: Schema.Muscle<D> | undefined;
  bloodSupply: Schema.Vessel<D> | undefined;
  insertion: Schema.AnatomicalStructure<D> | undefined;
  muscleAction: string | undefined;
  nerve: Schema.Nerve<D> | undefined;
}

export function MuscleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Muscle> & RdfResourceCore> & Base {
  @namespace(schema)
  class MuscleClass extends AnatomicalStructureMixin(Resource) implements Partial<Muscle> {
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

export const fromPointer = createFactory<Muscle>([AnatomicalStructureMixin, MuscleMixin], { types: [schema.Muscle] });
