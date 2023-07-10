import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface GovernmentOffice<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, rdfine.RdfResource<D> {
}

export function GovernmentOfficeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GovernmentOffice & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GovernmentOfficeClass extends LocalBusinessMixin(Resource) {
  }
  return GovernmentOfficeClass as any
}

class GovernmentOfficeImpl extends GovernmentOfficeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GovernmentOffice>) {
    super(arg, init)
    this.types.add(schema.GovernmentOffice)
  }

  static readonly __mixins: Mixin[] = [GovernmentOfficeMixin, LocalBusinessMixin];
}
GovernmentOfficeMixin.appliesTo = schema.GovernmentOffice
GovernmentOfficeMixin.Class = GovernmentOfficeImpl

export const fromPointer = createFactory<GovernmentOffice>([LocalBusinessMixin, GovernmentOfficeMixin], { types: [schema.GovernmentOffice] });
