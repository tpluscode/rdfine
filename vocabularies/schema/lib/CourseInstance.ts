import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface CourseInstance<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
  courseMode: string | undefined;
  courseModeTerm: RDF.NamedNode | undefined;
  courseWorkload: string | undefined;
  instructor: Schema.Person<D> | undefined;
}

export function CourseInstanceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<CourseInstance> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CourseInstanceClass extends EventMixin(Resource) implements Partial<CourseInstance> {
    @rdfine.property.literal()
    courseMode: string | undefined;
    @rdfine.property({ path: schema.courseMode })
    courseModeTerm: RDF.NamedNode | undefined;
    @rdfine.property.literal()
    courseWorkload: string | undefined;
    @rdfine.property.resource()
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
