import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Hydra from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/Class';
import { ResourceMixin } from './Resource';

export interface Class extends Rdfs.Class, Hydra.Resource, RdfResource {
  description: string;
  supportedOperation: Array<Hydra.Operation>;
  supportedProperty: Array<Hydra.SupportedProperty>;
  title: string;
}

export function ClassMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class ClassClass extends ResourceMixin(RdfsClassMixin(Resource)) implements Class {
    @property.literal()
    description!: string;
    @property.resource({ values: 'array', implicitTypes: [hydra.Operation] })
    supportedOperation!: Array<Hydra.Operation>;
    @property.resource({ values: 'array', implicitTypes: [hydra.SupportedProperty] })
    supportedProperty!: Array<Hydra.SupportedProperty>;
    @property.literal()
    title!: string;
  }
  return ClassClass
}

class ClassImpl extends ClassMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Class>) {
    super(arg, init)
    this.types.add(hydra.Class)
  }
}
ClassMixin.shouldApply = (r: RdfResource) => r.types.has(hydra.Class)
ClassMixin.Class = ClassImpl
