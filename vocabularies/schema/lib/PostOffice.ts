import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { GovernmentOfficeMixin } from './GovernmentOffice';

export interface PostOffice<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.GovernmentOffice<D>, RdfResource<D> {
}

export function PostOfficeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PostOffice> & RdfResourceCore> & Base {
  @namespace(schema)
  class PostOfficeClass extends GovernmentOfficeMixin(Resource) implements Partial<PostOffice> {
  }
  return PostOfficeClass
}

class PostOfficeImpl extends PostOfficeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PostOffice>) {
    super(arg, init)
    this.types.add(schema.PostOffice)
  }

  static readonly __mixins: Mixin[] = [PostOfficeMixin, GovernmentOfficeMixin];
}
PostOfficeMixin.appliesTo = schema.PostOffice
PostOfficeMixin.Class = PostOfficeImpl
