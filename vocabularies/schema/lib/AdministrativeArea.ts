import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlaceMixin } from './Place';

export interface AdministrativeArea<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, RdfResource<D> {
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
