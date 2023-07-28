import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness.js';

export interface Plumber<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HomeAndConstructionBusiness<D>, rdfine.RdfResource<D> {
}

export function PlumberMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Plumber & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PlumberClass extends HomeAndConstructionBusinessMixin(Resource) {
  }
  return PlumberClass as any
}

class PlumberImpl extends PlumberMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Plumber>) {
    super(arg, init)
    this.types.add(schema.Plumber)
  }

  static readonly __mixins: Mixin[] = [PlumberMixin, HomeAndConstructionBusinessMixin];
}
PlumberMixin.appliesTo = schema.Plumber
PlumberMixin.Class = PlumberImpl

export const fromPointer = createFactory<Plumber>([HomeAndConstructionBusinessMixin, PlumberMixin], { types: [schema.Plumber] });
