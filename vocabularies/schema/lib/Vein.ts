import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { VesselMixin } from './Vessel';

export interface Vein<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vessel<D>, RdfResource<D> {
  drainsTo: Schema.Vessel<D> | undefined;
  regionDrained: Schema.AnatomicalStructure<D> | Schema.AnatomicalSystem<D> | undefined;
  tributary: Schema.AnatomicalStructure<D> | undefined;
}

export function VeinMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Vein> & RdfResourceCore> & Base {
  @namespace(schema)
  class VeinClass extends VesselMixin(Resource) implements Partial<Vein> {
    @property.resource()
    drainsTo: Schema.Vessel | undefined;
    @property.resource()
    regionDrained: Schema.AnatomicalStructure | Schema.AnatomicalSystem | undefined;
    @property.resource()
    tributary: Schema.AnatomicalStructure | undefined;
  }
  return VeinClass
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
