import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import SportsActivityLocationMixin from './SportsActivityLocation';

export interface GolfCourse extends Schema.SportsActivityLocation, RdfResource {
}

export default function GolfCourseMixin<Base extends Constructor>(Resource: Base) {
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
}
GolfCourseMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GolfCourse)
GolfCourseMixin.Class = GolfCourseImpl
