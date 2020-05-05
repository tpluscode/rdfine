import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PlaceMixin } from './Place';

export interface AdministrativeArea extends Schema.Place, RdfResource {
}

export function AdministrativeAreaMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AdministrativeAreaClass extends PlaceMixin(Resource) implements AdministrativeArea {
  }
  return AdministrativeAreaClass
}

class AdministrativeAreaImpl extends AdministrativeAreaMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AdministrativeArea>) {
    super(arg, init)
    this.types.add(schema.AdministrativeArea)
  }

  static readonly __mixins: Mixin[] = [AdministrativeAreaMixin, PlaceMixin];
}
AdministrativeAreaMixin.appliesTo = schema.AdministrativeArea
AdministrativeAreaMixin.Class = AdministrativeAreaImpl
