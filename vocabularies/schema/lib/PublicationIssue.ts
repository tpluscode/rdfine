import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface PublicationIssue<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  issueNumber: number | string | undefined;
  pageEnd: number | string | undefined;
  pageStart: number | string | undefined;
  pagination: string | undefined;
}

export function PublicationIssueMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PublicationIssue> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PublicationIssueClass extends CreativeWorkMixin(Resource) implements Partial<PublicationIssue> {
    @rdfine.property.literal()
    issueNumber: number | string | undefined;
    @rdfine.property.literal()
    pageEnd: number | string | undefined;
    @rdfine.property.literal()
    pageStart: number | string | undefined;
    @rdfine.property.literal()
    pagination: string | undefined;
  }
  return PublicationIssueClass
}

class PublicationIssueImpl extends PublicationIssueMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PublicationIssue>) {
    super(arg, init)
    this.types.add(schema.PublicationIssue)
  }

  static readonly __mixins: Mixin[] = [PublicationIssueMixin, CreativeWorkMixin];
}
PublicationIssueMixin.appliesTo = schema.PublicationIssue
PublicationIssueMixin.Class = PublicationIssueImpl

export const fromPointer = createFactory<PublicationIssue>([CreativeWorkMixin, PublicationIssueMixin], { types: [schema.PublicationIssue] });
