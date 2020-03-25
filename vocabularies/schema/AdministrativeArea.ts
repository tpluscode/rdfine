import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import PlaceMixin from './Place';

export interface AdministrativeArea extends Schema.Place, RdfResource {
}

export default function AdministrativeAreaMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AdministrativeAreaClass extends PlaceMixin(Resource) implements AdministrativeArea {
  }
  return AdministrativeAreaClass
}

class AdministrativeAreaImpl extends AdministrativeAreaMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<AdministrativeArea>) {
    super(arg)
    this.types.add(schema.AdministrativeArea)
    initializeProperties<AdministrativeArea>(this, init)
  }
}
AdministrativeAreaMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AdministrativeArea)
AdministrativeAreaMixin.Class = AdministrativeAreaImpl
