import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlaceMixin } from './Place.js';

export interface AdministrativeArea<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, rdfine.RdfResource<D> {
}

export function AdministrativeAreaMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AdministrativeArea & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AdministrativeAreaClass extends PlaceMixin(Resource) {
  }
  return AdministrativeAreaClass as any
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

export const fromPointer = createFactory<AdministrativeArea>([PlaceMixin, AdministrativeAreaMixin], { types: [schema.AdministrativeArea] });
