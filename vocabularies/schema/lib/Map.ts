import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Map<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  mapType: Schema.MapCategoryType | undefined;
}

export function MapMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Map> & RdfResourceCore> & Base {
  @namespace(schema)
  class MapClass extends CreativeWorkMixin(Resource) implements Partial<Map> {
    @property()
    mapType: Schema.MapCategoryType | undefined;
  }
  return MapClass
}

class MapImpl extends MapMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Map>) {
    super(arg, init)
    this.types.add(schema.Map)
  }

  static readonly __mixins: Mixin[] = [MapMixin, CreativeWorkMixin];
}
MapMixin.appliesTo = schema.Map
MapMixin.Class = MapImpl
