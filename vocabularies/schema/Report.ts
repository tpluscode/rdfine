import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ArticleMixin from './Article';

export interface Report extends Schema.Article, RdfResource {
  reportNumber: string;
}

export default function ReportMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReportClass extends ArticleMixin(Resource) implements Report {
    @property.literal()
    reportNumber!: string;
  }
  return ReportClass
}

class ReportImpl extends ReportMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Report)
  }
}
ReportMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Report)
ReportMixin.Class = ReportImpl