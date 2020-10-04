import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { SportsActivityLocationMixin } from './SportsActivityLocation';

export interface GolfCourse<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SportsActivityLocation<D>, RdfResource<D> {
}

export function GolfCourseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GolfCourseClass extends SportsActivityLocationMixin(Resource) implements GolfCourse {
  }
  return GolfCourseClass
}

class GolfCourseImpl extends GolfCourseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GolfCourse>) {
    super(arg, init)
    this.types.add(schema.GolfCourse)
  }

  static readonly __mixins: Mixin[] = [GolfCourseMixin, SportsActivityLocationMixin];
}
GolfCourseMixin.appliesTo = schema.GolfCourse
GolfCourseMixin.Class = GolfCourseImpl
