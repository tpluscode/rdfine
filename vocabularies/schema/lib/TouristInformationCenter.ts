import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface TouristInformationCenter<ID extends ResourceNode = ResourceNode> extends Schema.LocalBusiness<ID>, RdfResource<ID> {
}

export function TouristInformationCenterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TouristInformationCenterClass extends LocalBusinessMixin(Resource) implements TouristInformationCenter {
  }
  return TouristInformationCenterClass
}

class TouristInformationCenterImpl extends TouristInformationCenterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TouristInformationCenter>) {
    super(arg, init)
    this.types.add(schema.TouristInformationCenter)
  }

  static readonly __mixins: Mixin[] = [TouristInformationCenterMixin, LocalBusinessMixin];
}
TouristInformationCenterMixin.appliesTo = schema.TouristInformationCenter
TouristInformationCenterMixin.Class = TouristInformationCenterImpl
