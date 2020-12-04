import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class';
import { ResourceMixin } from './Resource';

export interface Class<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Class<D>, Hydra.Resource<D>, RdfResource<D> {
  description: string | undefined;
  supportedOperation: Array<Hydra.Operation<D>>;
  supportedProperty: Array<Hydra.SupportedProperty<D>>;
  title: string | undefined;
}

export function ClassMixin<Base extends Constructor>(Resource: Base): Constructor<Class> & Base {
  @namespace(hydra)
  class ClassClass extends ResourceMixin(RdfsClassMixin(Resource)) implements Class {
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

  static readonly __mixins: Mixin[] = [ClassMixin, RdfsClassMixin, ResourceMixin];
}
ClassMixin.appliesTo = hydra.Class
ClassMixin.Class = ClassImpl
