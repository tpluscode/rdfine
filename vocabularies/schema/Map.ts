import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Map extends Schema.CreativeWork, RdfResource {
  mapType: Schema.MapCategoryType;
}

export default function MapMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MapClass extends CreativeWorkMixin(Resource) implements Map {
    @property()
    mapType!: Schema.MapCategoryType;
  }
  return MapClass
}

class MapImpl extends MapMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Map>) {
    super(arg, init)
    this.types.add(schema.Map)
  }
}
MapMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Map)
MapMixin.Class = MapImpl
