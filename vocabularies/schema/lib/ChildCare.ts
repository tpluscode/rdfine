import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface ChildCare<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function ChildCareMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ChildCare> & RdfResourceCore> & Base {
  @namespace(schema)
  class ChildCareClass extends LocalBusinessMixin(Resource) implements Partial<ChildCare> {
  }
  return ChildCareClass
}

class ChildCareImpl extends ChildCareMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ChildCare>) {
    super(arg, init)
    this.types.add(schema.ChildCare)
  }

  static readonly __mixins: Mixin[] = [ChildCareMixin, LocalBusinessMixin];
}
ChildCareMixin.appliesTo = schema.ChildCare
ChildCareMixin.Class = ChildCareImpl
