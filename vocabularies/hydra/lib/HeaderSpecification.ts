import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '../index.js';
import { ResourceMixin } from './Resource.js';

export interface HeaderSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Resource<D>, rdfine.RdfResource<D> {
  closedSet: boolean | undefined;
  headerName: string | undefined;
  possibleValue: Array<string>;
}

export function HeaderSpecificationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HeaderSpecification> & RdfResourceCore> & Base {
  @rdfine.namespace(hydra)
  class HeaderSpecificationClass extends ResourceMixin(Resource) implements Partial<HeaderSpecification> {
    @rdfine.property.literal({ type: Boolean })
    closedSet: boolean | undefined;
    @rdfine.property.literal()
    headerName: string | undefined;
    @rdfine.property.literal({ values: 'array' })
    possibleValue!: Array<string>;
  }
  return HeaderSpecificationClass
}

class HeaderSpecificationImpl extends HeaderSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HeaderSpecification>) {
    super(arg, init)
    this.types.add(hydra.HeaderSpecification)
  }

  static readonly __mixins: Mixin[] = [HeaderSpecificationMixin, ResourceMixin];
}
HeaderSpecificationMixin.appliesTo = hydra.HeaderSpecification
HeaderSpecificationMixin.Class = HeaderSpecificationImpl

export const fromPointer = createFactory<HeaderSpecification>([ResourceMixin, HeaderSpecificationMixin], { types: [hydra.HeaderSpecification] });
