import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { GovernmentOfficeMixin } from './GovernmentOffice.js';

export interface PostOffice<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.GovernmentOffice<D>, rdfine.RdfResource<D> {
}

export function PostOfficeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PostOffice> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
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

export const fromPointer = createFactory<PostOffice>([GovernmentOfficeMixin, PostOfficeMixin], { types: [schema.PostOffice] });
