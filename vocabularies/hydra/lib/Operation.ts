import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import { ResourceMixin } from './Resource';

export interface Operation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Resource<D>, RdfResource<D> {
  description: string | undefined;
  expects: Array<Hydra.Class<D> | Hydra.Resource<D>>;
  expectsHeader: string | undefined;
  method: string | undefined;
  possibleStatus: Array<Hydra.Status<D>>;
  returns: Hydra.Class<D> | Hydra.Resource<D> | undefined;
  returnsHeader: string | undefined;
  title: string | undefined;
}

export function OperationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class OperationClass extends ResourceMixin(Resource) implements Operation {
    @property.literal()
    description: string | undefined;
    @property.resource({ values: 'array' })
    expects!: Array<Hydra.Class | Hydra.Resource>;
    @property.literal()
    expectsHeader: string | undefined;
    @property.literal()
    method: string | undefined;
    @property.resource({ values: 'array', implicitTypes: [hydra.Status] })
    possibleStatus!: Array<Hydra.Status>;
    @property.resource()
    returns: Hydra.Class | Hydra.Resource | undefined;
    @property.literal()
    returnsHeader: string | undefined;
    @property.literal()
    title: string | undefined;
  }
  return OperationClass
}

class OperationImpl extends OperationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Operation>) {
    super(arg, init)
    this.types.add(hydra.Operation)
  }

  static readonly __mixins: Mixin[] = [OperationMixin, ResourceMixin];
}
OperationMixin.appliesTo = hydra.Operation
OperationMixin.Class = OperationImpl
