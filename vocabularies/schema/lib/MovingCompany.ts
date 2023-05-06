import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness.js';

export interface MovingCompany<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HomeAndConstructionBusiness<D>, RdfResource<D> {
}

export function MovingCompanyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MovingCompany> & RdfResourceCore> & Base {
  @namespace(schema)
  class MovingCompanyClass extends HomeAndConstructionBusinessMixin(Resource) implements Partial<MovingCompany> {
  }
  return MovingCompanyClass
}

class MovingCompanyImpl extends MovingCompanyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MovingCompany>) {
    super(arg, init)
    this.types.add(schema.MovingCompany)
  }

  static readonly __mixins: Mixin[] = [MovingCompanyMixin, HomeAndConstructionBusinessMixin];
}
MovingCompanyMixin.appliesTo = schema.MovingCompany
MovingCompanyMixin.Class = MovingCompanyImpl

export const fromPointer = createFactory<MovingCompany>([HomeAndConstructionBusinessMixin, MovingCompanyMixin], { types: [schema.MovingCompany] });
