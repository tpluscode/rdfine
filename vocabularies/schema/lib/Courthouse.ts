import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { GovernmentBuildingMixin } from './GovernmentBuilding';

export interface Courthouse<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.GovernmentBuilding<D>, RdfResource<D> {
}

export function CourthouseMixin<Base extends Constructor>(Resource: Base): Constructor<Courthouse> & Base {
  @namespace(schema)
  class CourthouseClass extends GovernmentBuildingMixin(Resource) implements Courthouse {
  }
  return CourthouseClass
}

class CourthouseImpl extends CourthouseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Courthouse>) {
    super(arg, init)
    this.types.add(schema.Courthouse)
  }

  static readonly __mixins: Mixin[] = [CourthouseMixin, GovernmentBuildingMixin];
}
CourthouseMixin.appliesTo = schema.Courthouse
CourthouseMixin.Class = CourthouseImpl
