import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface CourseInstance<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
  courseMode: string | undefined;
  courseModeTerm: RDF.NamedNode | undefined;
  courseWorkload: string | undefined;
  instructor: Schema.Person<D> | undefined;
}

export function CourseInstanceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CourseInstance> & RdfResourceCore> & Base {
  @namespace(schema)
  class CourseInstanceClass extends EventMixin(Resource) implements Partial<CourseInstance> {
    @property.literal()
    courseMode: string | undefined;
    @property({ path: schema.courseMode })
    courseModeTerm: RDF.NamedNode | undefined;
    @property.literal()
    courseWorkload: string | undefined;
    @property.resource()
    instructor: Schema.Person | undefined;
  }
  return CourseInstanceClass
}

class CourseInstanceImpl extends CourseInstanceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CourseInstance>) {
    super(arg, init)
    this.types.add(schema.CourseInstance)
  }

  static readonly __mixins: Mixin[] = [CourseInstanceMixin, EventMixin];
}
CourseInstanceMixin.appliesTo = schema.CourseInstance
CourseInstanceMixin.Class = CourseInstanceImpl

export const fromPointer = createFactory<CourseInstance>([EventMixin, CourseInstanceMixin], { types: [schema.CourseInstance] });
