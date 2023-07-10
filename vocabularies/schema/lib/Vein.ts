import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { VesselMixin } from './Vessel.js';

export interface Vein<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vessel<D>, rdfine.RdfResource<D> {
  drainsTo: Schema.Vessel<D> | undefined;
  regionDrained: Schema.AnatomicalStructure<D> | Schema.AnatomicalSystem<D> | undefined;
  tributary: Schema.AnatomicalStructure<D> | undefined;
}

export function VeinMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Vein & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class VeinClass extends VesselMixin(Resource) {
    @rdfine.property.resource()
    drainsTo: Schema.Vessel | undefined;
    @rdfine.property.resource()
    regionDrained: Schema.AnatomicalStructure | Schema.AnatomicalSystem | undefined;
    @rdfine.property.resource()
    tributary: Schema.AnatomicalStructure | undefined;
  }
  return VeinClass as any
}

class VeinImpl extends VeinMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Vein>) {
    super(arg, init)
    this.types.add(schema.Vein)
  }

  static readonly __mixins: Mixin[] = [VeinMixin, VesselMixin];
}
VeinMixin.appliesTo = schema.Vein
VeinMixin.Class = VeinImpl

export const fromPointer = createFactory<Vein>([VesselMixin, VeinMixin], { types: [schema.Vein] });
