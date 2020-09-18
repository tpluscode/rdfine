import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ArticleMixin } from './Article';

export interface Report extends Schema.Article, RdfResource {
  reportNumber: string | undefined;
}

export function ReportMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReportClass extends ArticleMixin(Resource) implements Report {
    @property.literal()
    reportNumber: string | undefined;
  }
  return ReportClass
}

class ReportImpl extends ReportMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Report>) {
    super(arg, init)
    this.types.add(schema.Report)
  }

  static readonly __mixins: Mixin[] = [ReportMixin, ArticleMixin];
}
ReportMixin.appliesTo = schema.Report
ReportMixin.Class = ReportImpl
