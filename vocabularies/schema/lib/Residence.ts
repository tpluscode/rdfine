import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlaceMixin } from './Place';

export interface Residence<ID extends ResourceNode = ResourceNode> extends Schema.Place<ID>, RdfResource<ID> {
  accommodationFloorPlan: Schema.FloorPlan<SiblingNode<ID>> | undefined;
}

export function ResidenceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ResidenceClass extends PlaceMixin(Resource) implements Residence {
    @property.resource()
    accommodationFloorPlan: Schema.FloorPlan | undefined;
  }
  return ResidenceClass
}

class ResidenceImpl extends ResidenceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Residence>) {
    super(arg, init)
    this.types.add(schema.Residence)
  }

  static readonly __mixins: Mixin[] = [ResidenceMixin, PlaceMixin];
}
ResidenceMixin.appliesTo = schema.Residence
ResidenceMixin.Class = ResidenceImpl
