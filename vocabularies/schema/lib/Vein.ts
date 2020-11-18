import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { VesselMixin } from './Vessel';

export interface Vein<ID extends ResourceNode = ResourceNode> extends Schema.Vessel<ID>, RdfResource<ID> {
  drainsTo: Schema.Vessel<SiblingNode<ID>> | undefined;
  regionDrained: Schema.AnatomicalStructure<SiblingNode<ID>> | Schema.AnatomicalSystem<SiblingNode<ID>> | undefined;
  tributary: Schema.AnatomicalStructure<SiblingNode<ID>> | undefined;
}

export function VeinMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VeinClass extends VesselMixin(Resource) implements Vein {
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
