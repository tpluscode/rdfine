import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface EmploymentAgency<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function EmploymentAgencyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EmploymentAgency> & RdfResourceCore> & Base {
  @namespace(schema)
  class EmploymentAgencyClass extends LocalBusinessMixin(Resource) implements Partial<EmploymentAgency> {
  }
  return EmploymentAgencyClass
}

class EmploymentAgencyImpl extends EmploymentAgencyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EmploymentAgency>) {
    super(arg, init)
    this.types.add(schema.EmploymentAgency)
  }

  static readonly __mixins: Mixin[] = [EmploymentAgencyMixin, LocalBusinessMixin];
}
EmploymentAgencyMixin.appliesTo = schema.EmploymentAgency
EmploymentAgencyMixin.Class = EmploymentAgencyImpl

export const fromPointer = createFactory<EmploymentAgency>([LocalBusinessMixin, EmploymentAgencyMixin], { types: [schema.EmploymentAgency] });
