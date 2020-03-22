import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface PublicationIssue extends Schema.CreativeWork, RdfResource {
  issueNumber: number | string;
  pageEnd: number | string;
  pageStart: number | string;
  pagination: string;
}

export default function PublicationIssueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PublicationIssueClass extends CreativeWorkMixin(Resource) implements PublicationIssue {
    @property.literal()
    issueNumber!: number | string;
    @property.literal()
    pageEnd!: number | string;
    @property.literal()
    pageStart!: number | string;
    @property.literal()
    pagination!: string;
  }
  return PublicationIssueClass
}

class PublicationIssueImpl extends PublicationIssueMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.PublicationIssue)
  }
}
PublicationIssueMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PublicationIssue)
PublicationIssueMixin.Class = PublicationIssueImpl
