import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface PublicationIssue extends Schema.CreativeWork, RdfResource {
  issueNumber: number | string | undefined;
  pageEnd: number | string | undefined;
  pageStart: number | string | undefined;
  pagination: string | undefined;
}

export function PublicationIssueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PublicationIssueClass extends CreativeWorkMixin(Resource) implements PublicationIssue {
    @property.literal()
    issueNumber: number | string | undefined;
    @property.literal()
    pageEnd: number | string | undefined;
    @property.literal()
    pageStart: number | string | undefined;
    @property.literal()
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
