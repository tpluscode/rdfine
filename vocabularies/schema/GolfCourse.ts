import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<GolfCourse>) {
    super(arg)
    this.types.add(schema.GolfCourse)
    initializeProperties(this, init)
  }
}
GolfCourseMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GolfCourse)
GolfCourseMixin.Class = GolfCourseImpl
