import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';

export interface Operation<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  description: string | undefined;
  expects: Array<Hydra.Class<D> | Hydra.Resource<D> | Rdfs.Class<D> | Rdfs.Resource<D>>;
  expectsHeader: Hydra.HeaderSpecification<D> | undefined;
  expectsHeaderLiteral: string | undefined;
  method: string | undefined;
  possibleStatus: Array<Hydra.Status<D>>;
  returns: Hydra.Class<D> | Hydra.Resource<D> | Rdfs.Class<D> | Rdfs.Resource<D> | undefined;
  returnsHeader: Hydra.HeaderSpecification<D> | undefined;
  returnsHeaderLiteral: string | undefined;
  title: string | undefined;
}

export function OperationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Operation & RdfResourceCore> & Base {
  @rdfine.namespace(hydra)
  class OperationClass extends Resource {
    @rdfine.property.literal()
    description: string | undefined;
    @rdfine.property.resource({ values: 'array' })
    expects!: Array<Hydra.Class | Hydra.Resource | Rdfs.Class | Rdfs.Resource>;
    @rdfine.property.resource()
    expectsHeader: Hydra.HeaderSpecification | undefined;
    @rdfine.property.literal({ path: hydra.expectsHeader })
    expectsHeaderLiteral: string | undefined;
    @rdfine.property.literal()
    method: string | undefined;
    @rdfine.property.resource({ values: 'array', implicitTypes: [hydra.Status] })
    possibleStatus!: Array<Hydra.Status>;
    @rdfine.property.resource()
    returns: Hydra.Class | Hydra.Resource | Rdfs.Class | Rdfs.Resource | undefined;
    @rdfine.property.resource()
    returnsHeader: Hydra.HeaderSpecification | undefined;
    @rdfine.property.literal({ path: hydra.returnsHeader })
    returnsHeaderLiteral: string | undefined;
    @rdfine.property.literal()
    title: string | undefined;
  }
  return OperationClass as any
}

class OperationImpl extends OperationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Operation>) {
    super(arg, init)
    this.types.add(hydra.Operation)
  }

  static readonly __mixins: Mixin[] = [OperationMixin];
}
OperationMixin.appliesTo = hydra.Operation
OperationMixin.Class = OperationImpl

export const fromPointer = createFactory<Operation>([OperationMixin], { types: [hydra.Operation] });
