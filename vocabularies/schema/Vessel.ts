import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { AnatomicalStructureMixin } from './AnatomicalStructure';

export interface Vessel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AnatomicalStructure<D>, RdfResource<D> {
}

export function VesselMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VesselClass extends AnatomicalStructureMixin(Resource) implements Vessel {
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
