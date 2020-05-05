import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LandformMixin } from './Landform';

export interface Continent extends Schema.Landform, RdfResource {
}

export function ContinentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ContinentClass extends LandformMixin(Resource) implements Continent {
  }
  return ContinentClass
}

class ContinentImpl extends ContinentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Continent>) {
    super(arg, init)
    this.types.add(schema.Continent)
  }

  static readonly __mixins: Mixin[] = [ContinentMixin, LandformMixin];
}
ContinentMixin.appliesTo = schema.Continent
ContinentMixin.Class = ContinentImpl
