import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AnatomicalStructureMixin } from './AnatomicalStructure.js';

export interface Vessel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AnatomicalStructure<D>, rdfine.RdfResource<D> {
}

export function VesselMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Vessel> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class VesselClass extends AnatomicalStructureMixin(Resource) implements Partial<Vessel> {
  }
  return VesselClass
}

class VesselImpl extends VesselMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Vessel>) {
    super(arg, init)
    this.types.add(schema.Vessel)
  }

  static readonly __mixins: Mixin[] = [VesselMixin, AnatomicalStructureMixin];
}
VesselMixin.appliesTo = schema.Vessel
VesselMixin.Class = VesselImpl

export const fromPointer = createFactory<Vessel>([AnatomicalStructureMixin, VesselMixin], { types: [schema.Vessel] });
