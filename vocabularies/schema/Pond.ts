import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { BodyOfWaterMixin } from './BodyOfWater';

export interface Pond extends Schema.BodyOfWater, RdfResource {
}

export function PondMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PondClass extends BodyOfWaterMixin(Resource) implements Pond {
  }
  return PondClass
}

class PondImpl extends PondMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Pond>) {
    super(arg, init)
    this.types.add(schema.Pond)
  }

  static readonly __mixins: Mixin[] = [PondMixin, BodyOfWaterMixin];
}
PondMixin.appliesTo = schema.Pond
PondMixin.Class = PondImpl
