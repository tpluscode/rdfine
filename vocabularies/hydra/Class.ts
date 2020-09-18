import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '.';
import * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin } from './Resource';

export interface Class extends Rdfs.Class, Hydra.Resource, RdfResource {
  description: string | undefined;
  supportedOperation: Array<Hydra.Operation>;
  supportedProperty: Array<Hydra.SupportedProperty>;
  title: string | undefined;
}

export function ClassMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class ClassClass extends ResourceMixin(Rdfs.ClassMixin(Resource)) implements Class {
    @property.literal()
    description: string | undefined;
    @property.resource({ values: 'array', implicitTypes: [hydra.Operation] })
    supportedOperation!: Array<Hydra.Operation>;
    @property.resource({ values: 'array', implicitTypes: [hydra.SupportedProperty] })
    supportedProperty!: Array<Hydra.SupportedProperty>;
    @property.literal()
    title: string | undefined;
  }
  return ClassClass
}

class ClassImpl extends ClassMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Class>) {
    super(arg, init)
    this.types.add(hydra.Class)
  }

  static readonly __mixins: Mixin[] = [ClassMixin, Rdfs.ClassMixin, ResourceMixin];
}
ClassMixin.appliesTo = hydra.Class
ClassMixin.Class = ClassImpl
