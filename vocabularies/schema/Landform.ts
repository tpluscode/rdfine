import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PlaceMixin } from './Place';

export interface Landform extends Schema.Place, RdfResource {
}

export function LandformMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LandformClass extends PlaceMixin(Resource) implements Landform {
  }
  return LandformClass
}

class LandformImpl extends LandformMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Landform>) {
    super(arg, init)
    this.types.add(schema.Landform)
  }

  static readonly __mixins: Mixin[] = [LandformMixin, PlaceMixin];
}
LandformMixin.appliesTo = schema.Landform
LandformMixin.Class = LandformImpl
