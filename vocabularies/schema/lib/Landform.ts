import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlaceMixin } from './Place';

export interface Landform<ID extends ResourceNode = ResourceNode> extends Schema.Place<ID>, RdfResource<ID> {
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
